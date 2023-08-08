const mealReducer = (state, action) => {
  switch (action.type) {
    case "GET_MEALS":
      return {
        ...state,
        meals: action.payload,
        loading: true,
      };
    case "SET_LOADNG":
      return {
        ...state,
        loading: true,
      };
    default:
      return { state };
  }
};

export default mealReducer;
