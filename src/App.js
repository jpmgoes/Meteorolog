import { useState } from "react";
import { IndexContent } from "./components/IndexContent";
import { Layout } from "./layout/Layout";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <Layout>
        <IndexContent input={input} setInput={setInput} />
      </Layout>
    </div>
  );
}

export default App;
