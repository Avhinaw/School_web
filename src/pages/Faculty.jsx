import React from "react";

const Faculty = () => {
    const facultyMembers = [
        {
          name: 'John Doe',
          position: 'Principal',
          qualifications: 'M.Ed',
          experience: '20 years of experience in educational administration',
        },
        {
          name: 'Jane Smith',
          position: 'Vice Principal',
          qualifications: 'M.Sc. in Physics',
          experience: '15 years of teaching experience',
        },
        {
          name: 'Emily Johnson',
          position: 'English Teacher',
          qualifications: 'M.A. in English',
          experience: '10 years of teaching experience',
        },
        {
          name: 'Michael Brown',
          position: 'Mathematics Teacher',
          qualifications: 'M.Sc. in Mathematics',
          experience: '8 years of teaching experience',
        },
        {
          name: 'Sophia Davis',
          position: 'Science Teacher',
          qualifications: 'M.Sc. in Chemistry',
          experience: '12 years of teaching experience',
        },
        {
          name: 'David Wilson',
          position: 'Computer Science Teacher',
          qualifications: 'B.Tech in Computer Science',
          experience: '5 years of teaching experience',
        },
      ];
    return(
<div className="bg-indigo-200 p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Faculty</h1>

        <div className="space-y-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-700">{member.name}</h2>
              <p className="text-lg font-medium text-gray-600">{member.position}</p>
              <p className="text-md text-gray-700"><strong>Qualifications:</strong> {member.qualifications}</p>
              <p className="text-md text-gray-700"><strong>Experience:</strong> {member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Faculty;