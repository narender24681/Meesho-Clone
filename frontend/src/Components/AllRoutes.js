import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { AdminDashboard } from '../Pages/Admin/AdminDashboard';
import { AdminProducts } from '../Pages/Admin/AdminProducts';
import { AdminAddProduct } from '../Pages/Admin/AdminAddProduct';
import { AdminOrders } from '../Pages/Admin/AdminOrders';
import { AdminUsers } from '../Pages/Admin/AdminUsers';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/admin/products" element={<AdminProducts/>}/>
        <Route path="/admin/add-product" element={<AdminAddProduct/>}/>
        <Route path="/admin/orders" element={<AdminOrders/>}/>
        <Route path="/admin/users" element={<AdminUsers/>}/>
    </Routes>
  )
}
