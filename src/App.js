
import React from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Hero />
        <About />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
