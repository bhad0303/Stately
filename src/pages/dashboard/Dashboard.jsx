import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router";
function Dashboard() {
  const navigate = useNavigate();
 
   useEffect( ()=>{
     let isValid= localStorage.getItem('isValid');
     console.log(isValid);
      
     if(isValid == 'false'){
        navigate('/')
     }

   },[navigate]);
  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default Dashboard;
