import React, { useState, useEffect, useRef } from 'react';
import "./Cardproject.css";
export default function Cardproject({ Title, Description, Tools, Images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);
  return (
    <div className="ContainerCard">
      <h2 className="text-center">{Title}</h2>
    <section className="Cards">
      
      {/* Texto */}
      <div className="texto" >
        <div className="">
        <p className="">{Description}</p>
        <p className="font-bold">
          <span>Herramientas:</span> {Tools}
        </p>
        </div>
      </div>

      {/* Imágenes */}
      <div className="gallery">
        <img src= {Images[0]} alt="Demo 1" className="img-small" onClick={() => openModal(Images[0])} />
        <img src={Images[1]} alt="Demo 2" className="img-small" onClick={() => openModal(Images[1])}/>
        <img src={Images[2]} alt="Demo 3" className="img-large" onClick={() => openModal(Images[2])}/>
    </div>
    </section>
     {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Cerrar"
              title="Cerrar"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
            />
          </div>
        </div>
      )}
    </div>
  );
}
