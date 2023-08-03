// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
//       <div className="container mx-auto">
//         <div className="flex-none px-2 mx-2">
//           {/* <FaGithub className="inline pr-2 text-3xl" /> */}
//           <Link to="/" className="text-lg font-bold align-middle">
//             GithubUser
//           </Link>
//         </div>

//         <div className="flex-1 px-2 mx-2">
//           <div className="flex justify-end">
//             <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
//               Home
//             </Link>
//             <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
//               About
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

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
    <nav className="mb-12 shadow-lg bg-neutral relative mx-auto p-2 px-6">
      <div className="container-one">
        {/* flex container for Nav Items */}
        <div className="flex items-center justify-between space-x-20 my-2">
          {/* logo */}

          <div className="flex-none  hidden lg:block px-2 mx-2">
            <DiGrails className="inline pr-2 text-4xl" />
            <Link to="/" className="text-lg font-bold align-middle">
              MealDay
            </Link>
          </div>
          {/* Search */}
          <SearchMeal />
          {/* Menu Items */}
          <div className="hidden items-center space-x-10 uppercase text-grayisBlue md:flex">
            <Link
              to="/about"
              className="tracking-widest hover:text-softRed text-1xl tex-center"
            >
              <Dropback />
            </Link>
            <Link
              to="/"
              className="tracking-widest hover:text-softRed text-1xl"
            >
              Home |
            </Link>
            <Link
              to="/about"
              className="tracking-widest hover:text-softRed text-1xl"
            >
              About |
            </Link>
          </div>
          {/* hamburger Button */}
          <button
            id="menu-btn"
            className={`${
              isOpen ? "open" : "block"
            } z-30  md:hidden focus:outline-none hamburger`}
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
          } fixed inset-0 z-20 md:hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
        >
          <div className="w-full py-3 text-center">
            <a href="#home" className="block hover:text-softRed">
              Home
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#about" className="block hover:text-softRed">
              About
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <Dropback />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
