import React, { useContext, useState } from "react";
import MealContext from "../../context/MealContext";
import { useNavigate } from "react-router-dom";

function Dropback() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const { fetchMeal } = useContext(MealContext);

  const options = ["rice", "beef", "chicken"];

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    fetchMeal(text);
    navigate("/");
  };

  return (
    <form onSubmit={onSubmitHandler} className="w-96">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only text-white"
      >
        Search Meals
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 ml-4 text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <select
          onChange={onChangeHandler}
          value={text}
          id="default-search"
          className="block w-full ml-2 p-3 pl-10 text-sm border rounded-[21px] bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500"
          required
        >
          <option value="">Select an option...</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="hidden text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-sky-600 hover:bg-sky-700 focus:ring-sky-800"
        >
          go
        </button>
      </div>
    </form>
  );
}

export default Dropback;

// import React, { useContext, useEffect, useState } from "react";
// import MealContext from "../../context/MealContext";

// function Dropback() {
//   const [text, setText] = useState("chicken");
//   const { fetchMeal } = useContext(MealContext);
//   // console.log(text);
//   const options = ["rice", "beef", "chicken"];

//   const handleDropdownChange = (text) => {
//     setText(text);
//     fetchMeal();
//   };

//   return (
//     <div>
//       <div className="w-full py-3 text-center ">
//         <a
//           href="#about"
//           id="dropdownDefaultButton"
//           data-dropdown-toggle="dropdown"
//           className="block hover:text-softRed flex align-center justify-items-center"
//         >
//           <span className="text-gray-400">Category</span>{" "}
//           <svg
//             className="w-4 h-4 ml-2.5 mt-1 text-gray-400"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 1 4 4 4-4"
//             />
//           </svg>
//         </a>
//       </div>

//       {/* Dropdown menu  */}
//       <div
//         id="dropdown"
//         className="z-10 absolute bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44"
//       >
//         <ul
//           className="py-2 text-sm text-gray-200"
//           aria-labelledby="dropdownDefaultButton"
//         >
//           {options.map((option, index) => (
//             <li key={index}>
//               <a
//                 href="#"
//                 className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
//                 onClick={() => handleDropdownChange(option)}
//               >
//                 {option}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Dropback;

// import React, { useState } from "react";

// function Dropback() {
//   const [selectedOption, setSelectedOption] = useState("");

//   const options = ["rice", "meet", "beef", "chicken"];

//   const handleDropdownChange = (e) => {
//     console.log(e.target.value);
//   };

//   return (
//     <div>
//       <div onChange={handleDropdownChange} className="w-full py-3 text-center ">
//         <a
//           href="#about"
//           id="dropdownDefaultButton"
//           data-dropdown-toggle="dropdown"
//           className="block hover:text-softRed flex align-center justify-items-center"
//         >
//           <span className="text-gray-400">Category</span>{" "}
//           <svg
//             class="w-4 h-4 ml-2.5 mt-1 text-gray-400"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="m1 1 4 4 4-4"
//             />
//           </svg>
//         </a>
//       </div>

//       {/* Dropdown menu  */}
//       <div
//         id="dropdown"
//         class="z-10 absolute bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44 "
//       >
//         <ul
//           class="py-2 text-sm text-gray-200"
//           aria-labelledby="dropdownDefaultButton"
//         >
//           {options.map((option, index) => (
//             <li>
//               <a
//                 key={index}
//                 href="#"
//                 class="block px-4 py-2  hover:bg-gray-600 hover:text-white"
//               >
//                 {option}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Dropback;
