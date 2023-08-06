import { createContext, useReducer } from "react";
import mealReducer from "./MealReducer";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const initialState = {
    meals: [],
  };

  const [state, dispatch] = useReducer(mealReducer, initialState);
  return <MealContext>{children}</MealContext>;
};

export default MealContext;
