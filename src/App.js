import { Card } from "./components/Card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./App.scss";
import { Background } from "./components/Background";

function App() {
  const { handleSubmit, register } = useForm();
  const [input, setInput] = useState("");
  const onSubmit = handleSubmit((data) => {
    setInput(data.location);
    return data;
  });

  return (
    <div className="App">
      <Background />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="location"
          name="location"
          ref={register({ required: true })}
        />
        <input type="submit" value="submit" />
      </form>
      <Card input={input} />
    </div>
  );
}

export default App;
