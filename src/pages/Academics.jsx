import React from "react";
import Navbar from "../components/Navbar";

const Academics = () => {
    return(
        <div className="bg-gray-100 p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Academics</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Curriculum</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Primary (Grades 1-5)</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Secondary (Grades 6-10)</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Physical Education</li>
              <li>Art</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Senior Secondary (Grades 11-12)</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-1 text-blue-500">Science Stream</h4>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1 text-blue-500">Commerce Stream</h4>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Teaching Methodologies</h2>
          <p className="text-lg text-gray-700">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Educational Resources</h2>
          <p className="text-lg text-gray-700">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
        </section>
      </div>
    </div>
    )
}

export default Academics;