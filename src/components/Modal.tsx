import React from 'react'
import Cart from 'pages/Cart'
import { CartItem } from './CartContext'

interface ModalProps {
  isOpen: boolean
  toggleModal: () => void
  cart: CartItem[]
  onRemoveFromCart: (productId: string) => void
  getTotalPrice: () => number
  onClearCart: () => void
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  toggleModal,
  cart,
  onRemoveFromCart,
  getTotalPrice,
  onClearCart
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
        <Cart
          cart={cart}
          onRemoveFromCart={onRemoveFromCart}
          getTotalPrice={getTotalPrice}
          onClearCart={onClearCart}
        />
        <button
          onClick={toggleModal}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
