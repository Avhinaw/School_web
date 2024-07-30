import React from "react";

const Students = () => {
    return(
        <div className="bg-indigo-200 p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Student Life at Springdale</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Extracurricular Activities</h2>
          <p className="text-lg text-gray-700">
            Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Clubs and Societies</h2>
          <p className="text-lg text-gray-700">
            Literary Society, Environmental Club, Astronomy Club, Coding Club
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Achievements</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">John Smith - National Level Math Olympiad Winner</li>
            <li className="mb-2">Sarah Lee - Gold Medalist in State Swimming Championship</li>
            <li className="mb-2">Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Student Council</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <p className="text-lg font-medium text-gray-700"><strong>President:</strong> Amy Parker, Grade 12</p>
            <p className="text-lg font-medium text-gray-700"><strong>Vice President:</strong> Rajiv Mehta, Grade 11</p>
            <p className="text-lg font-medium text-gray-700"><strong>Secretary:</strong> Lisa Wong, Grade 10</p>
          </div>
        </section>
      </div>
    </div>
    )
}

export default Students;