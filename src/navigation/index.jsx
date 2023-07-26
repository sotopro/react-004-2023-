import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import ProductDetail from '../pages/product-detail'
import Cart from '../pages/cart'
import Checkout from '../pages/checkout'
import SuccessOrder from '../pages/success-order'

function Router() {
  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/success-order' element={<SuccessOrder />} />
        </Routes>
  )
}

export default Router
