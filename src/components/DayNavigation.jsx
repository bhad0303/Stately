import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const DayNavigation = () => {
  const [value, setValue] = React.useState(0);

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
          backgroundColor: "#F3F5FB",
          color: "f5f5f5",
        }}
      >
        <BottomNavigationAction
          label="Day"
          sx={{
            borderRight: "1px solid #ccc",
            borderRadius: "0.8rem",
            backgroundColor: value === 0 ? "#161722" : "F3F5FB",
            color: value === 0 ? "white !important" : "black",
          }}
        />
        <BottomNavigationAction
          label="Week"
          sx={{
            borderRight: "1px solid #ccc",
            borderRadius: "0.8rem",
            backgroundColor: value === 1 ? "#161722" : "F3F5FB",
            color: value === 1 ? "white !important" : "black",
          }}
        />
        <BottomNavigationAction
          label="Month"
          sx={{
            borderRadius: "0.8rem",
            backgroundColor: value === 2 ? "#161722" : "F3F5FB",
            color: value === 2 ? "white !important" : "black",
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default DayNavigation;
