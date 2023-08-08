import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container-one">
      <div className="hero">
        <div className="max-w-lg">
          <h3 className="text-white text-8xl font-bold mb-8">Oops!</h3>
          <p className="text-5xl mb-8 text-white">404 - Page notfound</p>
          <Link
            to="/"
            class="rounded-full text-white bg-gray-500 py-3 px-7 font-bold"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
