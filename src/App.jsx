import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home.jsx";
import Cv from "./components/cv.jsx";
import Projects from "./components/projects.jsx";
import { AnimatePresence, LayoutGroup } from "framer-motion";

function App() {
  return (
    <LayoutGroup>
      <AnimatePresence mode="wait">
        <Router>
          <Routes>
            <Route path="/cv-web/" element={<Home />} />
            <Route path="/cv-web/home" element={<Home />} />
            <Route path="/cv-web/cv" element={<Cv />} />
            <Route path="/cv-web/projects" element={<Projects />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;