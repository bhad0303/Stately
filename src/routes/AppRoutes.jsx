import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router';
import Login from '../pages/login/Login';
import NotFound from "../pages/notfound/NotFound";


function AppRoutes() {
  return (
     <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login />}/>
         <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
