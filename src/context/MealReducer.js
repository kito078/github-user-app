const mealReducer = (state, action) => {
  switch (action.type) {
    case "GET_MEALS":
      return {
        ...state,
        meals: action.payload,
        loading: false,
      };
    case "GET_MEAL":
      return {
        ...state,
        meal: action.payload,
      };
    case "SET_LOADNG":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default mealReducer;
