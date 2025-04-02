import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router";
function Dashboard() {
  let navigate = useNavigate();

  // useEffect(() => {
  //   const isValidate = localStorage.getItem("isValidate");
  //   console.log("isValidate value:", isValidate);

  //   if (isValidate == "true") {  // Fix: Explicitly check for "true"
  //     console.log("Redirecting to login...");
  //     navigate("/login");
  //   }
  // }, [navigate]);

  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default Dashboard;
