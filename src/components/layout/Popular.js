import React from "react";
import { Link } from "react-router-dom";
import SearchMeal from "../Meals/SearchMeal";

function Popular() {
  return (
    <div className="bg-decoration-zinc-900 my-28  text-center flex flex-col items-center justify-center">
      <h3 className="text-4xl mb-8 md:text-7xl text-gray-300 text-center font-bold mb-3 leading-normal">
        Unreal places to discover
      </h3>

      <p className="text-gray-500 mb-8 text-xl md:text-2xl">
        Find great places to stay, eat, shop, or visit from local experts.
      </p>
      <SearchMeal />
    </div>
  );
}

export default Popular;

{
  /* <div className="mt-9 flex ">
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
      </div> */
}
