
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaBookOpen,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaLaptop,
  FaSeedling,
  FaArrowRight,
  FaCheck,
  FaUserGraduate,
} from "react-icons/fa";

const Academics = () => {
  const classes = [
    {
      title: "Middle School",
      range: "Classes 6–8",
      icon: <FaBookOpen />,
      color: "from-blue-500 to-blue-700",
      description:
        "Students strengthen their basic knowledge, develop curiosity, and build a strong foundation for higher classes.",
      subjects: [
        "Hindi",
        "English",
        "Mathematics",
        "Science",
        "Social Science",
        "Sanskrit",
        "Computer Education",
      ],
    },
    {
      title: "Secondary School",
      range: "Classes 9–10",
      icon: <FaBookOpen />,
      color: "from-purple-500 to-purple-700",
      description:
        "Students focus on conceptual understanding, regular practice, examination preparation, and academic development.",
      subjects: [
        "Hindi",
        "English",
        "Mathematics",
        "Science",
        "Social Science",
        "Sanskrit",
        "Computer Education",
      ],
    },
    {
      title: "Senior Secondary",
      range: "Classes 11–12",
      icon: <FaGraduationCap />,
      color: "from-emerald-500 to-emerald-700",
      description:
        "Students study advanced subjects according to the streams and subject combinations offered by the school.",
      subjects: [
        "Science – if offered",
        "Commerce – if offered",
        "Arts/Humanities – if offered",
        "Language Subjects",
        "Elective Subjects",
      ],
    },
  ];

  const learningFeatures = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Experienced Teachers",
      description:
        "Experienced teachers provide guidance and support to help students understand their subjects.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Regular Assessment",
      description:
        "Regular practice, assignments, and assessments help review students' learning progress.",
    },
    {
      icon: <FaLaptop />,
      title: "Digital Learning",
      description:
        "Educational technology and digital resources support learning wherever available.",
    },
    {
      icon: <FaSeedling />,
      title: "Overall Development",
      description:
        "Students are encouraged to develop discipline, confidence, creativity, and teamwork.",
    },
  ];

  const goals = [
    "Develop strong subject knowledge",
    "Encourage critical thinking and creativity",
    "Build discipline and responsibility",
    "Prepare students for future studies",
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 text-white">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="max-w-3xl">

              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">
                <FaBookOpen className="text-yellow-400" />
                Our Academic Programs
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
                Learn Today,
                <span className="block text-yellow-400">
                  Lead Tomorrow
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
                Explore academic information for Classes 6 to 12 at
                Swadesh Saraswati Vidya Mandir Inter College,
                Maharajganj, Raebareli. Our goal is to help students
                learn, grow, and prepare for the future.
              </p>

              <a
                href="#class-programs"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-7 py-3.5 font-bold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Explore Classes
                <FaArrowRight />
              </a>

            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Academic Excellence
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Education for Every Stage
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Every stage of education helps students develop
              knowledge, independent thinking, and confidence.
              Explore the class levels below to learn more about
              the school's academic structure.
            </p>

          </div>
        </section>

        {/* Class Programs */}
        <section
          id="class-programs"
          className="mx-auto max-w-7xl px-6 pb-20"
        >
          <div className="mb-10 text-center">

            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Class Programs
            </h2>

            <p className="mt-3 text-gray-600">
              Academic programs for Classes 6 to 12
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {classes.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`bg-gradient-to-r ${item.color} p-7 text-white`}
                >
                  <div className="flex items-center justify-between">

                    <span className="text-5xl">
                      {item.icon}
                    </span>

                    <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold">
                      {item.range}
                    </span>

                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>

                <div className="p-7">

                  <p className="min-h-24 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <h4 className="mb-4 mt-6 text-lg font-bold text-gray-900">
                    Subjects & Areas
                  </h4>

                  <div className="flex flex-wrap gap-2">

                    {item.subjects.map((subject, subjectIndex) => (
                      <span
                        key={subjectIndex}
                        className="rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-800"
                      >
                        {subject}
                      </span>
                    ))}

                  </div>

                  <a
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 font-bold text-blue-700 transition group-hover:text-blue-900"
                  >
                    Enquiry Information
                    <FaArrowRight />
                  </a>

                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Learning Approach */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mx-auto mb-12 max-w-3xl text-center">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
                Our Approach
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Supporting Student Learning
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                A supportive learning environment helps students
                develop good study habits, strengthen their
                understanding, and prepare for future opportunities.
              </p>

            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {learningFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-7 text-center transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-800">
                    {feature.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {feature.description}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Academic Goals */}
        <section className="bg-gray-100 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
                Student Development
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
                Building Knowledge,
                <span className="block text-blue-700">
                  Confidence & Character
                </span>
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Education goes beyond books and examinations.
                It also includes curiosity, responsible behaviour,
                problem-solving skills, and respect for others.
              </p>

              <div className="mt-7 space-y-4">

                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <FaCheck className="text-sm" />
                    </span>

                    <p className="text-gray-700">
                      {goal}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-indigo-700 p-8 text-white shadow-xl md:p-12">

              <FaUserGraduate className="text-6xl text-yellow-400" />

              <h3 className="mt-6 text-2xl font-bold md:text-3xl">
                Every Student Has Potential
              </h3>

              <p className="mt-5 leading-8 text-blue-100">
                With regular practice, guidance, and encouragement,
                students can continue developing their abilities
                and working towards their academic goals.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
              >
                Contact the School
                <FaArrowRight />
              </a>

            </div>
          </div>
        </section>

        {/* Admission CTA */}
        <section className="bg-gradient-to-r from-yellow-400 to-amber-300 py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">

            <div>

              <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
                Looking for Admission Information?
              </h2>

              <p className="mt-3 text-blue-950/80">
                Contact the school to confirm class availability,
                subjects, and admission requirements.
              </p>

            </div>

            <a
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-blue-950 px-7 py-4 font-bold text-white transition hover:bg-blue-900"
            >
              Get in Touch
              <FaArrowRight />
            </a>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default Academics;
