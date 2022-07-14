// Reducer is how we dispatch the action to data layer and save in data layer

export const initialState = {
  pizza: { base: "", toppings: [] },
  modal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PIZZA":
      return { ...state, pizza: action.pizza };

    case "SET_MODAL":
      return { ...state, modal: action.modal };

    default:
      return { ...state };
  }
};

export default reducer;
