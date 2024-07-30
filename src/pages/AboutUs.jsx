import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
    return(
        <div className="bg-indigo-200 p-24">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
      <div className="flex w-full">
        <div>
          <h2 className="font-bold text-2xl text-center">Our Vision</h2>
          <p className="text-lg w-96 text-center">To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        </div>
        <div className="h-56">
          <img className="h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChrLO7J1EB0KQkqWSvmyYOSCiBYdU4XxIWg&s" alt="" />
        </div>
      </div>
        <h1 className="text-5xl h-48 bg-[#213e8c] font-bold flex items-center justify-center mb-10 text-white">Finnish Education</h1>

        <section className="mb-8 text-center">
          <p className="text-lg text-gray-700">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
          </p>

          <p className="text-lg text-gray-700">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
          </p>
  


          <p className="text-lg text-gray-700">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>


          <p className="text-lg text-gray-700">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Infrastructure and Facilities</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">State-of-the-art science and computer labs</li>
            <li className="mb-2">Spacious and well-equipped classrooms</li>
            <li className="mb-2">Library with a vast collection of books and digital resources</li>
            <li className="mb-2">Sports facilities including a playground, gymnasium, and swimming pool</li>
            <li className="mb-2">Art and music studios</li>
            <li className="mb-2">Dedicated areas for extracurricular activities</li>
            <li className="mb-2">On-campus medical facilities</li>
            <li className="mb-2">Modern cafeteria with healthy meal options</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Core Values</h2>
          <p className="text-lg text-gray-700">
            Our school is built on the core values of respect, responsibility, integrity, and perseverance. We strive to instill these values in our students, helping them grow into well-rounded individuals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Community Engagement</h2>
          <p className="text-lg text-gray-700">
            Springdale Public School actively participates in community service projects, encouraging students to give back to society and develop a sense of social responsibility.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Awards & Achievements</h2>
          <p className="text-lg text-gray-700">
            Over the years, our students and faculty have received numerous awards and recognitions for their outstanding achievements in academics, sports, and extracurricular activities.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Testimonials</h2>
          <blockquote className="border-l-4 border-blue-500 italic text-lg text-gray-700 pl-4">
            "Springdale Public School has been instrumental in shaping my child's future. The teachers are dedicated and the facilities are top-notch."
            <span className="block mt-2 text-right">- Parent</span>
          </blockquote>
        </section>

        <div className="mt-12 text-center">
          <NavLink to="/contact-us" className="inline-block bg-blue-700 text-white font-bold py-2 px-6 rounded hover:bg-blue-800">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
    )
}

export default AboutUs;