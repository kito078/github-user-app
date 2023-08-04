import React from "react";
import Food from "../../images/food.jpg";
import { Link } from "react-router-dom";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaCreativeCommonsPdAlt } from "react-icons/fa";

function MealItem({ meal }) {
  console.log(meal);
  const { strMeal, strMealThumb } = meal;
  return (
    <div>
      <div className="mt-6 h-96 ">
        <img
          className="w-full h-96 object-cover rounded-[32px] "
          src={strMealThumb}
          alt=""
        />
        <div className="flex justify-items-center items-center">
          <div>
            <h3 className="text-2xl font-bold mb-3">Clumsies Bar</h3>
            <div className="flex justify-items-center items-center">
              <span>
                <FaCreativeCommonsPdAlt className="text-lg" />
              </span>
              <span className="ml-2">8 Awe SW Colgory</span>
            </div>
          </div>
          <div>
            <AiTwotoneHeart className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealItem;
