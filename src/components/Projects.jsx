import React from "react";
import Cardproject from "./cardproject";
import ciencia1 from "../assets/proyectos/ciencia1.webp";
import ciencia2 from "../assets/proyectos/ciencia2.webp";
import ciencia3 from "../assets/proyectos/ciencia3.webp";
import rpa1 from "../assets/proyectos/rpa1.webp";
import rpa2 from "../assets/proyectos/rpa2.webp";
import rpa3 from "../assets/proyectos/rpagif.gif";
import venta1 from "../assets/proyectos/venta1.webp";
import venta2 from "../assets/proyectos/venta2.webp";
import venta3 from "../assets/proyectos/venta3.gif";
import cerdo1 from "../assets/proyectos/cerdo1.webp";
import cerdo2 from "../assets/proyectos/cerdo2.webp";
import cerdo3 from "../assets/proyectos/cerdo3.webp";
import "./Projects.css";
import Navbar from "./navbar";
import circulo from "../assets/Ellipse 2.svg";
import { motion } from "motion/react";

const images1 = [rpa1, rpa2, rpa3];
const images2 = [ciencia2, ciencia3, ciencia1];
const images3 = [venta1, venta2, venta3];
const images4 = [cerdo2, cerdo3, cerdo1];

export default function Projects() {
  
  return (
    <>
    <Navbar />
    <main className="projects">
        <motion.div initial={{ y: 20 }}
        animate={{ y: 0 }}
        exit={{ y: -20 }}
        transition={{ duration: 0.5 }}>
      <h1>Proyectos</h1>
      <div className="container-projects">
      <Cardproject 
        Title={"Sistema de gestión para una planta de sacrifico porcina"} 
        Description={"Este proyecto es un sistema de gestión integral para optimizar el control del flujo de cerdos destinados al sacrificio. Registra de forma automática el peso en distintas etapas, almacena la información en una base centralizada y genera reportes PDF para análisis. Incluye notificaciones vía WhatsApp API y manillas impresas con BarTender, garantizando trazabilidad y acceso inmediato a datos de cada lote. Con estas funciones, el sistema mejora la eficiencia, agiliza decisiones estratégicas y aporta a la digitalización del sector agroindustrial."} 
        Tools={"Python, Tkinter Designer, Pandas, CSV, Raspberry Pi 4, Figma, WhatsApp API, SMB de Windows"} 
        Images={images4}> 
      </Cardproject>

      <Cardproject 
        Title={"Single Page App para gestión de ventas con comisiones"} 
        Description={"Este proyecto es una Single Page Application creada para una prueba técnica usando por primera vez Bootstrap y FastAPI. Permite registrar ventas en CSV, integrarlas en una base de datos MySQL normalizada y generar reportes PDF individuales y de equipo. También incluye un dashboard en Power BI para centralizar la información y facilitar el análisis. Un valor agregado es el cálculo automático de comisiones con reglas de bonos y penalizaciones, asegurando transparencia. En conjunto, integra front-end, back-end, base de datos y visualización en un flujo de trabajo eficiente."} 
        Tools={"Bootstrap, FastAPI, MySQL, Power BI, CSV, Reportes PDF"} 
        Images={images3}> 
      </Cardproject>


      <Cardproject Title={"Aplicacion de asignación de tareas/roles en Power Apps"} Description={"En este proyecto, desarrollé una aplicación que facilita las asignaciones de trabajo mensuales, calculando las semanas laborales con un solo botón. Está diseñada para una empresa con diferentes áreas que comparten el mismo personal rotativo. Con esta aplicación, se puede visualizar en qué áreas están asignadas las personas y permite solicitar su reasignación a otra área mediante correo electrónico, gracias a un flujo de Power Automate integrado en la app."} Tools={"Power Apps, Power Automate y SharePoint"} Images={images1}> </Cardproject>

      <Cardproject Title={"Ciencia de Datos en el Transporte Público"} Description={"En una investigación en la que apliqué la metodología de ciencia de datos (Business Understanding, Data Understanding, Data Preparation, Modeling y Evaluation) para analizar y modelar rutas del transporte público del Área Metropolitana de Bucaramanga (AMB), descubrí que la mejor técnica de aprendizaje automático para aplicar en estas rutas es KNeighborsRegressor."} Tools={"Python, Power BI y Machine Learning."} Images={images2}> </Cardproject>
      </div>
        </motion.div>
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

      <motion.img src={circulo} alt="circulo" className="circulo11"  layoutId="circulo11" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}} />

      <motion.img src={circulo} alt="circulo2" className="circulo12" layoutId="circulo22" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>

      <motion.img src={circulo} alt="circulo3" className="circulo13" 
      layoutId="circulo33" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>

      <motion.img src={circulo} alt="circulo4" className="circulo14" 
      layoutId="circulo44" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>
    </main>
    
    </>
  );
}