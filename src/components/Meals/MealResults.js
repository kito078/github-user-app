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
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
      );
      setMeals(response.data.meals);
    } catch (error) {
      console.error("error in fetching ", error.message);
    }
  };
  return (
    <div className="mx-4 bg-black-600">
      <Popular />
      <div className="grid grid-col sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default MealResults;
