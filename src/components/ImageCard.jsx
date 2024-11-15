import React from "react";
import data from "../data/data";
import Card from "./Card";
import "./ImageCard.css";

function ImageCard() {
  const randomizedIndices = Array.from(
    { length: data.length },
    (_, i) => i
  ).sort(() => Math.random() - 0.5);

  return (
    <div className="container container-sm mb-5 image-card">
      <div className="row g-0">
        {randomizedIndices.map((randomIndex) => {
          const image = data[randomIndex];
          return <Card key={image.id} image={image} />;
        })}
      </div>
    </div>
  );
}

export default ImageCard;
