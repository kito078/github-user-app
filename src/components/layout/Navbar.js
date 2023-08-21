import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchMeal from "../Meals/SearchMeal";
import { DiGrails } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import Dropback from "./Dropback";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="mb-12 shadow-lg  z-10 relative  mx-auto p-2 px-6">
      <div className="container-one bg-black fixed top-0 left-4 right-4">
        {/* flex container for Nav Items */}
        <div className="flex items-center py-6  justify-between space-x-20 my-2">
          {/* logo */}

          <div className="flex-none lg:block px-2 mx-2 ">
            <DiGrails className="inline pr-2 text-4xl text-orange-500" />
            <Link to="/" className="text-lg text-white font-bold align-middle">
              MealDay
            </Link>
          </div>
          {/* Search */}

          {/* Menu Items */}
          <div
            className="hidden items-center space-x-10 
          uppercase  md:flex"
          >
            <Link
              to="/"
              className="tracking-widest  hover:text-softRed text-sm tex-center"
            >
              <Dropback />
            </Link>
            <Link
              to="/"
              className="tracking-widest text-white hover:text-softRed text-sm"
            >
              Home |
            </Link>
            <Link
              to="/about"
              className="tracking-widest text-white hover:text-softRed text-sm"
            >
              About |
            </Link>
          </div>
          {/* hamburger Button */}
          <button
            id="menu-btn"
            className={`${
              isOpen ? "open" : "block "
            } z-30  md:hidden focus:outline-none  hamburger`}
            onClick={toggleHandler}
          >
            {/* humburger lines */}
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          id="menu"
          className={`${
            isOpen ? "flex" : "hidden"
          } fixed inset-0 z-20 text-sm md:hidden mx-auto flex-col justify-items-center
          items-center self-end w-full h-full m-h-screen px-6
           py-1 pt-24 pb-4 tracking-widest text-white uppercase bg-gray-800
           divide-y divide-gray-500 opacity-90 `}
        >
          <div className="w-full py-3 text-center">
            <a href="#home" className="block text-sm text-white text-bold">
              Home
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#about" className="block text-sm text-bold text-white ">
              About
            </a>
          </div>
          <div className="w-full py-3 text-white text-bold text-sm text-center">
            <Dropback />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
