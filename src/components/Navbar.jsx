import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-[12vh] bg-black bg-opacity-50 text-white p-5 fixed w-full">
        <h1 className="font-bold text-2xl"><NavLink to='/'>Springdale Public School</NavLink></h1>
            <ul className="flex gap-7 text-lg font-semibold">
                <li>
                <NavLink to="/aboutus">About Us</NavLink>
                </li>
                <li><NavLink to="/academics">Academics</NavLink></li>
                <li><NavLink to="/admissions">Admissions</NavLink></li>
                <li><NavLink to="/faculty">Faculty</NavLink></li>
                <li><NavLink to="/Students">Students</NavLink></li>
                <li><NavLink to="/gallary">Gallary</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;