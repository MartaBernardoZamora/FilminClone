import React from "react";
import "./App.css";
import Footer from './components/footer/Footer'
import Navbar from "./components/header/navbar/navbar";
import Content from './components/content/Content'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
