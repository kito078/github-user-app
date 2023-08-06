import React, { useEffect, useState } from "react";

import axios from "axios";
import Popular from "../layout/Popular";
import MealItem from "./MealItem";

function MealResults() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
      );
      setMeals(response.data.meals);
    } catch (error) {
      console.error("error in fetching ", error.message);
    }
  };
  return (
    <div className="mx-4 bg-black-600">
      <Popular />
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default MealResults;
