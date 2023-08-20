import React from "react";

function MealDetail({ item }) {
  const { strCategory, strMealThumb } = item;
  return (
    <div className="container-one">
      <img className="w-96 rounded-xl" src={strMealThumb} alt="" />
      <h1 className="text-6xl font-semibold text-gray-200">{strCategory}</h1>
    </div>
  );
}

export default MealDetail;

{
  /* <div className="flex justify-center items-center h-screen">
        <iframe
          className="w-3/4 h-3/4"
          src="https://www.youtube.com/embed/kqEfk801E94"
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div> */
}
