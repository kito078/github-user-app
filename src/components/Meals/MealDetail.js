import React from "react";

function MealDetail({ item }) {
  const { strCategory, strMealThumb } = item;
  return (
    <div className="container-one">
      <div className="flex flex-col md:flex-row  gap-20 justify-between">
        <div>
          <h3 className="text-3xl md:text-5xl text-gray-200 font-bold mb-6">
            Next.js Enterprise Boilerplate
          </h3>
          <img className="w-96 rounded-xl" src={strMealThumb} alt="" />
        </div>
        <div className="">
          <h3 className="text-3xl md:text-5xl md:mt-20 font-bold text-gray-200 text-orange-500">
            {strCategory}
          </h3>
          <p className="text-gray-500 mt-4 text-xl md:text-xl ">
            Enterprise-grade Next.js boilerplate built with Tailwind CSS, Radix
            UI, TypeScript, ESLint, Prettier, Jest, Playwright, Storybook, etc.
          </p>
        </div>
      </div>
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
