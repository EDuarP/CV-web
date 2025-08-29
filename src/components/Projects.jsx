import React from "react";
import Cardproject from "./cardproject";
import ciencia1 from "../assets/proyectos/ciencia1.png";
import ciencia2 from "../assets/proyectos/ciencia2.png";
import ciencia3 from "../assets/proyectos/ciencia3.png";
import rpa1 from "../assets/proyectos/rpa1.png";
import rpa2 from "../assets/proyectos/rpa2.png";
import rpa3 from "../assets/proyectos/rpagif.gif";
import "./Projects.css";
import Navbar from "./navbar";
import circulo from "../assets/Ellipse 2.svg";
import { motion } from "motion/react";

const images1 = [rpa1, rpa2, rpa3];
const images2 = [ciencia2, ciencia3, ciencia1];

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
      <div className="bg-white/20 backdrop-blur-md border-white/30 rounded-2xl shadow-lg p-10 max-w-6xl mx-auto">
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
    </main>
    </>
  );
}