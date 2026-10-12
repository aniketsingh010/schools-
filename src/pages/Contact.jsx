import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

```
setFormData((previousData) => ({
  ...previousData,
  [name]: value,
}));

setSubmitted(false);
```

};

const handleSubmit = (event) => {
event.preventDefault();

```
if (
  !formData.name.trim() ||
  !formData.email.trim() ||
  !formData.message.trim()
) {
  return;
}

setSubmitted(true);

// This is a frontend demo. Connect a backend or email service
// to actually send and store messages.
setFormData({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});
```

};

const contactDetails = [
{
icon: "📍",
title: "School Address",
description: "Maharajganj, Raebareli, Uttar Pradesh, India",
},
{
icon: "📞",
title: "Phone Number",
description: "Please contact the school for its official number.",
},
{
icon: "✉️",
title: "Email Address",
description: "Official school email to be added.",
},
{
icon: "🕒",
title: "School Timings",
description: "Please confirm school office hours directly.",
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
"Contact the school office to verify the facilities, subjects and other information currently available.",
},
];

return ( 
  <>
    < Navbar/>
<div className="min-h-screen bg-gray-50">


  {/* Hero Section */}
  <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 text-white">
    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>
    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

    <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-24">
      <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">
        💬 Get in Touch
      </span>

      <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
        Contact
        <span className="block text-yellow-400">Our School</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
       शैक्षणिक मुद्दों, प्रवेश या स्कूल सुविधाओं के बारे में सवाल हैं?  
स्वदेश सरस्वती विद्या मंदिर इण्टर कॉलेज, महाराजगंज, रायबरेली से संपर्क करें।
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
संपर्क जानकारी ढूंढें और नीचे दिए फॉर्म का इस्तेमाल करके अपनी पूछताछ भेजें।
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {contactDetails.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
            {item.icon}
          </div>

          <h3 className="mt-5 text-lg font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-3 break-words text-sm leading-7 text-gray-600">
            {item.description}
          </p>
        </div>
      ))}
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
       प्रवेश, अकादमिक कार्यक्रम या स्कूल की जानकारी के बारे में अपने सवाल भेजें। नीचे वाला फॉर्म केवल एक फ्रंटेंड डेमो है जब तक कि कोई काम करने वाली संदेश सेवा जुड़ी नहीं होती।
        </p>

        <div className="mt-10 space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl">
              📍
            </div>

            <div>
              <h3 className="font-bold">Visit Our School</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                महराजगंज, रायबरेली, उत्तर प्रदेश, भारत
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl">
              🎓
            </div>

            <div>
              <h3 className="font-bold">Admission Enquiries</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
              क्लासेस, योग्यता और आवश्यक दस्तावेज़ों के बारे में स्कूल ऑफिस से पूछो।
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl">
              📝
            </div>

            <div>
              <h3 className="font-bold">General Enquiries</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
               स्कूल के लिए अपना संदेश तैयार करने के लिए फॉर्म का इस्तेमाल करें।
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5">
          <p className="font-semibold text-yellow-400">
            School Information
          </p>

          <p className="mt-2 text-sm leading-6 text-blue-100">
          कृपया इस पेज को प्रकाशित करने से पहले आधिकारिक फोन नंबर, ईमेल पता और कार्यालय के समय की पुष्टि करें।
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
            Your form passed the basic frontend validation. No message
            has been sent to the school yet because a backend or email
            service is not connected.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                <option value="Admission Enquiry">Admission Enquiry</option>
                <option value="Academic Information">
                  Academic Information
                </option>
                <option value="School Facilities">School Facilities</option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

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

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-950 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800 sm:w-auto"
          >
            Submit Enquiry →
          </button>

          <p className="text-xs leading-5 text-gray-500">
            * Required fields. This demonstration does not transmit or
            store form submissions.
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
            Swadesh Saraswati Vidhya Mandir Inter College is associated
            with the Maharajganj area of Raebareli, Uttar Pradesh.
            Confirm the exact address before planning a visit.
          </p>

          <div className="mt-6 rounded-xl bg-blue-50 p-5">
            <p className="font-bold text-blue-950">
              📍 Maharajganj, Raebareli
            </p>

            <p className="mt-2 text-sm text-gray-600">
              Uttar Pradesh, India
            </p>
          </div>
        </div>

        <div className="flex min-h-72 flex-col items-center justify-center rounded-3xl border border-gray-200 bg-gray-100 p-8 text-center">
          <span className="text-6xl">🗺️</span>

          <h3 className="mt-5 text-xl font-bold text-gray-900">
            Find the School on Maps
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-7 text-gray-600">
            Search the full school name and verify the correct location
            before travelling.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Swadesh+Saraswati+Vidhya+Mandir+Inter+College+Maharajganj+Raebareli"
            target="_blank"
            rel="noreferrer"
            className="mt-6 rounded-lg bg-blue-950 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Open Google Maps ↗
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="bg-gray-100 py-20">
    <div className="mx-auto max-w-4xl px-6">
      <div className="mb-10 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
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

</div>
<Footer/>
  </>

);
};

export default Contact;
