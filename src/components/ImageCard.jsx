import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";
import fetchPaginatedData from "../data/fetchPaginatedData";
import "./ImageCard.css";

function ImageCard({ isAdminLoggedIn }) {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const pageSize = 12;

  const fetchImages = async (page, category) => {
    try {
      setError(null);
      const response = await fetchPaginatedData(page, pageSize, category);
      setImages(response.content);
      setTotalPages(response.totalPages);
    } catch (error) {
      setError("Failed to fetch images. Please try again later.");
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages(currentPage, category);
  }, [currentPage, category]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setCurrentPage(1);
  };

  return (
    <div className="container container-sm mb-5 image-card">
      <SearchBox onCategoryChange={handleCategoryChange} />

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="row g-0">
        {images.map((image) => (
          <Card key={image.id} image={image} isAdmin={isAdminLoggedIn} />
        ))}
      </div>

      {totalPages > 0 && (
        <div className="pagination">
          <button
            className="btn btn-primary"
            disabled={currentPage === 1 || totalPages === 0}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-primary"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageCard;
