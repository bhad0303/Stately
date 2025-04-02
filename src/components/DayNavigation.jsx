import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useThemeContext } from "../context/ThemeContext";

const DayNavigation = () => {
  const [value, setValue] = React.useState(0);
  const {mode} = useThemeContext();

  return (
    <Box
      sx={{
        width: 234,
        border: "1px solid #ccc",
        borderRadius: "0.8rem",
        margin: "0 auto",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          borderRadius: "0.8rem",
          height: "51px",
          backgroundColor: mode === 'light' ? "#F3F5FB" : '#282828',
          color: mode === 'light'? '#f5f5f5' : 'white',
        }}
      >
        <BottomNavigationAction
          label="Day"
          sx={{
            borderRight: "1px solid #ccc",
            borderRadius: "0.8rem",
            backgroundColor: value === 0 ? "#161722" : "F3F5FB",
            color: value === 0 ? "white !important" : "red",  
          }}
        />
        <BottomNavigationAction
          label="Week"
          sx={{
            borderRight: "1px solid #ccc",
            borderRadius: "0.8rem",
            backgroundColor: value === 1 ? "#161722" : "F3F5FB",
            color: value === 1 ? "white !important" : "red",
          }}
        />
        <BottomNavigationAction
          label="Month"
          sx={{
            borderRadius: "0.8rem",
            backgroundColor: value === 2 ? "#161722" : "F3F5FB",
            color: value === 2 ? "white !important" : "red",
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default DayNavigation;
