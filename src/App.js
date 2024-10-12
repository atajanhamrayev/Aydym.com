import React from "react";
import MusicsContainer from "./pages/Musics/MusicsContainer";
import ArtistsContainer from "./pages/Artists/ArtistsContainer";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="bg-blue-400 min-h-[100vh]  items-center justify-center flex flex-col ">
      <Routes>
        <Route exact path="/" element={<MusicsContainer />} />
        <Route path="/:id" element={<ArtistsContainer />} />
      </Routes>
    </div>
  );
};

export default App;
