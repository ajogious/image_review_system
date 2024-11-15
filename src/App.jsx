import React from "react";
import Navbar from "./components/Navbar";
import ImageCard from "./components/ImageCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageProfile from "./components/ImageProfile";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ImageCard />} />
        <Route path="/image-profile/:id" element={<ImageProfile />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
