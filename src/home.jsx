import "./Home.css";
import pp from "./assets/pp.jpg";
import logo_linkedin from "./assets/linkedin-logo.svg";
import logo_github from "./assets/github-logo.svg";
import logo_mail from "./assets/mail-logo.svg";
import ellipse from "./assets/Ellipse 2.svg";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-left">
          <img
            src={pp}
            alt="Eduardo Duarte"
            className="profile-img"
          />
        </div>

        <div className="hero-right">
          <h1>Hola, soy <span>Eduardo Duarte</span></h1>
          <p className="role">Ingeniero Mecatrónico | Data Enthusiast</p>
          <p className="bio">
            Soy un Ingeniero mecatrónico con experiencia en <strong>automatización</strong>, <strong>análisis avanzado de datos y optimización de procesos</strong>. Actualmente enfocado en el desarrollo de <strong>software</strong>, integrando soluciones inteligentes que conectan <strong>datos, tecnología y eficiencia operativa.</strong> Aquí encontrarás mi Hoja de Vida y una sección de Proyectos que enlazan a GitHub.
          </p>

          <div className="cta">
            <a href="cv" className="btn primary">Hoja de Vida</a>
            <a href="projects" className="btn secondary">Proyectos</a>
          </div>

          <div className="social">
            <a href="mailto:eduardo.jose881@gmail.com?subject=Consulta">
                <img 
                src={logo_mail} 
                className="logo_mail" />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-duarte-penna/"><img 
                src={logo_linkedin} 
                className="logo_linkedin" />
            </a>
            <a href="https://github.com/EDuarP"><img 
                src={logo_github} 
                className="logo_red" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
