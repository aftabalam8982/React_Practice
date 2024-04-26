import "./App.css";
import Parent3 from "./contextAPIs/Parent3";
import ComponentC from "./custom-hooks/ComponentC";
import ComponentD from "./custom-hooks/ComponentD";
import Parent2 from "./hoc/Parent2";
import Parent from "./renderProps/Parent";

function App() {
  return (
    <>
      {/* <Parent /> */}
      {/* <Parent2 /> */}
      {/* <ComponentC />
      <ComponentD /> */}
      <Parent3 />
    </>
  );
}

export default App;
