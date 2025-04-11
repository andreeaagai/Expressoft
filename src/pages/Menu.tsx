import { useState } from 'react'
import { menuData as initialData, Product } from 'data/menuData'
import ProductCard from '../components/ProductCard'
import { useCart } from '../components/CartContext'
import Modal from 'components/Modal'
import ProductDetailsModal from 'components/ProductDetailsModal'
import { useNavigate } from 'react-router-dom'
import SearchBar from 'components/SearchBar'

const Menu = () => {
  const navigate = useNavigate()
  const { cart, addToCart, removeFromCart, getTotal, clearCart } = useCart()
  const [menu, setMenu] = useState(initialData)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)

  const handleToggleAvailability = (productId: string) => {
    setMenu((prevMenu) =>
      prevMenu.map((category) => ({
        ...category,
        products: category.products.map((product) =>
          product.id === productId
            ? { ...product, available: !product.available }
            : product
        )
      }))
    )
  }

  const filteredMenu =
    selectedCategory === 'All'
      ? menu
      : menu.filter((category) => category.category === selectedCategory)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  const openProductModal = (product: Product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  const closeProductModal = () => {
    setSelectedProduct(null)
    setIsProductModalOpen(false)
  }

  function handleSearchChange(query: string): void {
    const lowerCaseQuery = query.toLowerCase()
    setMenu(
      initialData.map((category) => ({
        ...category,
        products: category.products.filter((product) =>
          product.name.toLowerCase().includes(lowerCaseQuery)
        )
      }))
    )
  }

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-start p-6"
      style={{ backgroundColor: '#f5e4d3', fontFamily: 'Cursive, sans-serif' }}
    >
      <div className="absolute top-10 text-center">
        <h1
          className="text-6xl font-extrabold text-gray-800 leading-none"
          style={{ fontFamily: 'Cursive, sans-serif' }}
        >
          MENU
        </h1>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center justify-between w-full p-6 border-l-4 border-t-4 border-gray-800"
        style={{ marginTop: '6rem' }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto p-3 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-700 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          >
            <option value="All">All</option>
            {menu.map((category) => (
              <option key={category.id} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
          <button
            onClick={toggleModal}
            className="w-full sm:w-auto bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-3 px-8 rounded-full shadow-lg hover:from-gray-700 hover:via-gray-600 hover:to-gray-500 transition duration-300 text-lg font-semibold"
          >
            View Order
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-3 px-6 rounded-full shadow-lg hover:from-gray-700 hover:via-gray-600 hover:to-gray-500 transition duration-300 text-lg font-semibold"
          >
            Back to Home
          </button>
        </div>
        <div className="flex items-center w-full sm:w-auto mt-4 sm:mt-0">
          <SearchBar onSearch={handleSearchChange} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-8">
        {filteredMenu.map((category) => (
          <div key={category.id} className="w-full mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              {category.category}
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={{ ...product, image: product.image || '' }}
                  onToggleAvailability={handleToggleAvailability}
                  onAddToCart={addToCart}
                  onViewDetails={() => openProductModal(product)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        cart={cart}
        onRemoveFromCart={removeFromCart}
        getTotalPrice={getTotal}
        onClearCart={clearCart}
      />
      <ProductDetailsModal
        isOpen={isProductModalOpen}
        onClose={closeProductModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default Menu
