import React from 'react';
import ArtModal from '../components/ArtModal';
import './Gallery.css';

const images = [
  { src: '/src/assets/Dibujo1.jpg', title: 'Dibujo 1', description: 'Descripción del dibujo 1' },
  { src: '/src/assets/Dibujo2.jpg', title: 'Dibujo 2', description: 'Descripción del dibujo 2' },
  { src: '/src/assets/Dibujo3.jpg', title: 'Dibujo 3', description: 'Descripción del dibujo 3' },
  { src: '/src/assets/Dibujo4.jpg', title: 'Dibujo 4', description: 'Descripción del dibujo 4' },
  { src: '/src/assets/Dibujo5.jpg', title: 'Dibujo 5', description: 'Descripción del dibujo 5' },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-card">
          <img src={image.src} alt={image.title} className="gallery-image" />
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
