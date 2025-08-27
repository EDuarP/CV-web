import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Eduardo Duarte</div>
      <ul className="nav-links">
        <li><a href="home">Home</a></li>
        <li><a href="cv">CV</a></li>
        <li><a href="projects">Proyectos</a></li>
      </ul>
    </nav>
  );
}
