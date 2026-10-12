
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

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
      title: "Enquiry",
      description:
        "School admission ke baare mein jaankari prapt karein.",
    },
    {
      number: "02",
      title: "Application Form",
      description:
        "School se admission form aur zaroori instructions prapt karein.",
    },
    {
      number: "03",
      title: "Documents",
      description:
        "School ke instructions ke according zaroori documents jama karein.",
    },
    {
      number: "04",
      title: "Confirmation",
      description:
        "Admission, fees aur class placement ki confirmation school se lein.",
    },
  ];

  const documents = [
    "Previous class ki marksheet",
    "Transfer Certificate (agar applicable ho)",
    "Student ki passport-size photographs",
    "Date of Birth proof",
    "Aadhaar ya anya ID document, school rules ke according",
  ];

  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-semibold">
            ADMISSIONS OPEN — SUBJECT TO SCHOOL CONFIRMATION
          </p>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Give Your Child a
            <span className="block text-yellow-300">
              Bright Future
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-blue-100">
            Swadesh Saraswati Vidhya Mandir Inter College mein
            admission se judi jaankari prapt karein. Apne bachche
            ki education journey ke liye school se sampark karein.
          </p>

          <a
            href="#admission-form"
            className="inline-block rounded-lg bg-yellow-400 px-7 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
          >
            Apply for Admission →
          </a>
        </div>

        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-24 right-40 h-64 w-64 rounded-full bg-yellow-300/10" />
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
              Class availability, eligibility aur admission dates
              ke liye school office se confirmation lein.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Middle School",
                classes: "Classes 6–8",
                description:
                  "Basic concepts, learning skills aur academic foundation par focus.",
                color: "border-blue-500",
              },
              {
                title: "Secondary School",
                classes: "Classes 9–10",
                description:
                  "Subject knowledge, regular practice aur examination preparation.",
                color: "border-green-500",
              },
              {
                title: "Senior Secondary",
                classes: "Classes 11–12",
                description:
                  "Available streams, subjects aur eligibility ki jaankari school se lein.",
                color: "border-orange-500",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border-t-4 ${item.color} bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl`}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-2xl font-extrabold text-blue-700">
                  {item.classes}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <a
                  href="#admission-form"
                  className="mt-6 inline-block font-bold text-blue-700 hover:text-blue-900"
                >
                  Enquire Now →
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
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-slate-50 p-6 text-center transition hover:bg-blue-50"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-xl font-extrabold text-white">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
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
              Neeche diye gaye documents aam taur par admission
              mein maange ja sakte hain. Final list school office
              se confirm karein.
            </p>

            <div className="mt-7 space-y-4">
              {documents.map((document, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                    ✓
                  </span>

                  <p className="pt-1 text-slate-700">{document}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-800 to-indigo-950 p-8 text-white shadow-xl md:p-10">
            <div className="text-5xl">🎓</div>

            <h3 className="mt-5 text-2xl font-extrabold">
              Start Your Learning Journey
            </h3>

            <p className="mt-4 leading-8 text-blue-100">
              Admission ki dates, eligibility, available seats aur
              fees ke baare mein jaankari lene ke liye school office
              se sampark karein.
            </p>

            <a
              href="#admission-form"
              className="mt-7 inline-block rounded-lg bg-yellow-400 px-6 py-3 font-bold text-blue-950 hover:bg-yellow-300"
            >
              Admission Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section id="admission-form" className="bg-blue-950 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center text-white">
            <p className="font-bold uppercase tracking-widest text-yellow-300">
              Contact Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Admission Enquiry Form
            </h2>

            <p className="mt-4 text-blue-100">
              Form fill karein. Admission team se sampark karne ke
              liye school ko actual backend ya contact system se
              connect karna hoga.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-2xl md:p-10"
          >
            {submitted && (
              <div
                role="status"
                className="mb-6 rounded-lg bg-green-100 p-4 text-green-800"
              >
                Demo form submit ho gaya! Abhi data save ya school
                ko send nahi hua hai.
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold">
                  Student Name *
                </label>

                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Parent / Guardian Name *
                </label>

                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Applying for Class *
                </label>

                <select
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select Class</option>
                  {[6, 7, 8, 9, 10, 11, 12].map((classNumber) => (
                    <option key={classNumber} value={classNumber}>
                      Class {classNumber}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address (optional)"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block font-semibold">
                  Additional Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any questions about admission?"
                  rows="4"
                  className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-lg bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Submit Enquiry →
            </button>

            <p className="mt-4 text-center text-sm text-slate-500">
              Yeh abhi frontend demo hai. Real enquiry receive karne
              ke liye backend ya form service connect karni hogi.
            </p>
          </form>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  
  );
}
