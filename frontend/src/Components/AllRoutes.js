import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";

import Signup from "../Pages/Signup";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
