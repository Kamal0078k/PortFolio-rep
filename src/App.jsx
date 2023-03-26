import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "./Components/About";
import Work from "./Components/Work";
import Hero from "./Components/Hero";
import Workp2 from "./Components/Workp2";
import Work2 from "./Components/Work2";
import Work2p2 from "./Components/Work2p2";
import Contact from "./Components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <About />
      <Work />
      <Workp2 />
      <Work2 />
      <Work2p2 />
      <Contact />
    </div>
  );
}

export default App;
