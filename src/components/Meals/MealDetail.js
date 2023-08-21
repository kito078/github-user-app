import React from "react";

function MealDetail({ item }) {
  const {
    strCategory,
    strInstructions,
    strMealThumb,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient12,
    strIngredient11,
  } = item;
  console.log(strYoutube);
  return (
    <div className="container-one ">
      <div className="flex flex-col mx-6 md:flex-row  gap-20 justify-between">
        <div>
          <h3 className="text-3xl md:text-5xl text-gray-200 font-bold mb-6">
            <span className="whitespace-nowrap">Delicious {strCategory}</span>{" "}
            Recipes
          </h3>
          <img className="w-96s rounded-xl" src={strMealThumb} alt="" />
        </div>
        <div className="">
          <h3 className="text-3xl md:text-5xl md:mt-24 font-bold text-gray-200 ">
            <span className="text-orange-500">Meal </span>Description
          </h3>
          <p className="text-gray-500 mt-4 text-xl md:text-xl ">
            {strInstructions} etc.
          </p>
          <div>
            <h3 className="text-3xl md:text-3xl text-gray-200 font-bold mb-6 md:mt-20">
              Delicious {strCategory} Ingredients
            </h3>
            <p className="text-gray-500 mt-4 text-xl md:text-xl ">
              {strIngredient1}, {strIngredient2}, {strIngredient3},
              {strIngredient4}, {strIngredient5}, {strIngredient6},
              {strIngredient7}, {strIngredient8}, {strIngredient9},
              {strIngredient10}, {strIngredient11}, {strIngredient12},
            </p>
          </div>
          <div className="flex justify-center items-center h-screen">
            <iframe
              className="w-full h-3/4"
              src={`https://www.youtube.com/embed/${strYoutube}`} // Use the video ID
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealDetail;
