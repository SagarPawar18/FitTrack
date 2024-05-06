import { useState } from "react";
import "./App.css";
import Excersie from "./excersie";
import Bot from "./assets/bot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Excersie />
      <Bot />
    </>
  );
}

export default App;
