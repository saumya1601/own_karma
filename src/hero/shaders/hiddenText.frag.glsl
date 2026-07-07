uniform vec3 baseColor;
uniform sampler2D textTexture;
uniform float opacity;
uniform float textStrength;
varying vec2 vUv;

void main() {
  // Read from the CanvasTexture mask (which has white text on black background)
  vec4 mask = texture2D(textTexture, vUv);
  
  // Mix base color with a slightly brighter golden/white accent where text exists
  vec3 finalColor = mix(baseColor, baseColor * 2.2, mask.r * textStrength);
  
  gl_FragColor = vec4(finalColor, opacity);
}
