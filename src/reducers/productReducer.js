export const initialState = [];

export const productReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((e, index) => index !== action.payload);

    default:
      return initialState;
  }
};
