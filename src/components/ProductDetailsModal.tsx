import React from 'react'

interface ProductDetailsModalProps {
  isOpen: boolean
  product: any
  onClose: () => void
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  isOpen,
  product,
  onClose
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-bold mb-4">Price: ${product.price}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ProductDetailsModal
