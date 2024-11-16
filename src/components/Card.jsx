import React, { useMemo, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Card({ image, isAdmin }) {
  console.log(isAdmin);

  const randomNum = useMemo(
    () => Math.trunc(Math.random() * image.images.length),
    [image.images]
  );

  const imageUrl = image.images[randomNum];
  const imageId = image.id;

  const [isVisible, setIsVisible] = useState(false);
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
      {isAdmin && (
        <div className="d-flex justify-content-between my-2 px-2">
          <Link
            to="/edit-image"
            state={{ image }}
            className="btn btn-warning"
            style={{ width: "40%" }}
          >
            Edit
          </Link>
          <Link className="btn btn-danger" style={{ width: "40%" }}>
            Delete
          </Link>
        </div>
      )}
    </div>
  );
}

export default Card;
