import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data";

function AddImage({ setData }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    images: [],
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const imageFiles = Array.from(e.target.files).map((file) => ({
      url: URL.createObjectURL(file), // Simulate image preview
      altText: file.name,
    }));
    setForm({ ...form, images: imageFiles });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.category.trim()) newErrors.category = "Category is required";
    if (!form.description.trim())
      newErrors.description = "Description is required";
    if (form.images.length === 0)
      newErrors.images = "At least one image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newImageData = {
        id: data.length + 1, // Assign a new unique ID
        ...form,
        reactions: { likes: 0, loves: 0, unlikes: 0 },
        reviews: [],
      };

      setData((prevData) => [...prevData, newImageData]); // Update parent state
      navigate("/"); // Navigate back to the main page
    }
  };

  return (
    <div
      className="container container-md col-md-6"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <h2>Add New Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className={`form-control ${errors.category ? "is-invalid" : ""}`}
            id="category"
            name="category"
            value={form.category}
            onChange={handleInputChange}
          />
          {errors.category && (
            <div className="invalid-feedback">{errors.category}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            id="description"
            name="description"
            rows="3"
            value={form.description}
            onChange={handleInputChange}
          ></textarea>
          {errors.description && (
            <div className="invalid-feedback">{errors.description}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">
            Upload Images
          </label>
          <input
            type="file"
            className={`form-control ${errors.images ? "is-invalid" : ""}`}
            id="images"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          {errors.images && (
            <div className="invalid-feedback">{errors.images}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddImage;
