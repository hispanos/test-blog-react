export const initialState = {
  count: 5,
};

export const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    default:
      return initialState;
  }
};
