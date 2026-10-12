
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <Navbar/>
      {/* About Hero Section */}
      <section className="bg-blue-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-400 font-semibold uppercase tracking-widest">
            About Our School
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-4">
           स्वदेश सरस्वती विद्यालय मंदिर
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-3">
            इंटर कॉलेज, महाराजगंज, रायबरेली
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-200 leading-8">
           स्वदेश सरस्वती विद्या मंदिर इण्टर कालेज में आपका स्वागत है। हमारी वेबसाइट हमारे स्कूल, शैक्षिक कार्यक्रमों, सुविधाओं और कक्षा 6 से कक्षा 12 तक के छात्रों के लिए शैक्षिक गतिविधियों की जानकारी प्रदान करती है।
          </p>
        </div>
      </section>

      {/* School Introduction */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80"
              alt="School building"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <p className="text-orange-500 font-bold uppercase tracking-widest">
             हमारे स्कूल में आपका स्वागत है
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
            ज्ञान, मूल्य और आत्मविश्वास बनाना
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
 स्वदेश सरस्वती विद्या मंदिर इंटर कॉलेज, महाराजगंज, रायबरेली, इस वेबसाइट पर दिखाया गया स्कूल है। कक्षा 6 से 12 तक के इसके शैक्षणिक कार्यक्रमों के बारे में जानकारी लें और स्कूल जीवन के अलग-अलग पहलुओं को जानें।
            </p>

            <p className="text-gray-600 mt-4 leading-8">
           शिक्षा छात्रों को ज्ञान, अनुशासन, आत्मविश्वास और जिम्मेदारी की भावना विकसित करने में मदद करती है। हमारी वेबसाइट का मकसद स्कूल की जानकारी को माता-पिता, छात्रों और विज़िटर्स के लिए आसान बनाना है ताकि वे इसे आसानी से एक्सप्लोर कर सकें।
            </p>

            <a
              href="/academics"
              className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Explore Academics
            </a>
          </div>

        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-orange-500 font-bold uppercase tracking-widest">
              Our Purpose
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Vision Card */}
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-900 shadow-md">
              <div className="text-4xl mb-4">🎯</div>

              <h3 className="text-2xl font-bold text-blue-950">
                Our Vision
              </h3>

              <p className="text-gray-600 mt-4 leading-8">
               छात्रों को ज्ञान हासिल करने, सकारात्मक मूल्य विकसित करने और उज्जवल भविष्य की दिशा में काम करने के लिए प्रोत्साहित करना।
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-orange-50 p-8 rounded-2xl border-l-4 border-orange-500 shadow-md">
              <div className="text-4xl mb-4">🚀</div>

              <h3 className="text-2xl font-bold text-blue-950">
                Our Mission
              </h3>

              <p className="text-gray-600 mt-4 leading-8">
               सीखने, अनुशासन, जिम्मेदारी और छात्रों के समग्र विकास के महत्व को उजागर करने के लिए।
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-orange-500 font-bold uppercase tracking-widest">
              School Life
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
              Learning Beyond Books
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore important aspects of education and student development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl">📚</div>
              <h3 className="text-xl font-bold text-blue-950 mt-4">
             शिक्षा
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
               छात्रों के लिए सीखना और अकादमिक विकास।
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl">🤝</div>
              <h3 className="text-xl font-bold text-blue-950 mt-4">
            अनुशासन
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
               जिम्मेदारी और अच्छी आदतें विकसित करना।
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl">🏆</div>
              <h3 className="text-xl font-bold text-blue-950 mt-4">
               गतिविधियाँ
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
              खेल और अतिरिक्त पाठ्यक्रम के अवसर खोजें।
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl">🌟</div>
              <h3 className="text-xl font-bold text-blue-950 mt-4">
             विकास
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
            आत्मविश्वास और व्यक्तिगत विकास को प्रोत्साहित करना।
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-orange-500 font-bold uppercase tracking-widest">
            Academic Levels
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
       कक्षा 6 से 12 तक
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="p-7 rounded-2xl bg-blue-50 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-950">
          कक्षा 6 से 8 तक
              </h3>
              <p className="text-gray-600 mt-3">
                Middle School
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-orange-50 border border-orange-100">
              <h3 className="text-2xl font-bold text-blue-950">
                कक्षा 9 से 10 तक
              </h3>
              <p className="text-gray-600 mt-3">
                Secondary School
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-green-50 border border-green-100">
              <h3 className="text-2xl font-bold text-blue-950">
             कक्षा 11 से 12 तक
              </h3>
              <p className="text-gray-600 mt-3">
                Senior Secondary
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-950 py-14 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold">
            Discover Our Academic Programmes
          </h2>

          <p className="text-blue-100 mt-4 leading-7">
          क्लास 6 से क्लास 12 तक के छात्रों के लिए उपलब्ध अकादमिक जानकारी एक्सप्लोर करें।
          </p>

          <a
            href="/academics"
            className="inline-block mt-7 bg-orange-500 px-7 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
          >
            View Academics
          </a>

        </div>
      </section>
      <Footer/>
    </>
  )
}
export default About
