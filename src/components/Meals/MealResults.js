import React from "react";
import { Link } from "react-router-dom";

function MealResults() {
  return (
    <div className="mx-4 ">
      <h3 className="text-4xl font-bold mb-3">Unreal places to discover</h3>
      <span className="text-2xl ml-1">Wednesday, Sep 21</span>
      <div>
        <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
          Good Reviews{" "}
        </Link>
      </div>
    </div>
  );
}

export default MealResults;
