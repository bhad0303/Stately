import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Context from "../context/orderContext";
import actualData from "../data/text";

function AppRoutes() {
 
  const [order,setOrder] = useState(actualData);

    
  



  return (
    <Context.Provider value={{order,setOrder}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default AppRoutes;
