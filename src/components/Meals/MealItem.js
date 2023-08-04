import React from "react";
import Food from "../../images/food.jpg";
import { Link } from "react-router-dom";

function MealItem() {
  return (
    <div>
      <div className="mt-6 h-96 ">
        <img
          className="w-full h-96 object-cover rounded-[32px] "
          src={Food}
          alt=""
        />
      </div>
    </div>
  );
}

export default MealItem;
