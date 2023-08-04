import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Popular from "../layout/Popular";
import MealItem from "./MealItem";

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
      <MealItem />
    </div>
  );
}

export default MealResults;
