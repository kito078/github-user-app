import React from "react";

function MealDetail({ item }) {
  const { strCategory, strMealThumb } = item;
  return (
    <div>
      <h1 className="text-8xl">{strCategory}</h1>
      <img src={strMealThumb} alt="" />
      <div className="flex justify-center items-center h-screen">
        <iframe
          className="w-3/4 h-3/4"
          src="https://www.youtube.com/embed/kqEfk801E94"
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default MealDetail;
