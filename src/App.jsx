import './App.css'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProductDetail from './pages/product-detail'
import { CartProvider } from './context/cart-context'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import SuccessOrder from './pages/success-order'
function App() {
  return (
    <div>
      <CartProvider>
        <Header logo="Ds"/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/success-order' element={<SuccessOrder />} />
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
