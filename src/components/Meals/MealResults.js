import React, { useEffect, useState } from "react";

import axios from "axios";
import Popular from "../layout/Popular";
import MealItem from "./MealItem";

function MealResults() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);


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
