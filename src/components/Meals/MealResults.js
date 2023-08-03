import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Food from "../../images/food.jpg";

function MealResults() {
  useEffect(() => {
    fetchMeal();
  }, []);
  const fetchMeal = async () => {
    const response = await axios
      .get("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <div className="mx-4 ">
      <h3 className="text-4xl md:text-4xl font-bold mb-3 leading-normal">
        Unreal places to discover
      </h3>
      <span className="text-xl ml-1">Wednesday, Sep 21</span>
      <div className="mt-9 flex ">
        <Link
          to="/"
          className="btn btn-ghost text-1xl bg-gray-700 hover:bg-gray-600 rounded-[32px] px-6 mr-2"
        >
          Good Reviews{" "}
        </Link>
        <Link
          to="/"
          className="btn btn-ghost bg-orange-800 hover:bg-orange-900 rounded-[32px] px-8"
        >
          Meals{" "}
        </Link>
      </div>
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
