import React from "react";

function Card() {
  const cardData = {
    componentType: "Card",
    title: "Example Card",
    image: {
      url: "/images/card-image.jpg",
      alt: "Card Image",
    },
    description:
      "This is a sample card description. You can customize it as needed.",
    button: {
      text: "Learn More",
      link: "/details",
    },
  };

  return (
    <div className={cardData.componentType.toLowerCase()}>
      {cardData.image && cardData.image.url && cardData.image.alt && (
        <img src={cardData.image.url} alt={cardData.image.alt} />
      )}
      <div className="card-content">
        <h2>{cardData.title}</h2>
        {cardData.description && <p>{cardData.description}</p>}
        {cardData.button && cardData.button.text && cardData.button.link && (
          <a href={cardData.button.link}>{cardData.button.text}</a>
        )}
      </div>
    </div>
  );
}

export default Card;
