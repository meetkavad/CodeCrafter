function CCarouselTR(jsonText) {
  const jsonObject = JSON.parse(jsonText);
  const { componentType, slides } = jsonObject;

  const component = `
import React, { useState } from 'react';
  
function ${componentType}() {
const [currentSlide, setCurrentSlide] = useState(0);

const slides = ${JSON.stringify(slides)};

const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
};

const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
};

return (
    <div className="${componentType.toLowerCase()}">
    <div className="slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].caption} />
        <div className="caption">
        <h2>{slides[currentSlide].caption}</h2>
        <a href={slides[currentSlide].buttonLink} className="button">
            {slides[currentSlide].buttonText}
        </a>
        </div>
    </div>
    <button className="prev" onClick={prevSlide}>&#10094;</button>
    <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
);
}

export default ${componentType};
`;

  return component;
}

export default CCarouselTR;
