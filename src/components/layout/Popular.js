import React from "react";
import { Link } from "react-router-dom";

function Popular() {
  return (
    <div className="bg-decoration-zinc-900">
      <h3 className="text-4xl md:text-6xl text-gray-300 text-center font-bold mb-3 leading-normal">
        Unreal places to discover
      </h3>
      <span className="text-xl ml-1 text-gray-400">Wednesday, Sep 21</span>
      {/* <div className="mt-9 flex ">
        <Link
          to="/"
          className="btn btn-ghost text-1xl bg-gray-700 hover:bg-gray-600 py-3 text-gray-300 rounded-[32px] px-6 mr-2"
        >
          Good Reviews{" "}
        </Link>
        <Link
          to="/"
          className="btn btn-ghost bg-orange-800 py-3 hover:bg-orange-900 text-gray-300 rounded-[32px] px-8"
        >
          Meals{" "}
        </Link>
      </div> */}
    </div>
  );
}

export default Popular;
