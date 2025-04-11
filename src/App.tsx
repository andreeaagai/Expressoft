import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext'
import Menu from './pages/Menu'
import Home from './pages/Home'

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </CartProvider>
  )
}

export default App
