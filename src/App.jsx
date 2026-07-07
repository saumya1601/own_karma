import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import TopNav from './components/nav/TopNav.jsx'
import Footer from './components/nav/Footer.jsx'
import AxisBar from './components/nav/AxisBar.jsx'
import CustomCursor from './components/cursor/CustomCursor.jsx'
import AmbientMixer from './components/sound/AmbientMixer.jsx'
import CartDrawer from './components/cart/CartDrawer.jsx'
import { useLenis } from './hooks/useLenis.js'

// ─── Lazy-loaded route components ────────────────────────────────────────────
const Home = lazy(() => import('./routes/Home.jsx'))
const Shop = lazy(() => import('./routes/Shop.jsx'))
const Category = lazy(() => import('./routes/Category.jsx'))
const Product = lazy(() => import('./routes/Product.jsx'))
const Cart = lazy(() => import('./routes/Cart.jsx'))
const Checkout = lazy(() => import('./routes/Checkout.jsx'))
const CheckoutSuccess = lazy(() => import('./routes/CheckoutSuccess.jsx'))
const Story = lazy(() => import('./routes/Story.jsx'))
const StoryConcept = lazy(() => import('./routes/StoryConcept.jsx'))
const Waitlist = lazy(() => import('./routes/Waitlist.jsx'))
const About = lazy(() => import('./routes/About.jsx'))
const Contact = lazy(() => import('./routes/Contact.jsx'))
const Terms = lazy(() => import('./routes/legal/Terms.jsx'))
const Privacy = lazy(() => import('./routes/legal/Privacy.jsx'))
const Shipping = lazy(() => import('./routes/legal/Shipping.jsx'))
const Returns = lazy(() => import('./routes/legal/Returns.jsx'))
const NotFound = lazy(() => import('./routes/NotFound.jsx'))

// ─── Loading fallback ────────────────────────────────────────────────────────
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-px h-12 bg-ok-axis/40 animate-pulse" />
    </div>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  useLenis() // Global smooth scroll

  return (
    <>
      <CustomCursor />
      <AmbientMixer />
      <TopNav />
      <CartDrawer />


      <main className="pt-16">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Category />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            <Route path="/story" element={<Story />} />
            <Route path="/story/:concept" element={<StoryConcept />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/shipping" element={<Shipping />} />
            <Route path="/legal/returns" element={<Returns />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <AxisBar />
    </>
  )
}
