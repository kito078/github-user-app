import React, { useEffect } from "react";
import { useContext } from "react";
import MealContext from "../context/MealContext";
import { useParams } from "react-router-dom";

function Meal() {
  const { meal, getMeal } = useContext(MealContext);

  const params = useParams();

  useEffect(() => {
    getMeal(params.idMeal);
  }, []);

  console.log(meal);
  return (
    <div>
      <h1>meal</h1>
    </div>
  );
}

export default Meal;
