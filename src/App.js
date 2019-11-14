import React from "react";
import Header from "./components/sections/_Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
