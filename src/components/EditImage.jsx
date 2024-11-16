import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditImage({ data, setData }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the selected image data passed via state
  const { image } = location.state;

  const [form, setForm] = useState({
    id: image.id,
    name: image.name,
    category: image.category,
    description: image.description,
    images: image.images,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const imageFiles = Array.from(e.target.files).map((file) => ({
      url: URL.createObjectURL(file), // Preview uploaded files
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Update the data array
      const updatedData = data.map((item) =>
        item.id === form.id ? { ...item, ...form } : item
      );
      setData(updatedData); // Update state in the parent component
      navigate("/"); // Redirect back to the home page
    }
  };

  return (
    <div
      className="container container-md col-md-6"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <h2>Edit Image</h2>
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
            Update Images
          </label>
          <input
            type="file"
            className="form-control"
            id="images"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          <div className="mt-3  d-flex flex-wrap">
            {form.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={img.altText}
                style={{ width: "100px", marginRight: "10px" }}
              />
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditImage;
