import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/About/AboutUs";
import Space from "./components/block/Space";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Space />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
