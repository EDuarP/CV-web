import "./Home.css";
import pp from "./assets/pp.jpg";
import logo_linkedin from "./assets/linkedin-logo.svg";
import logo_github from "./assets/github-logo.svg";
import logo_mail from "./assets/mail-logo.svg";
import React, { useState, useEffect, useRef } from 'react';
import ciention from './assets/certificados/ciention.jpg';
import datasciencemintic from './assets/certificados/datasciencemintic.jpg';
import googledataanalytics from './assets/certificados/googledataanalytics.jpg';
import huawei from './assets/certificados/huawei.jpg';
import iasolutions from './assets/certificados/iasolutions.jpg';
import incko from './assets/certificados/incko.jpg';
import innovador from './assets/certificados/innovador.jpg';
import joveninvestigador from './assets/certificados/joveninvestigador.jpg';
import processimprovement from './assets/certificados/processimprovement.jpg';
import worksantoto from './assets/certificados/worksantoto.jpg';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleImages = 3;
  const maxIndex = Math.max(0, 2);
  

  useEffect(() => {
    if (!isPaused && images.length > visibleImages) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => {
          // Cuando llega al final, vuelve al inicio
          return prev >= maxIndex ? 0 : prev + 1;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, maxIndex]);

  return (
    <>
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
    
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Certificados ↓</h2>
        
        {/* Carousel Container */}
        <div 
          className="relative bg-white shadow-lg overflow-hidden carrusel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Images Track */}
          <div className="relative">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
                width: `${(images.length * 100) / visibleImages}%`
              }}
            >
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 relative cursor-pointer group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-4 border-red-300 rounded-lg"
                  style={{ width: `${100 / images.length}%` }}
                >
                  <img
                    src={image}
                    alt={`Certificado ${index + 1}`}
                    className="w-full group-hover:scale-105 transition-transform duration-300 carrusel-img" 
                  />
                
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
