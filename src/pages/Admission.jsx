import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaGraduationCap,
  FaArrowRight,
  FaClipboardList,
  FaFileAlt,
  FaCheckCircle,
  FaUserGraduate,
  FaSchool,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Admission() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    className: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.studentName.trim() ||
      !formData.parentName.trim() ||
      !formData.phone.trim() ||
      !formData.className
    ) {
      return;
    }

    setSubmitted(true);

    // Frontend demo only.
    // Connect a backend or email service to save and send applications.

    setFormData({
      studentName: "",
      parentName: "",
      phone: "",
      className: "",
      email: "",
      message: "",
    });
  };

  const admissionSteps = [
    {
      number: "01",
      icon: FaPhoneAlt,
      title: "Enquiry",
      description:
        "Contact the school to learn about admission requirements and available classes.",
    },
    {
      number: "02",
      icon: FaFileAlt,
      title: "Application Form",
      description:
        "Obtain the admission form and follow the instructions provided by the school.",
    },
    {
      number: "03",
      icon: FaClipboardList,
      title: "Documents",
      description:
        "Submit the required documents according to the school's instructions.",
    },
    {
      number: "04",
      icon: FaCheckCircle,
      title: "Confirmation",
      description:
        "Confirm admission, fees, and class placement with the school office.",
    },
  ];

  const documents = [
    "Previous class marksheet",
    "Transfer Certificate, if applicable",
    "Recent passport-size photographs of the student",
    "Proof of date of birth",
    "Aadhaar or another identification document, if required by the school",
  ];

  const classes = [
    {
      title: "Middle School",
      classes: "Classes 6–8",
      description:
        "Focus on fundamental concepts, learning skills, and academic foundations.",
      color: "border-blue-500",
    },
    {
      title: "Secondary School",
      classes: "Classes 9–10",
      description:
        "Focus on subject knowledge, regular practice, and examination preparation.",
      color: "border-green-500",
    },
    {
      title: "Senior Secondary",
      classes: "Classes 11–12",
      description:
        "Contact the school to confirm available streams, subjects, and eligibility.",
      color: "border-orange-500",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 px-6 py-20 text-white">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10"></div>

          <div className="pointer-events-none absolute -bottom-24 right-40 h-64 w-64 rounded-full bg-yellow-300/10"></div>

          <div className="relative mx-auto max-w-7xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold">
              <FaGraduationCap />
              Admission Enquiries
            </p>

            <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Give Your Child a
              <span className="block text-yellow-300">
                Bright Future
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-blue-100">
              Explore admission information for Swadesh Saraswati
              Vidya Mandir Inter College, Maharajganj, Raebareli.
              Contact the school to begin your child's educational
              journey.
            </p>

            <a
              href="#admission-form"
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-7 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
            >
              Apply for Admission
              <FaArrowRight />
            </a>

            <p className="mt-5 text-sm text-blue-100">
              Admission availability and dates must be confirmed
              with the school.
            </p>
          </div>
        </section>

        {/* Classes Section */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="font-bold uppercase tracking-widest text-blue-700">
                Classes
              </p>

              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Choose Your Class
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Contact the school office to confirm class
                availability, eligibility, and admission dates.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {classes.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border-t-4 ${item.color} bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-800">
                    <FaSchool />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-2xl font-extrabold text-blue-700">
                    {item.classes}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <a
                    href="#admission-form"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
                  >
                    Enquire Now
                    <FaArrowRight />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="font-bold uppercase tracking-widest text-blue-700">
                How It Works
              </p>

              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Admission Process
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                Follow these general steps and confirm the final
                admission procedure with the school.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {admissionSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="rounded-2xl bg-slate-50 p-6 text-center transition hover:bg-blue-50"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-xl font-extrabold text-white">
                      {step.number}
                    </div>

                    <div className="mt-5 flex justify-center text-2xl text-blue-700">
                      <Icon />
                    </div>

                    <h3 className="mt-4 text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-bold uppercase tracking-widest text-blue-700">
                Be Prepared
              </p>

              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Documents Required
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                The following documents may be requested during
                admission. Please confirm the final list with
                the school office.
              </p>

              <div className="mt-7 space-y-4">
                {documents.map((document, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-xl text-green-600" />

                    <p className="text-slate-700">{document}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-800 to-indigo-950 p-8 text-white shadow-xl md:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-4xl text-yellow-300">
                <FaUserGraduate />
              </div>

              <h3 className="mt-5 text-2xl font-extrabold">
                Start Your Learning Journey
              </h3>

              <p className="mt-4 leading-8 text-blue-100">
                Contact the school office to learn about admission
                dates, eligibility, available seats, and fees.
              </p>

              <a
                href="#admission-form"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
              >
                Admission Enquiry
                <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* Admission Form */}
        <section
          id="admission-form"
          className="bg-blue-950 px-6 py-16"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center text-white">
              <p className="font-bold uppercase tracking-widest text-yellow-300">
                Contact Us
              </p>

              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Admission Enquiry Form
              </h2>

              <p className="mt-4 text-blue-100">
                Complete the form below to prepare an admission
                enquiry. A backend or contact service is needed
                to send the details to the school.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-6 shadow-2xl md:p-10"
            >
              {submitted && (
                <div
                  role="status"
                  className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800"
                >
                  <p className="flex items-center gap-2 font-bold">
                    <FaCheckCircle />
                    Demo Form Submitted Successfully!
                  </p>

                  <p className="mt-2 text-sm leading-6">
                    Your form passed the frontend validation.
                    The information has not been saved or sent
                    to the school yet.
                  </p>
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                {/* Student Name */}
                <div>
                  <label
                    htmlFor="studentName"
                    className="mb-2 block font-semibold"
                  >
                    Student Name *
                  </label>

                  <input
                    id="studentName"
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="Enter student name"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Parent Name */}
                <div>
                  <label
                    htmlFor="parentName"
                    className="mb-2 block font-semibold"
                  >
                    Parent / Guardian Name *
                  </label>

                  <input
                    id="parentName"
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Enter parent or guardian name"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-semibold"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit phone number"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    title="Please enter a 10-digit phone number"
                    autoComplete="tel"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Class */}
                <div>
                  <label
                    htmlFor="className"
                    className="mb-2 block font-semibold"
                  >
                    Applying for Class *
                  </label>

                  <select
                    id="className"
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select Class</option>

                    {[6, 7, 8, 9, 10, 11, 12].map(
                      (classNumber) => (
                        <option
                          key={classNumber}
                          value={classNumber}
                        >
                          Class {classNumber}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="email"
                    className="mb-2 block font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address (optional)"
                    autoComplete="email"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Additional Message */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block font-semibold"
                  >
                    Additional Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write any questions about admission..."
                    rows="4"
                    className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
              >
                Submit Enquiry
                <FaPaperPlane />
              </button>

              <p className="mt-4 text-center text-sm leading-6 text-slate-500">
                Required fields are marked with *. This demo does
                not transmit or store application details.
              </p>
            </form>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-yellow-400 to-amber-300 px-6 py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="flex items-center justify-center gap-3 text-2xl font-extrabold text-blue-950 md:justify-start md:text-3xl">
                <FaGraduationCap />
                Discover Our School
              </h2>

              <p className="mt-3 text-blue-950/80">
                Learn more about our school, academics, and facilities.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-7 py-4 font-bold text-white transition hover:bg-blue-900"
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
}