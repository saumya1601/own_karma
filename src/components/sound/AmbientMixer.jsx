import { useEffect, useRef } from 'react'
import { useSoundStore } from '../../stores/soundStore.js'

export default function AmbientMixer() {
  const isMuted = useSoundStore((s) => s.isMuted)
  const audioCtxRef = useRef(null)
  
  // Audio Nodes
  const masterGainRef = useRef(null)
  const droneGainRef = useRef(null)
  
  // Drone Oscillators
  const osc1Ref = useRef(null)
  const osc2Ref = useRef(null)
  const filterRef = useRef(null)
  const lfoRef = useRef(null)

  // Initialize Web Audio synthesis
  const initAudio = () => {
    if (audioCtxRef.current) return

    const AudioContext = window.AudioContext || window.webkitAudioContext
    const ctx = new AudioContext()
    audioCtxRef.current = ctx

    // Master output node
    const masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(0.08, ctx.currentTime) // -18 LUFS feel
    masterGain.connect(ctx.destination)
    masterGainRef.current = masterGain

    // ─── Procedural Sub-Drone Synthesis ─────────────────────────────────────
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(90, ctx.currentTime)
    filter.Q.setValueAtTime(3, ctx.currentTime)
    filter.connect(masterGain)
    filterRef.current = filter

    // Osc 1 (Sine at 55Hz - A1)
    const osc1 = ctx.createOscillator()
    osc1.type = 'sine'
    osc1.frequency.setValueAtTime(55, ctx.currentTime)
    
    // Osc 2 (Sawtooth at 55.4Hz for beating texture)
    const osc2 = ctx.createOscillator()
    osc2.type = 'sawtooth'
    osc2.frequency.setValueAtTime(55.4, ctx.currentTime)

    // Detune gain to make sawtooth very subtle
    const osc2Gain = ctx.createGain()
    osc2Gain.gain.setValueAtTime(0.03, ctx.currentTime)
    osc2.connect(osc2Gain)

    // Connect to filter
    const droneGain = ctx.createGain()
    droneGain.gain.setValueAtTime(0.7, ctx.currentTime)
    droneGain.connect(filter)
    droneGainRef.current = droneGain

    osc1.connect(droneGain)
    osc2Gain.connect(droneGain)

    // LFO to slowly sweep the lowpass filter cutoff (breathing feel)
    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()
    lfo.type = 'sine'
    lfo.frequency.setValueAtTime(0.05, ctx.currentTime) // Very slow
    lfoGain.gain.setValueAtTime(35, ctx.currentTime) // Sweep range ±35Hz
    
    lfo.connect(lfoGain)
    lfoGain.connect(filter.frequency)

    // Start oscillators
    osc1.start()
    osc2.start()
    lfo.start()

    osc1Ref.current = osc1
    osc2Ref.current = osc2
    lfoRef.current = lfo
  }

  // Handle Mute state changes
  useEffect(() => {
    if (isMuted) {
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend()
      }
    } else {
      initAudio()
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume()
      }
    }
  }, [isMuted])

  // Play a procedurally synthesized click (Interaction Tick)
  const playTick = () => {
    const ctx = audioCtxRef.current
    const master = masterGainRef.current
    if (!ctx || ctx.state !== 'running' || !master) return

    // Quick high frequency sine click
    const osc = ctx.createOscillator()
    const gainNode = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(1600, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.03)

    gainNode.gain.setValueAtTime(0.005, ctx.currentTime) // Extremely quiet -24dB feel
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03)

    osc.connect(gainNode)
    gainNode.connect(master)

    osc.start()
    osc.stop(ctx.currentTime + 0.04)
  }

  // Play a procedurally synthesized stinger (Transition Sound)
  const playStinger = (segmentIndex) => {
    const ctx = audioCtxRef.current
    const master = masterGainRef.current
    if (!ctx || ctx.state !== 'running' || !master) return

    const osc = ctx.createOscillator()
    const gainNode = ctx.createGain()
    const filter = ctx.createBiquadFilter()

    osc.type = 'sine'
    // Pitch corresponds to segment progress
    const baseFreq = 110 + segmentIndex * 15
    osc.frequency.setValueAtTime(baseFreq, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, ctx.currentTime + 0.6)

    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(400, ctx.currentTime)

    gainNode.gain.setValueAtTime(0.0001, ctx.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.15)
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7)

    osc.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(master)

    osc.start()
    osc.stop(ctx.currentTime + 0.8)
  }

  // Adjust drone volume depending on scroll segments
  useEffect(() => {
    const handleSegmentChange = (e) => {
      const { segmentIndex } = e.detail
      const ctx = audioCtxRef.current
      const droneGain = droneGainRef.current
      if (!ctx || !droneGain) return

      // Duck drone during Sun Ignition (segment 8) and silence during Lock (segment 9)
      const t = ctx.currentTime
      if (segmentIndex === 8) {
        // Sun Ignition: Duck drone by 6dB (multiply gain by 0.5)
        droneGain.gain.linearRampToValueAtTime(0.35, t + 0.5)
      } else if (segmentIndex === 9) {
        // Lock: Fade to silence
        droneGain.gain.linearRampToValueAtTime(0.0001, t + 0.5)
      } else {
        // Reset drone volume
        droneGain.gain.linearRampToValueAtTime(0.7, t + 0.5)
      }

      playStinger(segmentIndex)
    }

    // Attach click listeners to window for interaction ticks
    const handleWindowClick = (e) => {
      if (e.target.closest('a, button, input, select, label')) {
        playTick()
      }
    }

    window.addEventListener('ok-segment-change', handleSegmentChange)
    window.addEventListener('click', handleWindowClick, { passive: true })

    return () => {
      window.removeEventListener('ok-segment-change', handleSegmentChange)
      window.removeEventListener('click', handleWindowClick)
      
      // Cleanup audio context if unmounted
      if (audioCtxRef.current) {
        audioCtxRef.current.close()
      }
    }
  }, [])

  return null
}
