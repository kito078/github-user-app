import React from "react";

function MealDetail({ item }) {
  const { strCategory, strMealThumb } = item;
  return (
    <div className="container-one">
      <div className="flex flex-col md:flex-row  gap-20 justify-between">
        <div>
          <h3 className="text-3xl md:text-5xl text-gray-200 font-bold mb-6">
            <span className="whitespace-nowrap">Next.js Enterprise</span>{" "}
            Boilerplate
          </h3>
          <img className="w-96 rounded-xl" src={strMealThumb} alt="" />
        </div>
        <div className="">
          <h3 className="text-3xl md:text-5xl md:mt-24 font-bold text-gray-200 ">
            <span className="text-orange-500">{strCategory} </span>Enterprise
          </h3>
          <p className="text-gray-500 mt-4 text-xl md:text-xl ">
            Enterprise-grade Next.js boilerplate built with Tailwind CSS, Radix
            UI, TypeScript, ESLint, Prettier, Jest, Playwright, Storybook, etc.
          </p>
          <div>
            <h3 className="text-3xl md:text-3xl text-gray-200 font-bold mb-6 md:mt-20">
              Next.js Enterprise Boilerplate
            </h3>
            <p className="text-gray-500 mt-4 text-xl md:text-xl ">
              Welcome to the Next.js Enterprise Boilerplate, an open-source
              template for enterprise projects! It's loaded with features
              that'll help you build a high-performance, maintainable, and
              enjoyable app. We've done all the heavy lifting for you, so sit
              back, relax, and get ready to
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center h-screen">
              <iframe
                className="w-full h-3/4"
                src="https://www.youtube.com/embed/kqEfk801E94"
                title="YouTube Video"
                allowFullScreen
              ></iframe>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealDetail;
