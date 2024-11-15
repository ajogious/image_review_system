import React, { useState } from "react";
import data from "../data/data";

function SearchBox() {
  const [category, setCategory] = useState("");

  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  const handleChange = (e) => {
    setCategory(e.target.value);
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
