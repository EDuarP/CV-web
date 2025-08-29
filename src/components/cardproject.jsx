import React from "react";
import "./Cardproject.css";
export default function Cardproject({ Title, Description, Tools, Images }) {
  return (
    <div className="ContainerCard">
      <h2 className="text-4xl font-bold text-gray-800 text-center">{Title}</h2>
    <section className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg px-12 py-16 grid grid-cols-[1fr_1fr_50px_1fr_1fr_50px] gap-x-24 gap-y-12 items-start flex justify-center items-center Cards">
      
      {/* Texto */}
      <div className="space-y-6 col-start-1 col-end-3 grid place-items-center texto" >
        <div className="max-w-xl">
        <p className="text-lg text-gray-600 leading-relaxed ">{Description}</p>
        <p className="text-lg text-gray-600 font-bold">
          <span>Herramientas:</span> {Tools}
        </p>
        </div>
      </div>

      {/* Imágenes */}
      <div className="grid grid-cols-3 gap-6 col-start-4 col-end-7 flex justify-center items-center">
        <img
          src={Images[0]}
          alt="Demo 1"
          className="rounded-xl shadow-md object-cover w-full h-40"
          onClick={() => window.open(Images[0], "_blank")}
        />
        <img
          src={Images[1]}
          alt="Demo 2"
          className="rounded-xl shadow-md object-cover w-full h-40"
          onClick={() => window.open(Images[2], "_blank")}
        /> 
        <img
          src={Images[2]}
          alt="Demo 3"
          className="rounded-xl shadow-md w-[600px] h-[300px] object-cover col-span-2 imagen3 mx-auto"
          onClick={() => window.open(Images[1], "_blank")}
        />
      </div>
    </section>
    </div>
  );
}
