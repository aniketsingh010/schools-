import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const galleryItems = [
{
id: 1,
title: "School Campus",
category: "Campus",
image:
"https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
description: "A look at the school environment.",
},
{
id: 2,
title: "Classroom Learning",
category: "Classroom",
image:
"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
description: "Students learning in a classroom environment.",
},
{
id: 3,
title: "Library & Reading",
category: "Activities",
image:
"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=80",
description: "Reading and exploring new ideas.",
},
{
id: 4,
title: "Sports Activities",
category: "Sports",
image:
"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
description: "Sports, teamwork and participation.",
},
{
id: 5,
title: "Science Learning",
category: "Activities",
image:
"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
description: "Discovering science through learning.",
},
{
id: 6,
title: "School Celebration",
category: "Events",
image:
"https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
description: "Memorable moments and celebrations.",
},
{
id: 7,
title: "Creative Activities",
category: "Activities",
image:
"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80",
description: "Creativity, imagination and expression.",
},
{
id: 8,
title: "Outdoor Activities",
category: "Sports",
image:
"https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80",
description: "Participation in outdoor activities.",
},
{
id: 9,
title: "Learning Together",
category: "Classroom",
image:
"https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80",
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
  <Navbar/>
   <div className="min-h-screen bg-gray-50">


  {/* Hero Section */}
  <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 text-white">
    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>
    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

    <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
      <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">
        📸 School Memories
      </span>

      <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
        Our School
        <span className="block text-yellow-400">Gallery</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
        Explore moments of learning, creativity, sports and school life
        at Swadesh Saraswati Vidhya Mandir Inter College, Maharajganj,
        Raebareli.
      </p>

      <a
        href="#gallery-photos"
        className="mt-8 inline-block rounded-lg bg-yellow-400 px-7 py-3.5 font-bold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
      >
        Explore Gallery ↓
      </a>
    </div>
  </section>

  {/* Introduction */}
  <section className="mx-auto max-w-7xl px-6 pb-8 pt-16">
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
        Memories & Moments
      </span>

      <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
        Life at Our School
      </h2>

      <p className="mt-5 leading-8 text-gray-600">
        Every school day brings opportunities to learn, participate and
        create memories. Browse the categories to explore different
        aspects of school life.
      </p>
    </div>
  </section>

  {/* Gallery */}
  <section id="gallery-photos" className="mx-auto max-w-7xl px-6 py-12">

    {/* Category Filters */}
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
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
              <span className="scale-75 rounded-full bg-white px-5 py-3 font-bold text-blue-950 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                View Photo ↗
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

    {filteredItems.length === 0 && (
      <p className="py-10 text-center text-gray-500">
        No photos available in this category.
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
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-gray-900 shadow-lg hover:bg-yellow-400"
        >
          ×
        </button>

        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          className="max-h-[70vh] w-full object-contain bg-black"
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
        <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
          Be Part of Our School Journey
        </h2>

        <p className="mt-3 text-blue-950/80">
          Learn more about our school and academic programs.
        </p>
      </div>

      <a
        href="/about"
        className="shrink-0 rounded-lg bg-blue-950 px-7 py-4 font-bold text-white transition hover:bg-blue-900"
      >
        About Our School →
      </a>
    </div>
  </section>

</div>
<Footer/>
  </>
  
);
};

export default Gallery;
