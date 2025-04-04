import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Context from "../context/orderContext";
import actualData from "../data/text";
import ProtectedRoute from "./ProtectedRoute";
import SingUp from "../pages/signup/SignUp";
import { get } from "react-hook-form";

function AppRoutes() {


  const [order, setOrder] = useState([]);

  async function getOrderData (){

         const data =  await fetch('http://localhost:5000/orders');
         const actualData = await data.json();

         setOrder(actualData);


   }
     
      useEffect(()=>{
            getOrderData();
      },[])
  

   
  
  

  
   
  
  const [selectedOrder, setSelectedOrder] = useState({
    id: "S032432",
    customerName: "Michale Curlee",
    dateOrder: "08-11-2024",
    activityType: "Re-Style Request",
    state: "draft",
    tags: [" Subscription", " Luxe Plan", "Subscription Recurring Order"],
    products: [
      {
        "productName": "Luxury Perfume",
        "size": "100ml",
        "price": 180.00,
        "photo": "https://picsum.photos/id/109/150/120"
      }
    ]
  });

  return (
    <Context.Provider
      value={{ order, setOrder, selectedOrder, setSelectedOrder }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default AppRoutes;
