import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router';
import Login from '../pages/login/Login';

function AppRoutes() {
  return (
     <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
