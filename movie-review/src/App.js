import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
