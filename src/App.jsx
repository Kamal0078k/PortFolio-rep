import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "./Components/About";
import Work from "./Components/Work";
import Hero from "./Components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <About />
      <Work />
    </div>
  );
}

export default App;
