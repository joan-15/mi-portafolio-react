import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [artwork, setArtwork] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const response = await axios.get(
          'https://api.artic.edu/api/v1/artworks',
          { params: { limit: 1, page: Math.floor(Math.random() * 100) + 1 } }
        );

        const artworkData = response.data.data[0];
        const imageId = artworkData.image_id;
        const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;

        setArtwork({
          title: artworkData.title,
          artist: artworkData.artist_title,
          image: imageUrl,
        });
      } catch (err) {
        setError('No se pudo cargar la obra de arte.');
      }
    };

    fetchArtwork();
  }, []);

  return (
    <div className="home-container">
      <h1 className="draw-animation">¡Bienvenido a Mi Portafolio Artístico!</h1>
      <p className="quote">
        "El arte no reproduce lo visible, sino que hace visible lo invisible." – Paul Klee
      </p>

      {error && <p className="error">{error}</p>}

      {artwork ? (
        <div className="artwork-container">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="artwork-image"
          />
          <h2 className="artwork-title">{artwork.title}</h2>
          <p className="artwork-artist">{artwork.artist}</p>
        </div>
      ) : (
        <p className="loading">Cargando obra de arte...</p>
      )}
    </div>
  );
};

export default Home;
