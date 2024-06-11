import React from 'react';
import ROOMS_JSON from '../../JSON/room-images.json';

export const Carousel = () => {
  const CAROUSEL_IMAGES = ROOMS_JSON.find((room) => room.name === 'Foto Carosello');

  if (!CAROUSEL_IMAGES) {
    return null; // or some fallback UI
  }

  // **MAPPA IMMAGINI CAROSELLO
  const mapCarouselImages = CAROUSEL_IMAGES.images.map((item, index) => {
    const imagePath = process.env.PUBLIC_URL + item;
    const isActive = index === 0 ? 'active' : '';

    return (
      <div className={`carousel-item ${isActive}`} key={index}>
        <img src={imagePath} className="d-block w-100" alt='Foto Carosello' />
      </div>
    );
  });

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {CAROUSEL_IMAGES.images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {mapCarouselImages}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
