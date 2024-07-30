import React from "react";
import { Link } from "react-router-dom";
import { FaGoogleScholar } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { PiFlagBannerFoldFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
const HomePage = () => {
    const highlights = [
        {
          image: 'https://onlinefirstaid.com/wp-content/uploads/2019/06/school-sports-day-scaled.jpeg',
          title: 'Sports Day',
          description: 'An exciting day filled with various sports events.',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIFmmqxtDMBFGWISHWrEce5jg1VUJi7ThSA&s',
          title: 'Science Exhibition',
          description: 'Students presenting their innovative science projects.',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD776ywBI8gNqQkCu4QTQUz0v1_2W1NrsEgA&s',
          title: 'Cultural Fest',
          description: 'A celebration of culture and diversity through performances.',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkc2bioZOZgCFM4UrW-XwB1kqlSMLB7udJ5A&s',
            title: 'Quiz Competition',
            description: 'A Competition between students lorem ipsum is great and you are also',
          },
      ];
    return(
        <div className="bg-gray-100 p-6 pt-24 h-full">
        <div className="bg-sky-500 flex items-center justify-center text-white h-40 text-2xl font-bold">
            <h2>Fees for the Academic Year 2024 - 2025 has been updated</h2>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center gap-2 p-4">
            <h1 className="text-[#7f35b2] text-5xl font-bold pb-5">ADMISSIONS</h1>
            <h3 className="text-[#7f35b2] text-3xl font-bold">Academic Year</h3>
            <h3 className="text-[#7f35b2] text-3xl font-bold">2024 - 2025</h3>
            <button className="bg-[#ec5e87] text-lg text-white font-bold rounded-md px-20 py-3 hover:bg-yellow-500">APPLY</button>
        </div>
        <div className="grid grid-cols-5 gap-4 p-4">
    <div className="bg-[#e63888] h-72 w-72 flex flex-col justify-center items-center text-white">
        <FaGoogleScholar className="text-6xl mb-4" />
        <h3 className="text-2xl font-bold">500+</h3>
        <h3 className="text-xl">Students</h3>
    </div>
    <div className="bg-[#00ade6] h-72 w-72 flex flex-col justify-center items-center text-white">
        <GiTeacher className="text-6xl mb-4" />
        <h3 className="text-2xl font-bold">50+</h3>
        <h3 className="text-xl">Faculty</h3>
    </div>
    <div className="bg-[#fbd200] h-72 w-72 flex flex-col justify-center items-center text-white">
        <PiFlagBannerFoldFill className="text-6xl mb-4" />
        <h3 className="text-2xl font-bold">15+</h3>
        <h3 className="text-xl">Nationalities</h3>
    </div>
    <div className="bg-[#7f35b2] h-72 w-72 flex flex-col justify-center items-center text-white">
        <FaChalkboardTeacher className="text-6xl mb-4" />
        <h3 className="text-2xl font-bold">20+</h3>
        <h3 className="text-xl">Finnish Educators</h3>
    </div>
    <div className="bg-[#ace152] h-72 w-72 flex flex-col justify-center items-center text-white">
        <BsFillPeopleFill className="text-6xl mb-4" />
        <h3 className="text-2xl font-bold">1 : 16</h3>
        <h3 className="text-xl">Ratio of Educators Per Students</h3>
    </div>
</div>
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
            <h3 className="h-full p-4 text-[#333333] font-bold text-4xl text-center">Highlights</h3>
        <div className="flex items-center mb-10">
          <div>
            <p className="text-lg text-gray-700">Dedicated to providing quality education and holistic development since 1985.</p>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex overflow-x-scroll space-x-6 p-4 bg-blue-50 rounded-lg shadow-md">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex-none w-80">
                <img src={highlight.image} alt={highlight.title} className="w-full h-48 object-cover rounded-md mb-2" />
                <h2 className="text-xl font-semibold text-blue-700">{highlight.title}</h2>
                <p className="text-md text-gray-700">{highlight.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center p-10">
          <button className="bg-[#ec5e87] text-lg text-white font-bold rounded-md px-20 py-3 hover:bg-yellow-500">Students</button>
          </div>
          <div>
            <img src="https://static.wixstatic.com/media/511876_95b30cc545964c5ca2e740426982fa60~mv2_d_2544_1420_s_2.jpg/v1/fill/w_1899,h_820,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/511876_95b30cc545964c5ca2e740426982fa60~mv2_d_2544_1420_s_2.jpg" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link to="/academics" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md text-center hover:bg-blue-700">Academics</Link>
          <Link to="/admissions" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md text-center hover:bg-blue-700">Admissions</Link>
          <Link to="/faculty" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md text-center hover:bg-blue-700">Faculty</Link>
          <Link to="/gallary" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md text-center hover:bg-blue-700">Gallery</Link>
          <Link to="/contactus" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md text-center hover:bg-blue-700">Contact Us</Link>
        </div>
      </div>
    </div>
    )
}

export default HomePage;