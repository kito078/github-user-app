import React from "react";

function MealDetail({ item }) {
  const { strCategory, strMealThumb } = item;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-6">{strCategory}</h1>
      <img
        src={strMealThumb}
        alt=""
        className="rounded-lg shadow-md w-80 h-80 object-cover mb-6"
      />
      <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-md overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/kqEfk801E94"
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default MealDetail;

// import React from "react";

// function MealDetail({ item }) {
//   const { strCategory, strMealThumb } = item;
//   return (
//     <div>
//       <h1 className="text-8xl">{strCategory}</h1>
//       <img src={strMealThumb} alt="" />
//       <div className="flex justify-center items-center h-screen">
//         <iframe
//           className="w-3/4 h-3/4"
//           src="https://www.youtube.com/embed/kqEfk801E94"
//           title="YouTube Video"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default MealDetail;
