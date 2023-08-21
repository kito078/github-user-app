import React from "react";
import MealResults from "../components/Meals/MealResults";

function About() {
  return (
    <div className="container-one ">
      <div className=" mx-8">
        <h3 className="text-3xl md:text-5xl text-gray-200 mt-32 font-bold  ">
          About Us
        </h3>
        <p className="text-gray-500 mb-8 mt-8 text-xl md:text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim velit
          dicta officiis necessitatibus nemo aperiam maxime repudiandae sed
          tempora assumenda.
        </p>
        <h3 className="text-3xl md:text-5xl text-gray-200 mt-32 font-bold">
          MealDay <span className="text-orange-500">Documentation</span>
        </h3>
        <p className="text-gray-500 mb-8 mt-8 text-xl md:text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim velit
          dicta officiis necessitatibus nemo aperiam maxime repudiandae sed
          tempora assumenda.
        </p>
      </div>
    </div>
  );
}

export default About;
