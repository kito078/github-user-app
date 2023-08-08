import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container-one ">
      <div className="hero flex flex-col items-center justify-items-center">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h3 className="text-6xl md:text-8xl text-gray-400 font-bold mb-8 mt-7">
              Oops!
            </h3>
            <p className="text-3xl md:text-5xl mb-16 text-gray-400 mx-2">
              404 - Page notfound
            </p>
            <Link
              to="/"
              class="rounded-full  text-white bg-gray-700 hover:bg-gray-600 py-3 px-7 font-bold"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
