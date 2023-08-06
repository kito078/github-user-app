import React from "react";
import Food from "../../images/food.jpg";
import { Link } from "react-router-dom";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaCreativeCommonsPdAlt } from "react-icons/fa";

function MealItem({ meal }) {
  console.log(meal);
  const { strMeal, strMealThumb } = meal;
  return (
    <div className="">
      <div className="mt-6 h-96 relative">
        <img
          className="w-full h-96 object-cover rounded-[32px]"
          src={strMealThumb}
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-76 p-3 mb-4 text-white">
          <h3 className="text-2xl font-bold mb-3 ">{strMeal}</h3>
          <div className="flex justify-items-center items-center">
            <span>
              <FaCreativeCommonsPdAlt className="text-lg" />
            </span>
            <span className="ml-2">8 Awe SW Colgory</span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 mb-4 p-3">
          <div className="w-10 h-16 bg-white rounded-[32px] flex items-center justify-center">
            <AiTwotoneHeart className="text-3xl text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealItem;
