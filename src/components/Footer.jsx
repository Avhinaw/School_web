import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-wrap justify-evenly items-center">
        <div className="w-full md:w-auto mb-4">
          <h2 className="text-lg font-bold mb-3">Springdale Public School</h2>
          <div className="flex">
          <div className="grid">
            <NavLink exact to="/" activeClassName="font-bold underline" className="hover:underline py-2 md:py-0 md:px-4">Home</NavLink>
            <NavLink to="/about-us" activeClassName="font-bold underline" className="hover:underline py-2 md:py-0 md:px-4">About Us</NavLink>
            <NavLink to="/academics" activeClassName="font-bold underline" className="hover:underline py-2 md:py-0 md:px-4">Academics</NavLink>
            <NavLink to="/admissions" activeClassName="font-bold underline" className="hover:underline py-2 md:py-0 md:px-4">Admissions</NavLink>
            </div>
            <div className="grid">
            <NavLink to="/faculty" activeClassName="font-bold underline" className="hover:underline py-2 md:py-0 md:px-4">Faculty</NavLink>
            <NavLink to="/students" activeClassName="font-bold underline" className="hover:underline py-2 md:py-0 md:px-4">Students</NavLink>
            <NavLink to="/gallery" activeClassName="font-bold underline" className="hover:underline py-2 md:py-0 md:px-4">Gallery</NavLink>
            <NavLink to="/contact-us" activeClassName="font-bold underline" className="hover:underline py-2 md:py-0 md:px-4">Contact Us</NavLink>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold mb-3">Contact Us</h2>
          <p>123 Main Street, Springfield, USA</p>
          <p>Email: info@springdale.edu</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="w-full md:w-auto text-center md:text-right">
          <h2 className="text-lg font-bold text-left">Follow Us</h2>
          <div className="flex-col justify-center mb-3 md:justify-end">
            <a href="https://facebook.com" className="ml-1 hover:text-gray-400">Facebook</a>
            <a href="https://twitter.com" className="mx-2 hover:text-gray-400">Twitter</a>
            <a href="https://instagram.com" className="mx-2 hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </div>
    </footer>


</>
    )
}

export default Footer;