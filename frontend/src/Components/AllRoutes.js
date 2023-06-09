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

import CartPage from "./CartPage";
import Payment from "./Payment";
import PrivateRoute from "./PrivateRoute";
import { AdminEditProduct } from "../Pages/Admin/AdminEditProduct";
import Success from "./Success";



export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route
        path="/admin"
        element={
          // <PrivateRoute>
            <AdminDashboard />
          // </PrivateRoute>
        }
      />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/add-product" element={<AdminAddProduct />} />
      <Route path="/admin/edit-product/:id" element={<AdminEditProduct />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>}></Route>
      <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<SingleProductPage/>}/>
<Route path="/success" element={<Success/>}></Route>
    </Routes>
  );
};
