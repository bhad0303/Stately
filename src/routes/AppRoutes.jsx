import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Context from "../context/orderContext";
import actualData from "../data/text";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  const [order, setOrder] = useState(actualData);

  const [selectedOrder, setSelectedOrder] = useState({
    id: "S032432",
    customerName: "Michale Curlee",
    dateOrder: "08-11-2024",
    activityType: "Re-Style Request",
    state: "draft",
  });

  return (
    <Context.Provider
      value={{ order, setOrder, selectedOrder, setSelectedOrder }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
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
