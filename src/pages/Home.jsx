
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const classes = [
    {
      name: "Middle School",
      range: "Classes 6–8",
      icon: "📚",
      description:
        "Strong foundation, basic concepts aur learning skills par focus.",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Secondary School",
      range: "Classes 9–10",
      icon: "🎓",
      description:
        "Subject knowledge, regular practice aur examination preparation.",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Senior Secondary",
      range: "Classes 11–12",
      icon: "🏆",
      description:
        "Higher studies aur future career ki taiyari ke liye learning.",
      color: "from-orange-500 to-orange-700",
    },
  ];

  const facilities = [
    {
      icon: "📖",
      title: "Quality Education",
      description:
        "Students ko concepts samajhne aur knowledge badhane mein madad.",
    },
    {
      icon: "💻",
      title: "Computer Education",
      description:
        "Digital learning aur technology ki basic understanding.",
    },
    {
      icon: "⚽",
      title: "Sports & Activities",
      description:
        "Physical activity, teamwork aur discipline ko badhava.",
    },
    {
      icon: "🌱",
      title: "Overall Development",
      description:
        "Academic learning ke saath confidence aur responsibility.",
    },
  ];

  const reasons = [
    "Student-focused learning",
    "Academic discipline",
    "Learning and personal development",
    "Supportive school environment",
  ];

  return (
    <>
     <Navbar/>
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-2xl" />
        <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-blue-400/10 blur-2xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-yellow-300">
         हमारे विद्यालय में आपका स्वागत है।
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
           शिक्षा ही है...
              <span className="block text-yellow-300">
             सफलता की कुंजी।
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 md:text-lg">
            स्वदेश सरस्वती विद्या मंदिर इंटर कॉलेज, महाराजगंज, रायबरेली

शिक्षा, ज्ञान और विद्यार्थियों के सर्वांगीण विकास को बढ़ावा देने वाला एक शैक्षणिक संस्थान।
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/admission"
                className="rounded-xl bg-yellow-400 px-7 py-4 font-bold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Admission Enquiry →
              </Link>

              <Link
                to="/about"
                className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-blue-950"
              >
                About Our School
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-blue-100">
              <span>✓ Classes 6–12</span>
              <span>✓ Learning Focus</span>
              <span>✓ Student Development</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-yellow-400/20" />

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
              alt="Students learning in a classroom"
              className="relative h-[350px] w-full rounded-3xl object-cover shadow-2xl md:h-[470px]"
            />

            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-5 text-slate-800 shadow-xl md:left-8 md:right-8">
              <p className="text-sm font-semibold text-blue-700">
                OUR COMMITMENT
              </p>

              <h3 className="mt-1 text-lg font-extrabold md:text-xl">
                आज सीखें, कल नेतृत्व करें।
              </h3>

              <p className="mt-2 text-sm text-slate-500">
              ज्ञान • अनुशासन • विकास
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=85"
              alt="Students studying together"
              className="h-[320px] w-full rounded-3xl object-cover shadow-lg md:h-[430px]"
            />

            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-yellow-400 p-5 shadow-lg md:-right-5">
              <p className="text-2xl font-extrabold text-blue-950">
                Learn
              </p>
              <p className="font-bold text-blue-950">Grow • Succeed</p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="font-bold uppercase tracking-widest text-blue-700">
              About Our School
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Building A Better Future Through Education
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
             स्वदेश सरस्वती विद्या मंदिर इंटर कॉलेज की वेबसाइट पर आपका हार्दिक स्वागत है। हमारा उद्देश्य विद्यार्थियों की शैक्षणिक शिक्षा, अनुशासन और व्यक्तिगत विकास को प्रोत्साहित करना है।

            </p>

            <p className="mt-4 leading-8 text-slate-600">
           यहाँ आप विद्यालय के बारे में, कक्षाओं, सुविधाओं, प्रवेश प्रक्रिया और शुल्क संरचना से संबंधित जानकारी प्राप्त कर सकते हैं।

            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-2">
                  <span className="font-extrabold text-green-600">✓</span>
                  <span className="text-sm font-semibold text-slate-700">
                    {reason}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-block rounded-lg bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
           **और अधिक जानें →**

            </Link>
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section className="bg-slate-50 px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-700">
         **शैक्षणिक कार्यक्रम**

            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
           **हमारी कक्षाओं के बारे में जानें।**

            </h2>

            <p className="mt-4 leading-7 text-slate-600">
         कक्षा 6 से 12 तक की शैक्षणिक जानकारी और सीखने के विभिन्न अवसरों के बारे में जानें।

            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {classes.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`bg-gradient-to-r ${item.color} p-7 text-white`}
                >
                  <span className="text-5xl">{item.icon}</span>

                  <h3 className="mt-5 text-2xl font-extrabold">
                    {item.name}
                  </h3>

                  <p className="mt-2 font-semibold text-white/90">
                    {item.range}
                  </p>
                </div>

                <div className="p-7">
                  <p className="leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <Link
                    to="/academics"
                    className="mt-6 inline-block font-bold text-blue-700 group-hover:text-blue-900"
                  >
                 **कक्षाओं के बारे में जानें →**

                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-700">
           **हमें क्यों चुनें?**

            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              **कक्षा से परे सीखने के अवसर**

            </h2>

            <p className="mt-4 leading-7 text-slate-600">
          शिक्षा का उद्देश्य केवल पुस्तकों तक सीमित नहीं है, बल्कि विद्यार्थियों के कौशल और आत्मविश्वास का विकास करना भी है।

            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {facility.icon}
                </div>

                <h3 className="mt-6 text-xl font-extrabold">
                  {facility.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
         **नोट:** विद्यालय की सुविधाओं के बारे में दी गई जानकारी केवल उदाहरण के लिए है। वेबसाइट प्रकाशित करने से पहले विद्यालय में उपलब्ध वास्तविक सुविधाओं की पुष्टि अवश्य करें।

          </p>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 to-indigo-800 px-7 py-12 text-center text-white md:px-16 md:py-16">
          <p className="font-bold uppercase tracking-widest text-yellow-300">
         **प्रवेश संबंधी जानकारी**

          </p>

          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
         **अपनी शैक्षिक यात्रा शुरू करें।**

          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
           प्रवेश प्रक्रिया, आवश्यक दस्तावेज़ों और उपलब्ध कक्षाओं के बारे में जानकारी प्राप्त करने के लिए प्रवेश पृष्ठ पर जाएँ या विद्यालय के कार्यालय से संपर्क करें।

          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/admission"
              className="rounded-xl bg-yellow-400 px-7 py-4 font-bold text-blue-950 transition hover:bg-yellow-300"
            >
           **प्रवेश हेतु पूछताछ →**

            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-blue-950"
            >
             **विद्यालय से संपर्क करें**

            </Link>
          </div>
        </div>
      </section>

      {/* FEES SECTION */}
      <section className="bg-slate-50 px-5 py-16 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-2xl bg-white p-8 shadow-sm md:flex-row md:p-10">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-700">
         **शुल्क संबंधी जानकारी**

            </p>

            <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
            **क्या आप शुल्क का विवरण जानना चाहते हैं?**

            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
         
            </p>
          </div>
कक्षावार शुल्क और शुल्क संरचना की जानकारी प्राप्त करने के लिए शुल्क विवरण पृष्ठ पर जाएँ।

          <Link
            to="/fees"
            className="shrink-0 rounded-xl bg-blue-700 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
          >
           **शुल्क विवरण देखें →**

          </Link>
        </div>
      </section>

      {/* BOTTOM MESSAGE */}
      <section className="bg-blue-950 px-5 py-10 text-center text-white">
        <h2 className="text-2xl font-extrabold">
       **ज्ञान ही सफलता की नींव है।**

        </h2>

        <p className="mt-3 text-blue-200">
      **स्वदेश सरस्वती विद्या मंदिर इंटर कॉलेज**

        </p>

        <p className="mt-2 text-sm text-blue-300">
        **महाराजगंज, रायबरेली, उत्तर प्रदेश**

        </p>
      </section>
    </main>
    <Footer/>
    </>
   
  );
}

