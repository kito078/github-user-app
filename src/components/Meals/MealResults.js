import React, { useContext, useEffect, useState } from "react";
// import { PuffLoader } from "react-spinners";
import Popular from "../layout/Popular";
import MealItem from "./MealItem";
import MealContext from "../../context/MealContext";

function MealResults() {
  const { meals, loading, fetchMeal } = useContext(MealContext);

  if (loading) {
    return <h3 className="text-8xl">loading...</h3>;
  } else {
    return (
      <div className="mx-4 bg-black-600">
        <Popular />
        <div className="grid grid-col sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {meals &&
            meals.map((meal) => <MealItem key={meal.idMeal} meal={meal} />)}
        </div>
      </div>
    );
  }
}

export default MealResults;

{
  /* <PuffLoader color="red" size={70} /> */
}
