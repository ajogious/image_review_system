import React, { useMemo, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Card({ image, handleClick }) {
  const randomNum = useMemo(
    () => Math.trunc(Math.random() * image.images.length),
    [image.images]
  );

  const imageUrl = image.images[randomNum];
  const imageId = image.id;

  // Local state to track whether image is in the viewport
  const [isVisible, setIsVisible] = useState(false);
  const [imageCard, setImageCard] = useState({});
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="col-md-3">
      <Link to={`/image-profile/${imageId}`} state={{ image }}>
        <div className="cards square">
          {imageUrl ? (
            <img
              ref={imgRef}
              src={isVisible ? imageUrl.url : ""}
              alt={imageUrl.name}
              className="card-img-tops img-fluid"
            />
          ) : (
            <p className="alert alert-primary">No image available</p>
          )}
        </div>
      </Link>
    </div>
  );
}

export default Card;
