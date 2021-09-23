import React from 'react';

const Carousel = (props) => {
  const { images } = props;
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide my-4"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {images.map((image, idx) => (
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={idx}
            className={idx === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner" role="listbox">
        {images.map((image, idx) => (
          <div className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
            <img
              className="d-block img-fluid"
              src={image.imageUrl}
              alt={image.name}
            />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <style jsx>
        {`
          .carousel-item {
            max-height: 400px;
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
