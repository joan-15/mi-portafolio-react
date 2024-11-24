import React from 'react';
import Dibujo1 from '../assets/Dibujo1.jpg';
import Dibujo2 from '../assets/Dibujo2.jpg';
import Dibujo3 from '../assets/Dibujo3.jpg';
import Dibujo4 from '../assets/Dibujo4.jpg';
import Dibujo5 from '../assets/Dibujo5.jpg';
import './Gallery.css'; // Ruta corregida para archivos en la misma carpeta

const Gallery = () => {
    const artworks = [
        { id: 1, title: 'Dibujo 1', image: Dibujo1 },
        { id: 2, title: 'Dibujo 2', image: Dibujo2 },
        { id: 3, title: 'Dibujo 3', image: Dibujo3 },
        { id: 4, title: 'Dibujo 4', image: Dibujo4 },
        { id: 5, title: 'Dibujo 5', image: Dibujo5 },
    ];

    return (
        <div className="gallery-container">
            {artworks.map((art) => (
                <div key={art.id} className="gallery-card">
                    <img src={art.image} alt={art.title} className="gallery-image" />
                    <h3>{art.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
