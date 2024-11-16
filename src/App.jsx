import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ImageCard from "./components/ImageCard";
import { Routes, Route } from "react-router-dom";
import ImageProfile from "./components/ImageProfile";
import AddImage from "./components/AddImage";
import EditImage from "./components/EditImage";
import initialData from "./data/data";
// import NotFound from "./components/NotFound"; // Assuming you have a NotFound component

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [data, setData] = useState(initialData);

  return (
    <div>
      <Navbar
        setAdminLoggedIn={setIsAdminLoggedIn}
        isAdminLoggedIn={isAdminLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={<ImageCard isAdminLoggedIn={isAdminLoggedIn} />}
        />
        <Route path="/image-profile/:id" element={<ImageProfile />} />
        <Route path="/add-image" element={<AddImage setData={setData} />} />
        <Route
          path="/edit-image"
          element={<EditImage data={data} setData={setData} />}
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
