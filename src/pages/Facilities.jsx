import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Facilities = () => {
  const facilities = [
    {
      icon: "📚",
      title: "Library",
      description:
        "A library can help students develop reading habits, improve vocabulary and explore knowledge beyond their textbooks.",
      color: "bg-blue-100",
    },
    {
      icon: "💻",
      title: "Computer Education",
      description:
        "Computer education helps students understand digital tools and develop basic technology skills.",
      color: "bg-purple-100",
    },
    {
      icon: "🔬",
      title: "Science Laboratory",
      description:
        "Practical activities help students connect scientific concepts with real-world observations.",
      color: "bg-green-100",
    },
    {
      icon: "⚽",
      title: "Sports & Games",
      description:
        "Sports and games encourage teamwork, discipline, confidence and an active lifestyle.",
      color: "bg-orange-100",
    },
    {
      icon: "🏫",
      title: "Classrooms",
      description:
        "A positive classroom environment supports learning, participation and interaction between teachers and students.",
      color: "bg-pink-100",
    },
    {
      icon: "🎨",
      title: "Cultural Activities",
      description:
        "Cultural activities can encourage creativity, communication skills and appreciation of traditions.",
      color: "bg-yellow-100",
    },
    {
      icon: "🧹",
      title: "Clean Environment",
      description:
        "Clean and well-maintained surroundings support a comfortable and welcoming learning environment.",
      color: "bg-teal-100",
    },
    {
      icon: "🪑",
      title: "Student-Friendly Spaces",
      description:
        "Suitable seating and organized learning spaces can help students concentrate during lessons.",
      color: "bg-indigo-100",
    },
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Better Learning",
      description:
        "Learning resources can help students understand concepts and practise new skills.",
    },
    {
      icon: "🌟",
      title: "Skill Development",
      description:
        "Academic and extracurricular activities help students explore their interests.",
    },
    {
      icon: "🤝",
      title: "Teamwork",
      description:
        "Group activities encourage cooperation, communication and mutual respect.",
    },
    {
      icon: "🌱",
      title: "Overall Growth",
      description:
        "A supportive school environment contributes to students' academic and personal development.",
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

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">
              🏫 School Facilities
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
        एक बेहतर पर्यावरण
              <span className="block text-yellow-400">
           बेहतर सीखने के लिए
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
स्वदेश सरस्वती विद्या मंदिर इण्टर कॉलेज, महाराजगंज, रायबरेली में कक्षा 6 से 12 तक के छात्रों के लिए उपलब्ध लर्निंग संसाधनों और सुविधाओं का अन्वेषण करें।
            </p>

            <a
              href="#facilities-list"
              className="mt-8 inline-block rounded-lg bg-yellow-400 px-7 py-3.5 font-bold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Explore Facilities ↓
            </a>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
            सीखने का माहौल
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
छात्र विकास के लिए सुविधाएँ
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
एक सहायक स्कूल का वातावरण छात्रों को सीखने, सवाल पूछने, कौशल विकसित करने और गतिविधियों में भाग लेने के अवसर देता है। नीचे सूचीबद्ध सुविधाओं का पता लगाएँ।
            </p>
          </div>
        </section>

        {/* Facilities Cards */}
        <section id="facilities-list" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${facility.color} text-4xl transition duration-300 group-hover:scale-110`}
                >
                  {facility.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {facility.description}
                </p>

                <div className="mt-5 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-20"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Section */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">

            <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-indigo-700 p-8 text-white shadow-xl md:p-12">
              <div className="text-6xl">🎓</div>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight">
                Learning Beyond
                <span className="block text-yellow-400">
                  the Classroom
                </span>
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
शिक्षा में व्यावहारिक गतिविधियाँ, टीमवर्क, रचनात्मकता और नई क्षमताएँ सीखना भी शामिल है। ये अनुभव छात्रों को अधिक आत्मविश्वासी और स्वतंत्र बनने में मदद कर सकते हैं।
              </p>

              <a
                href="/academics"
                className="mt-7 inline-block rounded-lg bg-yellow-400 px-6 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
              >
                Explore Academics →
              </a>
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
           सुविधाएँ क्यों मायने रखती हैं
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              हर छात्र का समर्थन करना
             </h2>

              <p className="mt-5 leading-8 text-gray-600">
लर्निंग रिसोर्सेज और स्कूल की गतिविधियाँ छात्रों को महत्वपूर्ण अकादमिक, सामाजिक और व्यक्तिगत कौशल विकसित करने में मदद कर सकती हैं।
              </p>

              <div className="mt-8 space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-3xl">
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

        {/* Classes Section */}
        <section className="bg-gray-100 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
           कक्षा 6–12 के लिए सुविधाएँ
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
            जैसे-जैसे छात्र शिक्षा के अलग-अलग चरणों से गुजरते हैं, उनकी सीखने की जरूरतें बदलती रहती हैं। 
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
                <div className="text-4xl">📘</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Classes 6–8
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
जिज्ञासा, पढ़ाई की आदतें, बेसिक कंप्यूटर ज्ञान और मुख्य विषयों की मजबूत नींव को बढ़ावा दें।
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
                <div className="text-4xl">📚</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
               कक्षाएँ 9–10
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
विषय की समझ, व्यावहारिक सीख, दोहराई और परीक्षा की तैयारी में मदद करें।
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
                <div className="text-4xl">🎓</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Classes 11–12
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                उपलब्ध पाठ्यक्रमों के अनुसार उन्नत विषय सीखने और भविष्य की शैक्षिक योजना का समर्थन करें।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-yellow-400 to-amber-300 py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
             हमारी सुविधाओं के बारे में और जानना चाहते हैं?
              </h2>

              <p className="mt-3 text-blue-950/80">
वर्तमान में उपलब्ध सुविधाओं की पुष्टि के लिए स्कूल से संपर्क करें।
              </p>
            </div>

            <a
              href="/contact"
              className="shrink-0 rounded-lg bg-blue-950 px-7 py-4 font-bold text-white transition hover:bg-blue-900"
            >
              Contact Us →
            </a>
          </div>
        </section>

      </div>
      <Footer />
    </>


  );
};

export default Facilities;
