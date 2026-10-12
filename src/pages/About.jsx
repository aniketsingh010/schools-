
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
            Swadesh Saraswati Vidhya Mandir
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-3">
            Inter College, Maharajganj, Raebareli
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-200 leading-8">
            Welcome to Swadesh Saraswati Vidhya Mandir Inter College.
            Our website provides information about our school, academic
            programmes, facilities and educational activities for
            students from Class 6 to Class 12.
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
              Welcome to Our School
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
              Building Knowledge, Values and Confidence
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              Swadesh Saraswati Vidhya Mandir Inter College,
              Maharajganj, Raebareli, is the school featured on
              this website. Explore information about its academic
              programmes for Classes 6 to 12 and discover the
              different aspects of school life.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              Education helps students develop knowledge, discipline,
              confidence and a sense of responsibility. Our website
              aims to make school information easy for parents,
              students and visitors to explore.
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
                To encourage students to pursue knowledge, develop
                positive values and work towards a bright future.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-orange-50 p-8 rounded-2xl border-l-4 border-orange-500 shadow-md">
              <div className="text-4xl mb-4">🚀</div>

              <h3 className="text-2xl font-bold text-blue-950">
                Our Mission
              </h3>

              <p className="text-gray-600 mt-4 leading-8">
                To highlight the importance of learning, discipline,
                responsibility and the overall development of students.
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
                Education
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
                Learning and academic development for students.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl">🤝</div>
              <h3 className="text-xl font-bold text-blue-950 mt-4">
                Discipline
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
                Developing responsibility and good habits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl">🏆</div>
              <h3 className="text-xl font-bold text-blue-950 mt-4">
                Activities
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
                Discover sports and extracurricular opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl">🌟</div>
              <h3 className="text-xl font-bold text-blue-950 mt-4">
                Development
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
                Encouraging confidence and personal growth.
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
            Classes from 6 to 12
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="p-7 rounded-2xl bg-blue-50 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-950">
                Classes 6–8
              </h3>
              <p className="text-gray-600 mt-3">
                Middle School
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-orange-50 border border-orange-100">
              <h3 className="text-2xl font-bold text-blue-950">
                Classes 9–10
              </h3>
              <p className="text-gray-600 mt-3">
                Secondary School
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-green-50 border border-green-100">
              <h3 className="text-2xl font-bold text-blue-950">
                Classes 11–12
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
            Explore the academic information available for students
            from Class 6 to Class 12.
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
