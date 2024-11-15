import React, { useState } from "react";
import data from "../data/data";

function SearchBox({ onCategoryChange }) {
  const [category, setCategory] = useState("");

  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    if (onCategoryChange) {
      onCategoryChange(selectedCategory); // Call only if the function exists
    }
  };

  return (
    <div className="container bg-white">
      <form action="" className="pt-4 col-md-5">
        <select
          className="form-control"
          value={category}
          onChange={handleChange}
        >
          <option value="">Search by category</option>
          {uniqueCategories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </form>
      <hr className="my-4" />
    </div>
  );
}

export default SearchBox;
