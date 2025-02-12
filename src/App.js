import React from "react";
import { useData } from "./hooks/useData";
import Header from "./components/sections/_Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/_Footer";

function App() {
  const [data, loading] = useData();
  return (
    <div className="App">
      <Header />
      <Home />
      {!loading && <Portfolio projects={data} />}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
