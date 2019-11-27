import React from "react";
import useCarousel from "../hooks/useCarousel";

const Carousel2 = ({
  slides,
  interval = 5000,
  arrows = false,
  indicators = false
}) => {
  const length = slides.length;
  const [active, setActive, handlers, style] = useCarousel(length, interval);

  return (
    length > 0 && (
      <div className="carousel">
        {length > 1 && arrows && (
          <>
            <div
              className="carousel-arrow left"
              onClick={() => setActive({ type: "prev", length })}
            >
              <div className="carousel-arrow-inner left" />
            </div>
            <div
              className="carousel-arrow right"
              onClick={() => setActive({ type: "next", length })}
            >
              <div className="carousel-arrow-inner right" />
            </div>
          </>
        )}
        {length > 1 && indicators && (
          <div className="carousel-indicator-wrapper">
            {slides.map((_, index) => (
              <div
                key={index}
                className={
                  "carousel-indicator" + (active === index ? " active" : "")
                }
                onClick={() => setActive({ type: "jump", desired: index })}
              />
            ))}
          </div>
        )}
        <div className="carousel-content" {...handlers} style={style}>
          <img
            className="carousel-item"
            src={`/images/${slides[length - 1]}`}
            alt={slides[length - 1]}
          />
          {slides.map((slide, index) => (
            <img
              key={index}
              className="carousel-item"
              src={`/images/${slide}`}
              alt={slide}
            />
          ))}
          <img
            className="carousel-item"
            src={`/images/${slides[0]}`}
            alt={slides[0]}
          />
        </div>
      </div>
    )
  );
};

export default Carousel2;
