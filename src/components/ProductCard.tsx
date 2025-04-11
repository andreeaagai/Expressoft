import React from 'react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  available: boolean
  image: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: { id: string; name: string; price: number }) => void
  onToggleAvailability: (productId: string) => void
  onViewDetails?: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleAvailability,
  onViewDetails
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
      <div
        className="w-32 h-32 sm:w-64 sm:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-md border-2 border-gray-400"
        onClick={onViewDetails}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          {product.name}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mb-2">
          {product.description}
        </p>
        <p className="text-lg sm:text-xl font-bold text-yellow-400 mb-3">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-sm sm:text-base font-medium ${
              product.available ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {product.available ? '✔️ Available' : '❌ Not Available'}
          </span>
          <div
            onClick={() => onToggleAvailability(product.id)}
            className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              product.available ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                product.available ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </div>
        </div>
        <div>
          {product.available ? (
            <button
              onClick={() =>
                onAddToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price
                })
              }
              className="bg-green-600 text-white py-2 px-6 rounded-full w-full sm:w-auto mt-3 hover:bg-green-700 transition-colors duration-300"
            >
              Add to Order
            </button>
          ) : (
            <button
              disabled
              className="bg-gray-400 text-white py-2 px-6 rounded-full w-full sm:w-auto mt-3 cursor-not-allowed"
            >
              Not Available
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
