import React, { useEffect } from "react";
import MealResults from "../components/Meals/MealResults";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-one">
      <MealResults />
    </div>
  );
}

export default Home;
