import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Eduardo Duarte</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/cv">CV</Link></li>
        <li><Link to="/projects">Proyectos</Link></li>
      </ul>
    </nav>
  );
}
