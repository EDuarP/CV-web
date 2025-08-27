import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home.jsx";
import Cv from "./cv.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/api/download/cv" element={<Cv />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </Router>
  );
}

export default App;