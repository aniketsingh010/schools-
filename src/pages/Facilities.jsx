import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaBookOpen,
  FaLaptop,
  FaFlask,
  FaFutbol,
  FaSchool,
  FaPalette,
  FaBroom,
  FaChair,
  FaBullseye,
  FaStar,
  FaHandshake,
  FaSeedling,
  FaGraduationCap,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Facilities = () => {
  // School Facilities
  const facilities = [
    {
      icon: <FaBookOpen />,
      title: "Library",
      description:
        "A library helps students develop reading habits, improve vocabulary, and explore knowledge beyond their textbooks.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <FaLaptop />,
      title: "Computer Education",
      description:
        "Computer education introduces students to digital tools and helps them develop essential technology skills.",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: <FaFlask />,
      title: "Science Laboratory",
      description:
        "Practical activities help students connect scientific concepts with real-world observations.",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: <FaFutbol />,
      title: "Sports & Games",
      description:
        "Sports and games encourage teamwork, discipline, confidence, and an active lifestyle.",
      color: "bg-orange-100 text-orange-700",
    },
    {
      icon: <FaSchool />,
      title: "Classrooms",
      description:
        "A positive classroom environment supports learning, participation, and interaction between teachers and students.",
      color: "bg-pink-100 text-pink-700",
    },
    {
      icon: <FaPalette />,
      title: "Cultural Activities",
      description:
        "Cultural activities encourage creativity, communication skills, and appreciation of traditions.",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: <FaBroom />,
      title: "Clean Environment",
      description:
        "Clean and well-maintained surroundings support a comfortable and welcoming learning environment.",
      color: "bg-teal-100 text-teal-700",
    },
    {
      icon: <FaChair />,
      title: "Student-Friendly Spaces",
      description:
        "Suitable seating and organized learning spaces can help students concentrate during lessons.",
      color: "bg-indigo-100 text-indigo-700",
    },
  ];

  // Benefits of School Facilities
  const benefits = [
    {
      icon: <FaBullseye />,
      title: "Better Learning",
      description:
        "Learning resources help students understand concepts and practise new skills.",
    },
    {
      icon: <FaStar />,
      title: "Skill Development",
      description:
        "Academic and extracurricular activities help students discover and develop their interests.",
    },
    {
      icon: <FaHandshake />,
      title: "Teamwork",
      description:
        "Group activities encourage cooperation, communication, and mutual respect.",
    },
    {
      icon: <FaSeedling />,
      title: "Overall Growth",
      description:
        "A supportive school environment contributes to students' academic and personal development.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* HERO SECTION */}

        <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 text-white">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">
              <FaSchool />
              School Facilities
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              A Better Environment
              <span className="block text-yellow-400">
                for Better Learning
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
              Explore the learning resources and facilities intended for
              students from Classes 6 to 12 at Swadesh Saraswati Vidya Mandir
              Inter College, Maharajganj, Raebareli.
            </p>

            <a
              href="#facilities-list"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-7 py-3.5 font-bold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Explore Facilities
              <FaArrowRight />
            </a>
          </div>
        </section>

        {/* INTRODUCTION SECTION */}

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Learning Environment
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Facilities for Student Development
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              A supportive school environment gives students opportunities to
              learn, ask questions, develop skills, and participate in
              activities. Explore the facilities listed below.
            </p>
          </div>
        </section>

        {/* FACILITIES CARDS */}

        <section
          id="facilities-list"
          className="mx-auto max-w-7xl scroll-mt-20 px-6 pb-20"
        >
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition duration-300 group-hover:scale-110 ${facility.color}`}
                >
                  {facility.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {facility.description}
                </p>

                <div className="mt-5 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </section>

        {/* HIGHLIGHT SECTION */}

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-indigo-700 p-8 text-white shadow-xl md:p-12">
              <FaGraduationCap className="text-6xl text-yellow-400" />

              <h2 className="mt-6 text-3xl font-extrabold leading-tight">
                Learning Beyond
                <span className="block text-yellow-400">
                  the Classroom
                </span>
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                Education includes practical activities, teamwork, creativity,
                and opportunities to learn new skills. These experiences can
                help students become more confident and independent.
              </p>

              <Link
                to="/academics"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
              >
                Explore Academics
                <FaArrowRight />
              </Link>
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
                Why Facilities Matter
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Supporting Every Student
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Learning resources and school activities can help students
                develop important academic, social, and personal skills.
              </p>

              <div className="mt-8 space-y-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-700">
                      {benefit.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CLASSES SECTION */}

        <section className="bg-gray-100 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                Facilities for Classes 6–12
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Students' learning needs change as they progress through
                different academic levels. Learning resources can support
                them at every stage.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* MIDDLE SCHOOL */}

              <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <FaBookOpen className="text-4xl text-blue-700" />

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Classes 6–8
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Encourage curiosity, reading habits, basic computer knowledge,
                  and a strong foundation in core subjects.
                </p>
              </div>

              {/* SECONDARY SCHOOL */}

              <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <FaBookOpen className="text-4xl text-orange-500" />

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Classes 9–10
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Support subject understanding, practical learning, revision,
                  and examination preparation.
                </p>
              </div>

              {/* SENIOR SECONDARY */}

              <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <FaGraduationCap className="text-4xl text-green-600" />

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Classes 11–12
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Support advanced subject learning and future educational
                  planning according to the courses offered by the school.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}

        <section className="bg-gradient-to-r from-yellow-400 to-amber-300 py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
                Want to Know More About Our Facilities?
              </h2>

              <p className="mt-3 text-blue-950/80">
                Contact the school to confirm which facilities are currently
                available.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-950 px-7 py-4 font-bold text-white transition hover:bg-blue-900"
            >
              Contact Us
              <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* NOTE */}

        <section className="bg-white px-6 py-6">
          <p className="mx-auto max-w-5xl text-center text-sm leading-6 text-gray-500">
            Note: The facilities described on this page are examples of
            educational resources. Please confirm their actual availability
            with the school before publishing this website.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Facilities;