import React from "react";
import Food from "../../images/food.jpg";

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
