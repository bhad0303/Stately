import React from 'react'
import  {Navigate} from 'react-router';

function ProtectedRoute({children}) {


    const isValid = localStorage.getItem('isValid');




  return isValid ? children : <Navigate to='/'/>    
}

export default ProtectedRoute
