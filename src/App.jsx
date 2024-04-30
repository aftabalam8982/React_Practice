import "./App.css";
import { createStore } from "redux";
import Parent3 from "./contextAPIs/Parent3";
import ComponentC from "./custom-hooks/ComponentC";
import ComponentD from "./custom-hooks/ComponentD";
import Parent2 from "./hoc/Parent2";
import Parent from "./renderProps/Parent";
import { reducer } from "./redux-store/reducer";
import Counter from "./counter/Counter";
import Counter2 from "./counter/Counter2";

function App() {
  return (
    <>
      {/* <Parent /> */}
      {/* <Parent2 /> */}
      {/* <ComponentC />
      <ComponentD /> */}
      {/* <Parent3 /> */}
      {/* <CounterComponent /> */}
      <Counter />
      <Counter2 />
    </>
  );
}

export default App;
