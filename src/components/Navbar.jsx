
import React from 'react'

const Navbar = () => {

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo and School Name */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-900 text-white p-3 rounded-full">
              <span className="text-2xl">🏫</span>
            </div>

            <div>
              <h1 className="text-lg md:text-xl font-bold text-blue-950">
                Swadesh Saraswati
              </h1>

              <h2 className="text-sm font-semibold text-orange-600">
                Vidhya Mandir Inter College
              </h2>

              <p className="text-xs text-gray-500">
                Maharajganj, Raebareli
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-blue-900 font-semibold hover:text-orange-500">
              Home
            </a>

            <a href="/about" className="text-gray-700 font-medium hover:text-orange-500">
              About Us
            </a>

            <a href="/academics" className="text-gray-700 font-medium hover:text-orange-500">
              Academics
            </a>

            <a href="/facilities" className="text-gray-700 font-medium hover:text-orange-500">
              Facilities
            </a>

            <a href="/gallery" className="text-gray-700 font-medium hover:text-orange-500">
              Gallery
            </a>

            <a href="/contact" className="text-gray-700 font-medium hover:text-orange-500">
              Contact
            </a>
            <a href="/fees" className="text-gray-700 font-medium hover:text-orange-500">
              fees
            </a>

            <a
              href="/admission"
              className="bg-orange-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-orange-600"
            >
              Admission
            </a>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
