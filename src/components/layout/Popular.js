import React from "react";
import { Link } from "react-router-dom";
import SearchMeal from "../Meals/SearchMeal";

function Popular() {
  return (
    <div className="bg-decoration-zinc-900  my-24 md:my-28 md:mt-36  text-center flex flex-col items-center justify-items-center">
      <h3 className="text-5xl mb-8 md:text-7xl text-gray-300 text-center font-bold mb-3 leading-normal">
        Irresistible Meals on{" "}
        <span className="text-orange-500"> Sale Now!</span>
      </h3>

      <p className="text-gray-500 mb-8 text-xl md:text-2xl">
        Find great places to stay, eat, shop, or visit from local experts.
      </p>
      <SearchMeal />
    </div>
  );
}

export default Popular;
