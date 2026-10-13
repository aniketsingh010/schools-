import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaComments,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaGraduationCap,
  FaClipboardList,
  FaArrowRight,
  FaExternalLinkAlt,
  FaSchool,
  FaQuestionCircle,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setSubmitted(true);

    // Frontend demo only.
    // Connect a backend or email service to send messages.

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactDetails = [
    {
      icon: FaMapMarkerAlt,
      title: "School Address",
      description: "Maharajganj, Raebareli, Uttar Pradesh, India",
    },
    {
      icon: FaPhoneAlt,
      title: "Phone Number",
      description: "Please contact the school for its official number.",
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      description: "Official school email address to be added.",
    },
    {
      icon: FaClock,
      title: "School Timings",
      description: "Please confirm office hours directly with the school.",
    },
  ];

  const faqs = [
    {
      question: "How can I enquire about admission?",
      answer:
        "Fill out the contact form or visit the school office to ask about admission requirements and available seats.",
    },
    {
      question: "Which classes does the website cover?",
      answer:
        "The website provides academic information for Classes 6 to 12. Please contact the school to confirm currently available classes.",
    },
    {
      question: "How can I confirm school facilities?",
      answer:
        "Contact the school office to verify the facilities, subjects, and other information currently available.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 text-white">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

          <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">
              <FaComments />
              Get in Touch
            </span>

            <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
              Contact
              <span className="block text-yellow-400">
                Our School
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
              Have questions about admissions, academic programs,
              or school facilities? Get in touch with Swadesh
              Saraswati Vidya Mandir Inter College, Maharajganj,
              Raebareli.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Contact Information
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              We're Here to Help
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Find our contact information and use the form below
              to send us your enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-800">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 break-words text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form and Details */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            {/* Left Information */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-indigo-700 p-8 text-white shadow-xl lg:col-span-2 md:p-10">
              <span className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                Get Connected
              </span>

              <h2 className="mt-4 text-3xl font-extrabold">
                Let's Start a Conversation
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                Send us your questions about admissions, academic
                programs, or school information. This form is a
                frontend demonstration until a messaging service
                is connected.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="font-bold">Visit Our School</h3>

                    <p className="mt-2 text-sm leading-6 text-blue-100">
                      Maharajganj, Raebareli, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <h3 className="font-bold">Admission Enquiries</h3>

                    <p className="mt-2 text-sm leading-6 text-blue-100">
                      Contact the school office about available
                      classes, eligibility, and required documents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                    <FaClipboardList />
                  </div>

                  <div>
                    <h3 className="font-bold">General Enquiries</h3>

                    <p className="mt-2 text-sm leading-6 text-blue-100">
                      Use the contact form to prepare your enquiry
                      about the school.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="font-semibold text-yellow-400">
                  School Information
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Please verify the official phone number, email
                  address, and office hours before publishing
                  this page.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-md lg:col-span-3 md:p-10">
              <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
                Send Us a Message
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Fill in the required information below.
              </p>

              {submitted && (
                <div
                  role="status"
                  className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
                >
                  Your form passed the basic frontend validation.
                  No message has been sent to the school because a
                  backend or email service is not connected yet.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      autoComplete="tel"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">Select a subject</option>
                      <option value="Admission Enquiry">
                        Admission Enquiry
                      </option>
                      <option value="Academic Information">
                        Academic Information
                      </option>
                      <option value="School Facilities">
                        School Facilities
                      </option>
                      <option value="General Enquiry">
                        General Enquiry
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="5"
                    required
                    className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-950 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800 sm:w-auto"
                >
                  Submit Enquiry
                  <FaPaperPlane />
                </button>

                <p className="text-xs leading-5 text-gray-500">
                  * Required fields. This demonstration does not
                  transmit or store form submissions.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
                  Find Us
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
                  Our School Location
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  Swadesh Saraswati Vidya Mandir Inter College is
                  associated with the Maharajganj area of Raebareli,
                  Uttar Pradesh. Confirm the exact address before
                  planning your visit.
                </p>

                <div className="mt-6 rounded-xl bg-blue-50 p-5">
                  <p className="flex items-center gap-2 font-bold text-blue-950">
                    <FaMapMarkerAlt />
                    Maharajganj, Raebareli
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex min-h-72 flex-col items-center justify-center rounded-3xl border border-gray-200 bg-gray-100 p-8 text-center">
                <FaMapMarkerAlt className="text-6xl text-blue-800" />

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Find Our School on Maps
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-gray-600">
                  Search for the school name and verify the correct
                  location before travelling.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Swadesh+Saraswati+Vidhya+Mandir+Inter+College+Maharajganj+Raebareli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-950 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Open Google Maps
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-10 text-center">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-700">
                <FaQuestionCircle />
                FAQs
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-900">
                    {faq.question}

                    <span className="text-xl text-blue-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-yellow-400 to-amber-300 py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="flex items-center justify-center gap-3 text-2xl font-extrabold text-blue-950 md:justify-start md:text-3xl">
                <FaSchool />
                Learn More About Our School
              </h2>

              <p className="mt-3 text-blue-950/80">
                Explore our school, academic programs, and facilities.
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

export default Contact;