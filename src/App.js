import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigation />}></Route> */}
        <Route path="/" element={<Home />}></Route> 
        <Route path="/about" element={<About />}></Route> 
        {/* <Route path="/movie/:id" element={<Detail />}></Route>  */}
      </Routes>
    </Router>
  );
}

export default App;