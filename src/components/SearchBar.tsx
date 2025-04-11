import React from 'react'

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch
}) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value.toLowerCase())
  }

  return (
    <div className="flex items-center justify-center w-full mb-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-3 pl-10 border-2 border-gray-300 rounded-full bg-gray-100 text-gray-700 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          onChange={handleSearchChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
      </div>
    </div>
  )
}

export default SearchBar
