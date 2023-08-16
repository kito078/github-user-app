import React from "react";

function Dropback() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <h2>Dropdown Menu</h2>
      <select onChange={handleDropdownChange} value={selectedOption}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default Dropback;

// import React from "react";

// function Dropback() {
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
//           <li>
//             <a
//               href="#"
//               class="block px-4 py-2  hover:bg-gray-600 hover:text-white"
//             >
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="block px-4 py-2  hover:bg-gray-600 hover:text-white"
//             >
//               Settings
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="block px-4 py-2 hover:bg-gray-600 hover:text-white"
//             >
//               Earnings
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="block px-4 py-2  hover:bg-gray-600 hover:text-white"
//             >
//               Sign out
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Dropback;
