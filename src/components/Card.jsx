import React, { useMemo, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ image, isAdmin, onDelete }) {
  const randomNum = useMemo(
    () => Math.trunc(Math.random() * image.images.length),
    [image.images]
  );

  const imageUrl = image.images[randomNum];
  const imageId = image.id;

  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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

  const handleDelete = () => {
    setShowPopup(true); // Show the confirmation popup
  };

  const confirmDelete = () => {
    setShowPopup(false); // Close the popup
    onDelete(image.id); // Trigger the delete callback passed from the parent
  };

  const cancelDelete = () => {
    setShowPopup(false); // Close the popup without deleting
  };

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
            state={{ image }} // Pass image data to EditImage component
            className="btn btn-warning"
            style={{ width: "40%" }}
          >
            Edit
          </Link>
          <button
            className="btn btn-danger"
            style={{ width: "40%" }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}

      {/* Custom Confirmation Popup */}
      {showPopup && (
        <>
          <div className="overlay"></div> {/* Dark overlay */}
          <div className="popup">
            <h5>Are you sure you want to delete this image?</h5>
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-danger" onClick={confirmDelete}>
                Yes, Delete
              </button>
              <button className="btn btn-secondary" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
