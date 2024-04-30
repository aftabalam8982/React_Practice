export const incrementAction = (payload) => {
  return { type: "increment", payload };
};
export const fetchUser = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await res.json();
    console.log(userData);
    dispatch({ type: "users", payload: userData });
  };
};
export const decrementAction = (payload) => {
  return { type: "decrement", payload };
};
