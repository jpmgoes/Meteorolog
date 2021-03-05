import { useState } from "react";
import { Background } from "./components/Background";
import { MainSquare } from "./components/MainSquare";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <Background />
      <MainSquare input={input} setInput={setInput} />
    </div>
  );
}

export default App;
