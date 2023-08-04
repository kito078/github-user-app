import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Food from "../../images/food.jpg";
import axios from "axios";
import Popular from "../layout/Popular";

function MealResults() {
  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
      );
      console.log(response.data);
    } catch (error) {
      console.error("error in fetching ", error.message);
    }
  };
  return (
    <div className="mx-4 ">
      <Popular />
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

export default MealResults;
