import React, { useState } from "react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/slide1.jpg",
      caption: "Welcome to our website!",
      buttonText: "Learn More",
      buttonLink: "/about",
    },
    {
      image: "/images/slide2.jpg",
      caption: "Explore our services",
      buttonText: "View Services",
      buttonLink: "/services",
    },
    {
      image: "/images/slide3.jpg",
      caption: "Join our community",
      buttonText: "Sign Up",
      buttonLink: "/signup",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel">
      <div className="slide">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].caption}
        />
        <div className="caption">
          <h2>{slides[currentSlide].caption}</h2>
          <a href={slides[currentSlide].buttonLink} className="button">
            {slides[currentSlide].buttonText}
          </a>
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
