import React, { useContext, useEffect, useState } from "react";
import MealContext from "../../context/MealContext";

function Dropback() {
  const [text, setText] = useState("chicken");
  const [isOpen, setIsOpen] = useState(false);
  const { fetchMeal } = useContext(MealContext);
  // console.log(text);
  const options = ["breakfast", "pork", "cheese", "Vegetarian"];

  const handleDropdownChange = (text) => {
    setText(text);
    fetchMeal(text);
    setIsOpen(false);
  };

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleHandler} className="w-full py-3 text-center ">
        <a
          href="#about"
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="block hover:text-softRed flex align-center justify-items-center"
        >
          <span className="text-white textbold">Category</span>{" "}
          <svg
            className="w-4 h-4 ml-2.5 mt-1 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </a>
      </div>

      {/* Dropdown menu  */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10  absolute bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            className="py-2 text-sm font-semibold text-gray-200 "
            aria-labelledby="dropdownDefaultButton"
          >
            {options.map((option, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                  onClick={() => handleDropdownChange(option)}
                >
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropback;

//www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
