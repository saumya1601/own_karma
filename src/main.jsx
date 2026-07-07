import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './lib/i18n.js'  // Initialize i18n before app renders
import './index.css'
import App from './App'

// Runtime Zod validation on boot in development
if (import.meta.env.DEV) {
  Promise.all([
    import('./data/products.js'),
    import('./schemas/product.js')
  ]).then(([{ products }, { ProductsArraySchema }]) => {
    try {
      ProductsArraySchema.parse(products)
      console.log('✅ Zod schema validation succeeded for catalog.')
    } catch (err) {
      console.error('❌ Zod schema validation failed for products catalog:', err)
    }
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

