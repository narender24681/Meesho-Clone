import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import Generic_Image_Card from "../Pages/Generic_Image_Card";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
