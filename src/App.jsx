import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home.jsx";
import Cv from "./components/cv.jsx";
import Projects from "./components/projects.jsx";
import { AnimatePresence, LayoutGroup } from "framer-motion";

function App() {
  return (
    <LayoutGroup>
      <AnimatePresence mode="wait">
        <Router basename="/CV-web">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;