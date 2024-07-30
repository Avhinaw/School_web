import React from "react";

const Admissions = () => {
    return (
    <div className="bg-indigo-200 p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Admissions</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Process</h2>
          <p className="text-lg text-gray-700">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Criteria</h2>
          <p className="text-lg text-gray-700">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Important Dates</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">Admission Form Availability: March 1st</li>
            <li className="mb-2">Last Date for Submission: March 31st</li>
            <li className="mb-2">Entrance Test: April 15th</li>
            <li className="mb-2">Announcement of Results: April 30th</li>
          </ul>
        </section>
      </div>
    </div>
)
}

export default Admissions;