import React, { useState, useEffect, useRef } from 'react';
import "./carousel.css";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleImages = 3;
  const maxIndex = Math.max(0, 2);
  const [selectedImage, setSelectedImage] = useState(null);

  

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

  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };
  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);
  
    return (
    <>    
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      
      <div className="mb-8">
        {/* Carousel Container */}
        <div 
          className="relative bg-white shadow-lg overflow-hidden carrusel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
        {/* Botón */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-red-300 z-10 button-prev"
        >
          ◀
        </button>
        <button onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-red-300 z-10 button-next"   
        >
          ▶
        </button>

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
                    onClick={() => openModal(image)}
                  />
                
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
    </>
    );
}

