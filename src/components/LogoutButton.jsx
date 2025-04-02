import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router";

function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("isValid", "false");
    navigate("/");
  };

  return (
    <Tooltip title="Logout" arrow>
      <IconButton color="inherit" onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </Tooltip>
  );
}

export default LogoutButton;
