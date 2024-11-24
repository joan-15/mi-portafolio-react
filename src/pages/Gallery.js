import React, { useState } from 'react';
import ArtModal from '../components/ArtModal';
import '../styles/global.css';

const images = [
  '/assets/Dibujo1.jpg',
  '/assets/Dibujo2.jpg',
  '/assets/Dibujo3.jpg',
  '/assets/Dibujo4.jpg',
  '/assets/Dibujo5.jpg',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Artwork ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            className="gallery-image"
          />
        ))}
      </div>
      {selectedImage && <ArtModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default Gallery;
