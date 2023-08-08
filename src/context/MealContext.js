import { createContext, useEffect, useReducer } from "react";
import mealReducer from "./MealReducer";
import axios from "axios";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const initialState = {
    meals: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(mealReducer, initialState);

  //fetch meal
  useEffect(() => {
    fetchMeal("chicken");
  }, []);

  const fetchMeal = async (text) => {
    try {
      setLoading();
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/search.php?s=${text}`
      );
      //setMeals(response.data.meals);
      const items = response.data.meals;
      //console.log(items);
      if (items === null) {
        window.location = "/notfound";
      } else {
        dispatch({
          type: "GET_MEALS",
          payload: items,
        });
      }
    } catch (error) {
      console.error("error in fetching ", error.message);
    }
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
  };

  return (
    <MealContext.Provider
      value={{ meals: state.meals, loading: state.loading, fetchMeal }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
