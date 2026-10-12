import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
return ( 
<>
<div className="navbar bg-base-100 shadow-md px-4 md:px-8">

  {/* Logo and School Name */}
  <div className="flex-1">
    <a href="/" className="flex items-center gap-3 no-underline">

      <div className="bg-blue-900 text-white p-3 rounded-full">
        <span className="text-2xl">🏫</span>
      </div>

      <div>
        <h1 className="text-lg md:text-xl font-bold text-blue-950">
        स्वदेश सरस्वती
        </h1>

        <h2 className="text-sm font-semibold text-orange-600">
         विद्या मंदिर इंटर कॉलेज
        </h2>

        <p className="text-xs text-gray-500">
          महाराजगंज, रायबरेली
        </p>
      </div>

    </a>
  </div>

  {/* Desktop Navigation */}
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal items-center gap-1 px-1">

      <li>
        <Link to="/" className="font-semibold text-blue-900 hover:text-orange-500">
          Home
        </Link>
      </li>

      <li>
        <Link to="/about" className="font-medium hover:text-orange-500">
          About Us
        </Link>
      </li>

      <li>
        <Link to="/academics" className="font-medium hover:text-orange-500">
          Academics
        </Link>
      </li>

      <li>
        <Link to="/facilities" className="font-medium hover:text-orange-500">
          Facilities
        </Link>
      </li>

      <li>
        <Link to="/gallery" className="font-medium hover:text-orange-500">
          Gallery
        </Link>
      </li>

      <li>
        <Link to="/contact" className="font-medium hover:text-orange-500">
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/admission"
          className="bg-orange-500 text-white font-semibold hover:bg-orange-600 rounded-lg"
        >
          Admission
        </Link>
      </li>

    </ul>
  </div>

  {/* Mobile Menu */}
  <div className="dropdown dropdown-end lg:hidden">

    <button
      tabIndex={0}
      className="btn btn-square btn-ghost"
      aria-label="Open navigation menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-6 w-6 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <ul
      tabIndex={0}
      className="menu dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-3 shadow-lg"
    >
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/academics">Academics</a></li>
      <li><a href="/facilities">Facilities</a></li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/fees">Fees</a></li>
      <li>
        <a
          href="/admission"
          className="bg-orange-500 text-white font-semibold hover:bg-orange-600"
        >
          Admission
        </a>
      </li>
    </ul>

  </div>

</div>
</>



)
}

export default Navbar
