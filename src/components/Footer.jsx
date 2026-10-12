import React from "react";

const Footer = () => {
return (
    <>
      <footer className="bg-slate-950 text-white pt-12 pb-6"> <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <div>
        <h2 className="text-xl font-bold text-yellow-400">
          🏫 Swadesh Saraswati
        </h2>

        <h3 className="font-semibold mt-2">
          Vidhya Mandir Inter College
        </h3>

        <p className="text-gray-400 text-sm leading-7 mt-4">
          Maharajganj, Raebareli, Uttar Pradesh, India.
          Learn, grow and build a brighter future with us.
        </p>

        <div className="flex gap-3 mt-5">
          <a href="#" className="bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-400 hover:text-black">
            f
          </a>

          <a href="#" className="bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-400 hover:text-black">
            ◎
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-5">Quick Links</h3>

        <ul className="space-y-3 text-gray-400 text-sm">
          <li><a href="/" className="hover:text-yellow-400">Home</a></li>
          <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
          <li><a href="/academics" className="hover:text-yellow-400">Academics</a></li>
          <li><a href="/facilities" className="hover:text-yellow-400">Facilities</a></li>
          <li><a href="/gallery" className="hover:text-yellow-400">Gallery</a></li>
          <li><a href="/contact" className="hover:text-yellow-400">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-5">Academics</h3>

        <ul className="space-y-3 text-gray-400 text-sm">
          <li><a href="/academics" className="hover:text-yellow-400">Classes 6–8</a></li>
          <li><a href="/academics" className="hover:text-yellow-400">Classes 9–10</a></li>
          <li><a href="/academics" className="hover:text-yellow-400">Classes 11–12</a></li>
          <li><a href="/admission" className="hover:text-yellow-400">Admission Information</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-5">Contact Us</h3>

        <ul className="space-y-4 text-gray-400 text-sm">
          <li>📍 Maharajganj, Raebareli, Uttar Pradesh</li>
          <li>📞 School phone number to be added</li>
          <li>✉️ School email to be added</li>
        </ul>

        <a
          href="/contact"
          className="inline-block mt-6 bg-yellow-400 text-slate-950 px-5 py-3 rounded-lg font-semibold hover:bg-yellow-300"
        >
          Contact Us →
        </a>
      </div>

    </div>

    <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Swadesh Saraswati Vidhya Mandir Inter College.
        All rights reserved.
      </p>

      <p className="text-gray-500 text-sm">
        Maharajganj, Raebareli
      </p>
    </div>

  </div>
</footer>
    </>
   
);
};

export default Footer;
