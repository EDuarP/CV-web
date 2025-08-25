import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Ed. Duarte</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}
