import { useState } from "react";
import { ToDo } from "./components/todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDo />
    </>
  );
}

export default App;
