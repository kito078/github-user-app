import { createContext, useReducer } from "react";
import mealReducer from "./MealReducer";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const initialState = {
    meals: [],
  };

  const [state, dispatch] = useReducer(mealReducer, initialState);

  //fetch meal
  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    try {
      const response = await axios.get(`${env.process}/search.php?s=chicken`);
      //setMeals(response.data.meals);
      const items = response.data.meals;
      dispatch({
        type: "GET_MEALS",
        payload: items,
      });
    } catch (error) {
      console.error("error in fetching ", error.message);
    }
  };

  return <MealContext>{children}</MealContext>;
};

export default MealContext;
