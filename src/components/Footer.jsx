
import React from "react";
import img111 from "../assets/zxkfhd.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaHouse,
  FaBookOpen,
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* School Information */}
          <div>
            <img
              src={img111}
              className="h-14 w-20 object-contain"
              alt="School Logo"
            />

            <h2 className="text-xl font-bold text-yellow-400 mt-3">
              Swadesh Saraswati
            </h2>

            <h3 className="font-semibold mt-2">
              Vidhya Mandir Inter College
            </h3>

            <p className="text-gray-400 text-sm leading-7 mt-4">
              Maharajganj, Raebareli, Uttar Pradesh, India.
              Learn, grow and build a brighter future with us.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-5">

              <a
                href="https://www.facebook.com/p/Swadesh-Saraswati-Vidya-Mandir-Inter-College-Maharajganj-Raebareli-100057372042424/?locale=hi_IN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <FaFacebook className="text-2xl text-blue-600" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <FaInstagram className="text-2xl text-pink-500" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-yellow-400">
                  <FaHouse /> Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="flex items-center gap-2 hover:text-yellow-400">
                  <FaSchool /> About Us
                </Link>
              </li>

              <li>
                <Link to="/academics" className="flex items-center gap-2 hover:text-yellow-400">
                  <FaBookOpen /> Academics
                </Link>
              </li>

              <li>
                <Link to="/facilities" className="flex items-center gap-2 hover:text-yellow-400">
                  <FaGraduationCap /> Facilities
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="flex items-center gap-2 hover:text-yellow-400">
                  <FaInstagram /> Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="flex items-center gap-2 hover:text-yellow-400">
                  <FaEnvelope /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Academics
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/academics" className="hover:text-yellow-400">
                  Classes 6–8
                </a>
              </li>

              <li>
                <a href="/academics" className="hover:text-yellow-400">
                  Classes 9–10
                </a>
              </li>

              <li>
                <a href="/academics" className="hover:text-yellow-400">
                  Classes 11–12
                </a>
              </li>

              <li>
                <a href="/admission" className="hover:text-yellow-400">
                  Admission Information
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li className="flex items-start gap-3">
                <FaLocationDot className="text-yellow-400 text-lg mt-1 shrink-0" />
                <span>
                  Maharajganj, Raebareli, Uttar Pradesh 229306
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="text-yellow-400 text-lg shrink-0" />
                <a href="tel:09415778951" className="hover:text-yellow-400">
                  09415778951
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaEnvelope className="text-yellow-400 text-lg mt-1 shrink-0" />
                <a
                  href="mailto:ssvm.mrg.rbl@gmail.com"
                  className="hover:text-yellow-400 break-all"
                >
                  ssvm.mrg.rbl@gmail.com
                </a>
              </li>

            </ul>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-yellow-400 text-slate-950 px-5 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Contact Us
              <FaArrowRight />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Swadesh Saraswati Vidhya Mandir
            Inter College. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-2">
            <FaLocationDot className="text-yellow-400" />
            Maharajganj, Raebareli
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
