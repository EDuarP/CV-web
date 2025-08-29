import "./Home.css";
import pp from "../assets/pp.webp";
import logo_linkedin from "../assets/linkedin-logo.svg";
import logo_github from "../assets/github-logo.svg";
import logo_mail from "../assets/mail-logo.svg";
import ciention from '../assets/certificados/ciention.webp';
import datasciencemintic from '../assets/certificados/datasciencemintic.webp';
import googledataanalytics from '../assets/certificados/googledataanalytics.webp';
import huawei from '../assets/certificados/huawei.webp';
import iasolutions from '../assets/certificados/iasolutions.webp';
import incko from '../assets/certificados/incko.webp';
import innovador from '../assets/certificados/innovador.webp';
import joveninvestigador from '../assets/certificados/joveninvestigador.webp';
import processimprovement from '../assets/certificados/processimprovement.webp';
import worksantoto from '../assets/certificados/worksantoto.webp';
import Carousel from "./carousel.jsx";
import circulo from "../assets/Ellipse 2.svg";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const images = [
  ciention,
  datasciencemintic,
  googledataanalytics,
  huawei,
  iasolutions,
  incko,
  innovador,
  joveninvestigador,
  processimprovement,
  worksantoto,
];

export default function Home() {

  return (
    <>
    <main className="home">
      <motion.section className="hero"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        exit={{ y: -20 }}
        transition={{ duration: 0.5 }}>
        <div className="hero-left">
          <motion.img
            src={pp}
            alt="Eduardo Duarte"
            className="profile-img"
            layoutId="pp" transition={{ duration: 0.6, ease: "easeInOut" }} 
            exit={{ opacity: 0}}
            initial={false}
          />
        </div>
        <div className="hero-right">
          <h1>Hola, soy <span>Eduardo Duarte</span></h1>
          <p className="role">Ingeniero Mecatrónico | Data Enthusiast</p>
          <p className="bio">
            Soy un Ingeniero mecatrónico especializado en <strong>soluciones tecnológicas</strong> con experiencia en <strong>automatización</strong>, <strong>análisis avanzado de datos y optimización de procesos</strong>. Actualmente enfocado en el desarrollo de <strong>software</strong>, integrando soluciones inteligentes que conectan <strong>datos, tecnología y eficiencia operativa.</strong>
          </p>
          <p>Aquí encontrarás mi Hoja de Vida y una sección de algunos Proyectos en los que he trabajado.</p>
          <div className="cta">
            <Link to="/cv" className="btn primary">Ver CV</Link>
            <Link to="/projects" className="btn secondary" viewTransition>Proyectos</Link>
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
      </motion.section>
      <motion.img src={circulo} alt="circulo" className="circulo"  layoutId="circulo1" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}} />

      <motion.img src={circulo} alt="circulo2" className="circulo2" layoutId="circulo2" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>

      <motion.img src={circulo} alt="circulo3" className="circulo3" 
      layoutId="circulo3" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>

      <motion.img src={circulo} alt="circulo4" className="circulo4" 
      layoutId="circulo4" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>
      <p>asd</p>
      <h1 className="certificados">Certificados ↓</h1>
    </main>
    
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Carousel images={images} />
      </div>
    </div>
    </>
  );
}
