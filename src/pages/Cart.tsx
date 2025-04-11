import React from 'react'
import { CartItem } from '../components/CartContext'

interface CartProps {
  cart: CartItem[]
  onRemoveFromCart: (productId: string) => void
  getTotalPrice: () => number
  onClearCart: () => void
}

const Cart: React.FC<CartProps> = ({
  cart,
  onRemoveFromCart,
  getTotalPrice,
  onClearCart
}) => {
  return (
    <div className="p-6 mt-6 bg-white shadow-md rounded-lg border border-gray-300">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Your Order</h2>
      {cart.length === 0 ? (
        <p className="text-gray-400 text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div>
                  <h2 className="text-lg font-medium text-gray-600">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-500">
                    Total Price: ${item.totalPrice.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Total: ${getTotalPrice().toFixed(2)}
            </h2>
            <button
              onClick={onClearCart}
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
