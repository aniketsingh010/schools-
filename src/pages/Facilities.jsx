
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
  FaBullseye,
  FaStar,
  FaHandshake,
  FaSeedling,
  FaGraduationCap,
  FaArrowRight,
  FaTint,
  FaChair,
  FaMusic,
  FaFirstAid,
  FaShieldAlt,
  FaCalculator,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Facilities = () => {
  // SCHOOL FACILITIES
  const facilities = [
    {
      icon: <FaBookOpen />,
      title: "Library",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
      description: "A library helps students develop reading habits and explore new knowledge.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <FaLaptop />,
      title: "Computer Lab",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      description: "Computer education helps students develop digital skills.",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: <FaFlask />,
      title: "Science Laboratory",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
      description: "Practical experiments help students understand science.",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: <FaFutbol />,
      title: "Sports & Games",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
      description: "Sports encourage teamwork, discipline, and physical activity.",
      color: "bg-orange-100 text-orange-700",
    },
    {
      icon: <FaSchool />,
      title: "Smart Classrooms",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      description: "A supportive classroom helps students learn and participate.",
      color: "bg-pink-100 text-pink-700",
    },
    {
      icon: <FaPalette />,
      title: "Cultural Activities",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800",
      description: "Cultural activities encourage creativity and appreciation of traditions.",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: <FaTint />,
      title: "Drinking Water",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800",
      description: "Safe drinking water supports students' health and well-being.",
      color: "bg-teal-100 text-teal-700",
    },
    {
      icon: <FaChair />,
      title: "Furniture & Seating",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
      description: "Suitable desks and chairs provide comfortable classroom seating.",
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      icon: <FaFutbol />,
      title: "School Playground",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800",
      description: "Playgrounds provide space for games, exercise, and teamwork.",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: <FaPalette />,
      title: "Art & Craft Room",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      description: "Art and craft activities help students express creativity.",
      color: "bg-rose-100 text-rose-700",
    },
    {
      icon: <FaCalculator />,
      title: "Mathematics Lab",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
      description: "Mathematical activities help students develop problem-solving skills.",
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      icon: <FaMusic />,
      title: "Music & Dance",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800",
      description: "Music and dance support artistic expression and confidence.",
      color: "bg-fuchsia-100 text-fuchsia-700",
    },
    {
      icon: <FaFirstAid />,
      title: "First Aid & Health",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      description: "First-aid arrangements help address minor injuries and health needs.",
      color: "bg-red-100 text-red-700",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe School Campus",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
      description: "A well-maintained campus supports a welcoming learning environment.",
      color: "bg-sky-100 text-sky-700",
    },
  ];

  // BENEFITS
  const benefits = [
    {
      icon: <FaBullseye />,
      title: "Better Learning",
      description: "Learning resources help students understand concepts and practise skills.",
    },
    {
      icon: <FaStar />,
      title: "Skill Development",
      description: "Activities help students discover and develop their interests.",
    },
    {
      icon: <FaHandshake />,
      title: "Teamwork",
      description: "Group activities encourage cooperation and mutual respect.",
    },
    {
      icon: <FaSeedling />,
      title: "Overall Growth",
      description: "A supportive school environment contributes to students' development.",
    },
  ];

  // ALL TEACHERS INCLUDING COMPUTER TEACHER
  const teachers = [
    {
      id: 1,
      name: "Heeram Sir",
      subject: "Mathematics, Physics & Chemistry",
      classes: "Classes 9–12",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      image: "https://placehold.co/600x600/e2e8f0/1e3a8a?text=Heeram+Sir",
    },
    {
      id: 2,
      name: "Amit Sir",
      subject: "Hindi, Sanskrit & Arts",
      classes: "Classes 6–12",
      subjects: ["Hindi", "Sanskrit", "Arts"],
      image: "https://placehold.co/600x600/e2e8f0/1e3a8a?text=Amit+Sir",
    },
    {
      id: 3,
      name: "Vichitra Sir",
      subject: "Biology Teacher",
      classes: "Classes 9–12",
      subjects: ["Biology", "Botany", "Zoology"],
      image: "https://placehold.co/600x600/e2e8f0/1e3a8a?text=Vichitra+Sir",
    },
    {
      id: 4,
      name: "Kalyan Sir",
      subject: "English Teacher",
      classes: "Classes 6–12",
      subjects: ["English Grammar", "English Literature", "Reading & Writing"],
      image: "https://placehold.co/600x600/e2e8f0/1e3a8a?text=Kalyan+Sir",
    },
    {
      id: 5,
      name: "Mam 1",
      subject: "Teacher",
      classes: "Classes 6–8",
      subjects: ["Subject to be updated"],
      image: "https://placehold.co/600x600/fce7f3/9d174d?text=Mam+1",
    },
    {
      id: 6,
      name: "Mam 2",
      subject: "Teacher",
      classes: "Classes 6–8",
      subjects: ["Subject to be updated"],
      image: "https://placehold.co/600x600/fce7f3/9d174d?text=Mam+2",
    },
    {
      id: 7,
      name: "Mam 3",
      subject: "Teacher",
      classes: "Classes 6–10",
      subjects: ["Subject to be updated"],
      image: "https://placehold.co/600x600/fce7f3/9d174d?text=Mam+3",
    },
    {
      id: 8,
      name: "Mam 4",
      subject: "Teacher",
      classes: "Classes 6–10",
      subjects: ["Subject to be updated"],
      image: "https://placehold.co/600x600/fce7e3/9d174d?text=Mam+4",
    },
    {
      id: 9,
      name: "Teacher 9",
      subject: "Social Science Teacher",
      classes: "Classes 6–10",
      subjects: ["History", "Geography", "Civics"],
      image: "https://placehold.co/600x600/e2e8f0/1e3a8a?text=Teacher+9",
    },
    {
      id: 10,
      name: "Computer Teacher",
      subject: "Computer Science Teacher",
      classes: "Classes 6–12",
      subjects: [
        "Computer Basics",
        "MS Office",
        "HTML & CSS",
        "Internet & Cyber Safety",
      ],
      image: "https://placehold.co/600x600/e2e8f0/1e3a8a?text=Computer+Teacher",
    },
  ];

  // CLASS-WISE SUBJECTS
  const classSubjects = [
    {
      title: "Classes 6–8",
      description: "Build a strong foundation in core subjects.",
      subjects: ["Hindi", "English", "Mathematics", "Science", "Social Science", "Sanskrit"],
      icon: <FaBookOpen />,
      color: "text-blue-700",
    },
    {
      title: "Classes 9–10",
      description: "Focus on concepts, practice, and exam preparation.",
      subjects: ["Hindi", "English", "Mathematics", "Science", "Social Science", "Sanskrit"],
      icon: <FaLaptop />,
      color: "text-orange-600",
    },
    {
      title: "Classes 11–12",
      description: "Study subjects according to the available stream.",
      subjects: [
        "Hindi / English",
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Other stream subjects",
      ],
      icon: <FaGraduationCap />,
      color: "text-green-700",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 text-white">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">
              <FaSchool /> School Facilities
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              A Better Environment
              <span className="block text-yellow-400">for Better Learning</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
              Explore the learning resources and facilities at Swadesh Saraswati
              Vidya Mandir Inter College, Maharajganj, Raebareli.
            </p>

            <a
              href="#facilities-list"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-7 py-3.5 font-bold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Explore Facilities <FaArrowRight />
            </a>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-7xl px-6 py-16 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Learning Environment
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Facilities for Student Development
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            A supportive school environment gives students opportunities to learn,
            ask questions, develop skills, and participate in activities.
          </p>
        </section>

        {/* FACILITIES */}
        <section id="facilities-list" className="mx-auto max-w-7xl scroll-mt-20 px-6 pb-20">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
              14 School Facilities
            </span>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden bg-gray-200">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl shadow-md ${facility.color}`}>
                    {facility.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{facility.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {facility.description}
                  </p>
                  <div className="mt-5 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-20" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-indigo-700 p-8 text-white shadow-xl md:p-12">
              <FaGraduationCap className="text-6xl text-yellow-400" />
              <h2 className="mt-6 text-3xl font-extrabold">
                Learning Beyond <span className="block text-yellow-400">the Classroom</span>
              </h2>
              <p className="mt-5 leading-8 text-blue-100">
                Education includes practical activities, teamwork, creativity,
                and opportunities to learn new skills.
              </p>
              <Link
                to="/academics"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-blue-950 hover:bg-yellow-300"
              >
                Explore Academics <FaArrowRight />
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
                Learning resources and school activities help students develop
                academic, social, and personal skills.
              </p>

              <div className="mt-8 space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-700">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
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

        {/* CLASS-WISE SUBJECTS */}
        <section className="bg-gray-100 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
                Academic Information
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Subjects Taught in Different Classes
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Subjects may vary according to the school's curriculum.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
              {classSubjects.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`text-4xl ${item.color}`}>{item.icon}</div>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                  <h4 className="mt-6 font-bold text-blue-900">Main Subjects</h4>
                  <ul className="mt-3 space-y-3">
                    {item.subjects.map((subject) => (
                      <li key={subject} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 text-green-600">✓</span>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALL TEACHERS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
                <FaChalkboardTeacher /> Our Teachers
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Meet Our Dedicated Teachers
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Our teachers help students understand their subjects and work
                towards their academic goals.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="h-64 overflow-hidden bg-gray-100">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/600x600/e2e8f0/1e3a8a?text=Teacher";
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {teacher.classes}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      {teacher.name}
                    </h3>
                    <p className="mt-2 font-semibold text-indigo-700">
                      {teacher.subject}
                    </p>
                    <div className="my-4 h-1 w-12 rounded-full bg-yellow-400" />
                    <h4 className="text-sm font-bold text-gray-800">
                      Teaching Subjects
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {teacher.subjects.map((subject) => (
                        <li
                          key={subject}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <FaBookOpen className="mt-1 shrink-0 text-blue-600" />
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm leading-6 text-gray-500">
              Mam 1–4 and Teacher 9 are placeholders. Update their names and
              subjects before publishing.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="bg-gradient-to-r from-yellow-400 to-amber-300 py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
                Want to Know More About Our Facilities?
              </h2>
              <p className="mt-3 text-blue-950/80">
                Contact the school to confirm available facilities, subjects,
                and teacher information.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-950 px-7 py-4 font-bold text-white transition hover:bg-blue-900"
            >
              Contact Us <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* NOTE */}
        <section className="bg-white px-6 py-6">
          <p className="mx-auto max-w-5xl text-center text-sm leading-6 text-gray-500">
            Facility images are illustrative examples. Replace them with actual
            school photographs and verify school information before publishing.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Facilities;
