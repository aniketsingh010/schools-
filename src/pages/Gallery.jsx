import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import {
  FaCamera,
  FaArrowDown,
  FaArrowRight,
  FaGraduationCap,
  FaTimes,
  FaImage,
} from "react-icons/fa";

import imge10 from "../assets/1.jpg";
import imge2 from "../assets/2.jpg";
import imge11 from "../assets/3.jpg";
import imge13 from "../assets/5.jpg";
import imge14 from "../assets/6.jpg";
import image15 from "../assets/7.jpg";
import image16 from "../assets/8.jpg";
import image17 from "../assets/9.jpg";

const galleryItems = [
  {
    id: 1,
    title: "School Campus",
    category: "Campus",
    image: imge10,
    description: "Explore our school campus and learning environment.",
  },
  {
    id: 2,
    title: "School Building",
    category: "Campus",
    image: imge11,
    description: "A glimpse of our school environment.",
  },
  {
    id: 3,
    title: "School Campus",
    category: "Campus",
    image: imge13,
    description: "Discover the surroundings of our school.",
  },
  {
    id: 4,
    title: "School Environment",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    description: "A welcoming environment for students.",
  },
  {
    id: 5,
    title: "School Building",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    description: "A look at a school campus.",
  },
  {
    id: 6,
    title: "Learning Environment",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    description: "An environment designed to support learning.",
  },
  {
    id: 7,
    title: "School Grounds",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    description: "Explore the school surroundings.",
  },
  {
    id: 8,
    title: "Campus View",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    description: "A view of the school campus.",
  },
  {
    id: 9,
    title: "School Facilities",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    description: "Explore the facilities available at school.",
  },
  {
    id: 10,
    title: "School Memories",
    category: "Campus",
    image: imge10,
    description: "Memorable moments from school life.",
  },
  {
    id: 11,
    title: "Classroom Learning",
    category: "Classroom",
    image: imge2,
    description: "Students learning in a classroom environment.",
  },
  {
    id: 12,
    title: "Library and Reading",
    category: "Activities",
    image: image16,
    description: "Reading books and exploring new ideas.",
  },
  {
    id: 13,
    title: "Sports Activities",
    category: "Sports",
    image: image17,
    description: "Sports, teamwork, and student participation.",
  },
  {
    id: 14,
    title: "Science Learning",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    description: "Discovering science through practical learning.",
  },
  {
    id: 15,
    title: "School Celebrations",
    category: "Events",
    image: imge14,
    description: "Memorable moments and school celebrations.",
  },
  {
    id: 16,
    title: "Creative Activities",
    category: "Activities",
    image: image15,
    description: "Encouraging creativity and imagination.",
  },
  {
    id: 17,
    title: "Outdoor Activities",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80",
    description: "Participation in outdoor activities.",
  },
  {
    id: 18,
    title: "Learning Together",
    category: "Classroom",
    image: imge2,
    description: "Sharing knowledge and learning together.",
  },
];

const categories = [
  "All",
  "Campus",
  "Classroom",
  "Activities",
  "Sports",
  "Events",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 text-white">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

          <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">
              <FaCamera />
              School Memories
            </span>

            <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
              Our School
              <span className="block text-yellow-400">
                Gallery
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
              Explore the memorable moments of Swadesh Saraswati
              Vidya Mandir Inter College, Maharajganj, Raebareli.
              Discover school life, learning, creativity, sports,
              and special events.
            </p>

            <a
              href="#gallery-photos"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-7 py-3.5 font-bold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Explore Gallery
              <FaArrowDown />
            </a>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-6 pb-8 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Memories and Moments
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Life at Our School
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Every school day brings opportunities to learn,
              participate, and create lasting memories. Browse
              the categories below to explore different aspects
              of school life.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          id="gallery-photos"
          className="mx-auto max-w-7xl px-6 py-12"
        >
          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-blue-950 text-white shadow-lg"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-blue-800 hover:text-blue-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-blue-950/0 transition duration-300 group-hover:bg-blue-950/50">
                    <span className="inline-flex scale-75 items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-blue-950 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <FaImage />
                      View Photo
                    </span>
                  </div>

                  <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-blue-950">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-blue-800">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <p className="py-10 text-center text-gray-500">
              No photos are available in this category.
            </p>
          )}
        </section>

        {/* Photo Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-gray-900 shadow-lg transition hover:bg-yellow-400"
              >
                <FaTimes />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-full bg-black object-contain"
              />

              <div className="p-6">
                <span className="text-sm font-bold text-blue-700">
                  {selectedImage.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {selectedImage.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <section className="mt-12 bg-gradient-to-r from-yellow-400 to-amber-300 py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="flex flex-wrap items-center justify-center gap-2 text-2xl font-extrabold text-blue-950 md:justify-start md:text-3xl">
                <FaGraduationCap />
                Become Part of Our School Journey
              </h2>

              <p className="mt-3 text-blue-950/80">
                Learn more about our school, academic programs,
                and educational environment.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-950 px-7 py-4 font-bold text-white transition hover:bg-blue-900"
            >
              About Our School
              <FaArrowRight />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;