import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { AdminDashboard } from "../Pages/Admin/AdminDashboard";
import { AdminProducts } from "../Pages/Admin/AdminProducts";
import { AdminAddProduct } from "../Pages/Admin/AdminAddProduct";
import { AdminOrders } from "../Pages/Admin/AdminOrders";
import { AdminUsers } from "../Pages/Admin/AdminUsers";
import Signup from "../Pages/Signup";

import Product from '../Pages/Product';
import SingleProductPage from "./SingleProductPage"
import Signin from "../Pages/Signin";


import Payment from "./Payment";
import PrivateRoute from "./PrivateRoute";
import CartPage from "./CartPage";
import Footer from "./Footer";



export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/add-product" element={<AdminAddProduct />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/payment" element={<Payment/>}></Route>
    <Route path="/cart" element={<CartPage/>}></Route>
      <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<SingleProductPage/>}/>
       
    </Routes>
  );
};
