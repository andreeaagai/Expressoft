import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 bg-[#e0d2bf] font-sans">
      <div
        className="border-4 border-gray-500 p-8 sm:p-12 rounded-xl shadow-lg w-80 sm:w-[28rem] md:w-[32rem] lg:w-[34rem] xl:w-[36rem] max-w-full min-h-[90vh] flex flex-col items-center justify-center"
        style={{ backgroundColor: '#f5e4d3' }}
      >
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg mb-6 sm:mb-10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <img
            src="/assets/home.jpg"
            alt="Restaurant Dish"
            className="w-full h-full object-cover"
          />
        </div>

        <Link
          to="/menu"
          className="text-2xl sm:text-3xl md:text-4xl border-2 border-black font-semibold text-gray-800 mb-6 sm:mb-10 rounded-full px-6 py-2 sm:px-8 sm:py-3 shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-gray-200"
        >
          MENU
        </Link>

        <div className="text-center text-gray-800">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-2">
            YOUR RESTAURANT
          </h1>
          <p className="text-sm sm:text-base font-medium text-gray-600 mb-2">
            <a
              href="https://www.google.com/maps?q=1234+Unirii+Bucharest"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              1234 Unirii, Bucharest
            </a>
          </p>
          <hr className="w-3/4 mx-auto border-gray-400 my-3" />
          <p className="text-sm sm:text-base font-medium text-gray-600 mb-2">
            Delivery:{' '}
            <a href="tel:022-5209999" className="underline">
              022-5209999
            </a>
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-600 mb-2">
            Website:{' '}
            <a href="https://www.yourresto.com" className="underline">
              www.yourresto.com
            </a>
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-600">
            Open Mon-Fri 10 AM - 10 PM · Sat-Sun 8 AM - 10 PM
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
