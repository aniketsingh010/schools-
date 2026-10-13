import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import img5 from "../assets/zxkfhd.jpg";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaBookOpen,
  FaSchool,
  FaImages,
  FaPhoneAlt,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
    { name: "Academics", path: "/academics", icon: <FaBookOpen /> },
    { name: "Facilities", path: "/facilities", icon: <FaSchool /> },
    { name: "Gallery", path: "/gallery", icon: <FaImages /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
    { name: "Admission", path: "/admission", icon: <FaGraduationCap /> },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar sticky top-0 z-40 bg-white shadow-md px-3 md:px-8">
        {/* Logo and School Name */}
        <div className="flex-1">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 md:gap-3 no-underline"
          >
            <img
              src={img5}
              alt="School Logo"
              className="h-12 w-16 md:h-14 md:w-20 rounded-xl object-cover"
            />

            <div>
              <h1 className="text-base md:text-xl font-bold text-blue-950">
                स्वदेश सरस्वती
              </h1>

              <h2 className="text-xs md:text-sm font-semibold text-orange-600">
                विद्या मंदिर इंटर कॉलेज
              </h2>

              <p className="text-[10px] md:text-xs text-gray-500">
                महाराजगंज, रायबरेली
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-semibold transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-orange-600 bg-orange-50"
                      : "text-blue-950 hover:text-orange-500"
                  } ${
                    link.path === "/admission"
                      ? "bg-orange-500 text-white hover:bg-orange-600 hover:text-white rounded-lg"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="btn btn-ghost btn-square text-blue-950 lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <FaBars className="text-2xl" />
        </button>
      </nav>

      {/* Background Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Left Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-[60] flex h-screen w-[280px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-blue-950 p-4">
          <div className="flex items-center gap-3">
            <img
              src={img5}
              alt="School Logo"
              className="h-12 w-12 rounded-full border-2 border-white object-cover"
            />

            <div>
              <h2 className="text-sm font-bold text-white">
                स्वदेश सरस्वती
              </h2>

              <p className="text-xs text-orange-300">
                विद्या मंदिर इंटर कॉलेज
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            className="rounded-full p-2 text-white transition hover:bg-white/20"
            aria-label="Close navigation menu"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Sidebar Welcome */}
        <div className="bg-orange-50 px-5 py-4">
          <h3 className="text-lg font-bold text-blue-950">
            Welcome!
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            Explore our school website.
          </p>
        </div>

        {/* All Navigation Links */}
        <div className="flex-1 overflow-y-auto p-4">
          <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-gray-400">
            Main Menu
          </p>

          <ul className="space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
                      link.path === "/admission"
                        ? "bg-orange-500 font-semibold text-white hover:bg-orange-600"
                        : isActive
                        ? "bg-blue-950 font-semibold text-white"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{link.icon}</span>
                      <span>{link.name}</span>
                    </span>

                    <FaArrowRight className="text-xs opacity-70" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-200 bg-gray-50 p-4">
          <p className="text-center text-xs text-gray-500">
            Swadesh Saraswati Vidya Mandir Inter College
          </p>

          <p className="mt-1 text-center text-xs text-orange-600">
            Maharajganj, Raebareli
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;