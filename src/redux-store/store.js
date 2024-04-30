import { reducer } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const middlewareEnhancer = applyMiddleware(thunk);

export const store = createStore(reducer, middlewareEnhancer);
store.subscribe(() => {
  console.log("state:", store.getState());
});
