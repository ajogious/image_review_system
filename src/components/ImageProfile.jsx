import { useLocation } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaHeart, FaComment } from "react-icons/fa"; // Import icons
import "./ImageProfile.css";

function ImageProfile() {
  const location = useLocation();
  const { image } = location.state || {};

  const [reactions, setReactions] = useState({
    likes: image.reactions.likes,
    unlikes: image.reactions.unlikes,
    loves: image.reactions.loves,
  });

  const [reviews, setReviews] = useState(image.reviews || []);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [newReview, setNewReview] = useState({ reviewerName: "", comment: "" });

  const handleReaction = (type) => {
    setReactions((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newReview.reviewerName.trim() && newReview.comment.trim()) {
      setReviews((prev) => [
        ...prev,
        {
          reviewerName: newReview.reviewerName,
          comment: newReview.comment,
          adminReply: "", // Admin reply is empty initially
          likes: 0, // Likes for the new comment
        },
      ]);
      setNewReview({ reviewerName: "", comment: "" });
      setShowCommentForm(false);
    }
  };

  if (!image) {
    return <p className="alert alert-primary">Image not found.</p>;
  }

  return (
    <div className="container container-md image__profile-card">
      <h2 className="pb-3">Image Details</h2>
      <div className="row">
        <div className="col-md-6">
          <Carousel>
            {image.images.map((img, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={img.url} alt={img.name} />
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Reactions Section */}
          <div className="reactions-icons mt-3">
            <button
              className="btn btn-outline-primary"
              onClick={() => handleReaction("likes")}
            >
              <FaThumbsUp />
              {reactions.likes} Like
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleReaction("unlikes")}
            >
              <FaThumbsDown />
              {reactions.unlikes} Unlike
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => handleReaction("loves")}
            >
              <FaHeart />
              {reactions.loves} Love
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => setShowCommentForm(true)}
            >
              <FaComment /> Comment
            </button>
          </div>
        </div>

        {/* Image Details */}
        <div className="col-md-6 d-flex flex-column">
          <h3>Name: {image.name}</h3>
          <h6>Category: {image.category}</h6>
          <p>Description: {image.description}</p>
        </div>
      </div>

      {/* Comment Form */}
      {showCommentForm && (
        <form
          onSubmit={handleCommentSubmit}
          className="mt-3 image__profile-form col-md-6"
        >
          <div className="mb-2">
            <label htmlFor="reviewerName" className="form-label">
              Your Name:
            </label>
            <input
              type="text"
              id="reviewerName"
              className="form-control"
              value={newReview.reviewerName}
              onChange={(e) =>
                setNewReview({ ...newReview, reviewerName: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="comment" className="form-label">
              Your Comment:
            </label>
            <textarea
              id="comment"
              className="form-control"
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => setShowCommentForm(false)}
          >
            Cancel
          </button>
        </form>
      )}

      {/* Reviews Section */}
      <div className="reviews-section mt-4 col-md-6">
        <h3>Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review-item p-3 mb-2 border rounded">
              <h5>{review.reviewerName}</h5>
              <p>{review.comment}</p>
              {review.adminReply && (
                <p className="text-muted admin-reply">
                  Admin Reply: {review.adminReply}
                </p>
              )}
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default ImageProfile;
