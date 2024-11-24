import React from 'react';
import './Navbar.css'; // Usando estilos reutilizables

const ArtModal = ({ image, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={image} alt="Artwork" />
        <button onClick={onClose} className="modal-close">
          Close
        </button>
      </div>
    </div>
  );
};

export default ArtModal;
