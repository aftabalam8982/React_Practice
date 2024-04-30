const initialState = {
  count: 0,
  users: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "users":
      return { ...state, users: action.payload };
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
