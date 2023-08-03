import React from "react";
import { Link } from "react-router-dom";
import Food from "../../images/food.jpg";

function MealResults() {
  return (
    <div className="mx-4 ">
      <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-normal">
        Unreal places to discover
      </h3>
      <span className="text-2xl ml-1">Wednesday, Sep 21</span>
      <div className="mt-8 flex">
        <Link
          to="/"
          className="btn btn-ghost text-1xl bg-gray-700 hover:bg-gray-600 rounded-[32px] px-6 mr-2"
        >
          Good Reviews{" "}
        </Link>
        <Link
          to="/"
          className="btn btn-ghost bg-orange-800 hover:bg-orange-900 rounded-[32px] px-8"
        >
          Meals{" "}
        </Link>
      </div>
      <div>
        <div class="group item w-96">
          {/* Desktop Image  */}
          <img
            src={strMealThumb}
            alt=""
            class="w-full h-80 object-cover duration-200 md:block group-hover:scale-110"
          />
          {/* Mobile Image  */}
          <img src={Food} alt="" class="w-full md:hidden" />
          {/* Item Gradient  */}
          <div class="item-gradient"></div>
          {/* Item Text  */}
          <h5>Night Arcade</h5>
        </div>
      </div>
    </div>
  );
}

export default MealResults;
