import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaBullseye,
  FaRocket,
  FaBookOpen,
  FaHandshake,
  FaTrophy,
  FaStar,
  FaGraduationCap,
  FaArrowRight,
  FaSchool,
} from "react-icons/fa6";

const About = () => {
  return (
    <>
      <Navbar />

      {/* ABOUT HERO SECTION */}
      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-widest text-orange-400">
            About Our School
          </p>

          <h1 className="mt-4 text-3xl font-bold md:text-5xl">
            Swadesh Saraswati Vidya Mandir
          </h1>

          <h2 className="mt-3 text-xl font-semibold md:text-2xl">
            Inter College, Maharajganj, Raebareli
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-200">
            Welcome to Swadesh Saraswati Vidya Mandir Inter College. Our
            website provides information about our school, academic programs,
            facilities, and educational activities for students from Classes
            6 to 12.
          </p>
        </div>
      </section>

      {/* SCHOOL INTRODUCTION */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* IMAGE SECTION */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80"
              alt="School building"
              className="h-80 w-full object-cover"
            />
          </div>

          {/* TEXT SECTION */}
          <div>
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Welcome to Our School
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
              Building Knowledge, Values, and Confidence
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Swadesh Saraswati Vidya Mandir Inter College, Maharajganj,
              Raebareli, is the school featured on this website. Explore
              information about its academic programs for Classes 6 to 12 and
              learn about different aspects of school life.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Education helps students develop knowledge, discipline,
              confidence, and a sense of responsibility. Our website aims to
              make school information easily accessible to parents, students,
              and visitors.
            </p>

            <Link
              to="/academics"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Explore Academics
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Our Purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* VISION CARD */}
            <div className="rounded-2xl border-l-4 border-blue-900 bg-blue-50 p-8 shadow-md">
              <div className="mb-4">
                <FaBullseye className="text-4xl text-blue-900" />
              </div>

              <h3 className="text-2xl font-bold text-blue-950">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To encourage students to gain knowledge, develop positive
                values, build confidence, and work towards a bright and
                successful future.
              </p>
            </div>

            {/* MISSION CARD */}
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8 shadow-md">
              <div className="mb-4">
                <FaRocket className="text-4xl text-orange-500" />
              </div>

              <h3 className="text-2xl font-bold text-blue-950">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To promote effective learning, discipline, responsibility,
                good values, and the overall development of students through
                education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              School Life
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
              Learning Beyond Books
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore the important aspects of education, discipline, and
              student development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* EDUCATION CARD */}
            <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-xl">
              <FaBookOpen className="mx-auto text-4xl text-blue-900" />

              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Education
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Encouraging students to learn, gain knowledge, and improve
                their academic skills.
              </p>
            </div>

            {/* DISCIPLINE CARD */}
            <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-xl">
              <FaHandshake className="mx-auto text-4xl text-green-600" />

              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Discipline
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Developing responsibility, good habits, respect, and positive
                behaviour.
              </p>
            </div>

            {/* ACTIVITIES CARD */}
            <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-xl">
              <FaTrophy className="mx-auto text-4xl text-yellow-500" />

              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Activities
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Exploring sports, creative activities, and opportunities to
                develop new skills.
              </p>
            </div>

            {/* DEVELOPMENT CARD */}
            <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-xl">
              <FaStar className="mx-auto text-4xl text-orange-500" />

              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Development
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Encouraging confidence, communication, personal growth, and
                independent thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLASSES SECTION */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-bold uppercase tracking-widest text-orange-500">
            Academic Levels
          </p>

          <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
            Classes 6 to 12
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Explore the different academic levels and learning opportunities
            available to students.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* MIDDLE SCHOOL */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <FaSchool className="mx-auto mb-4 text-4xl text-blue-900" />

              <h3 className="text-2xl font-bold text-blue-950">
                Classes 6–8
              </h3>

              <p className="mt-3 text-gray-600">
                Middle School
              </p>
            </div>

            {/* SECONDARY SCHOOL */}
            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <FaBookOpen className="mx-auto mb-4 text-4xl text-orange-500" />

              <h3 className="text-2xl font-bold text-blue-950">
                Classes 9–10
              </h3>

              <p className="mt-3 text-gray-600">
                Secondary School
              </p>
            </div>

            {/* SENIOR SECONDARY */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <FaGraduationCap className="mx-auto mb-4 text-4xl text-green-600" />

              <h3 className="text-2xl font-bold text-blue-950">
                Classes 11–12
              </h3>

              <p className="mt-3 text-gray-600">
                Senior Secondary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-blue-950 px-6 py-14 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Discover Our Academic Programs
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Explore academic information and learning opportunities for
            students from Classes 6 to 12.
          </p>

          <Link
            to="/academics"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-7 py-3 font-bold transition hover:bg-orange-600"
          >
            View Academics
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;