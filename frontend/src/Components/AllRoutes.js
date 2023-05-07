import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import Generic_Image_Card from "../Pages/Generic_Image_Card";
import Women from "./Women";
import Payment from "./Payment";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/payment" element={<Payment/>}></Route>
    </Routes>
  );
};
