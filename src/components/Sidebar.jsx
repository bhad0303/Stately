import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import AddOrder from "./AddOrder";
import AddProduct from "./AddProduct";
import {
  Dashboard,
  Sync,
  People,
  CheckCircle,
  Style,
  Add,
} from "@mui/icons-material";

import DayNavigation from "./DayNavigation";
import GridSystem from "./GridSystem";
import actualData from "../data/text";
import ThemeToggle from "./ThemeToggle";
import { useThemeContext } from "../context/ThemeContext";
import LogoutButton from "./LogoutButton";
// import { useContext } from "react";
// import Context from "../context/orderContext";

const drawerWidth = 180;

const Sidebar = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { mode } = useThemeContext();

  // const addOrder = (newOrder)=>{
  //      setOrder((prevOrder)=>[...prevOrder,newOrder]);
  // }

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <List
      sx={{
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "92%",
        background: mode === "light" ? "white" : "black",
      }}
    >
      <Box>
        {[
          { name: "Pending", icon: <Dashboard /> },
          { name: "Exchange", icon: <Sync /> },
          { name: "Completed", icon: <CheckCircle /> },
          { name: "Members", icon: <People /> },
          { name: "Looks", icon: <Style /> },
        ].map((text, index) => (
          <ListItem key={text} sx={{ padding: "0.5rem" }}>
            <ListItemButton
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.3rem",
                paddingLeft: "1rem",
                borderRadius: "1rem",
                background: mode === "light" ? "#E4E7F1" : "#282828",
                color: mode === "light" ? "black" : "white",
              }}
            >
              <ListItemIcon
                sx={{ color: mode === "light" ? "black" : "white" }}
              >
                {text.icon}{" "}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>

      <ListItem>
        <ListItemText>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ThemeToggle />
            <LogoutButton />
          </Box>
        </ListItemText>
      </ListItem>
    </List>
  );

  return (
    <div>
      (
      <Box sx={{ gap: "0.5rem" }}>
        <CssBaseline />

        <AppBar
          sx={{
            width: { sm: "100%" },
            ml: { sm: `${drawerWidth}px` },
            background: mode === "light" ? "#F8FBFF" : "#121212",
            boxShadow: "none",
            padding: "0.5rem",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: "#D1A201",
                fontSize: 30,
                border: "2px solid #D1A201",
                textAlign: "center",
                letterSpacing: "0.4rem",
                width: "fit-content",
                fontWeight: 600,
                paddingLeft: "0.4rem",
                m: { xs: "0 auto", sm: "0" },
                display: { xs: "none", sm: "block" },
              }}
            >
              STATELY
            </Typography>

            <Box
              sx={{
                ml: "auto",
                display: "flex",
                gap: "1rem",
              }}
            >
              <AddOrder />

              <AddProduct />
            </Box>

            <Box
              sx={{
                ml: "auto",
                display: { xs: "none", sm: "block" },
              }}
            >
              <DayNavigation direction="row" width="234px" />
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* TEMPORARY */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            slotProps={{
              root: {
                keepMounted: true, // Better open performance on mobile.
              },
            }}
          >
            {drawer}
          </Drawer>

          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                border: "none",
                borderRadius: "1rem",
                boxSizing: "border-box",
                width: drawerWidth,
                background: "#F4F5FC",
                zIndex: "0",
                top: "5.4rem",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Box
          sx={{
            marginLeft: { sm: "12rem" },
          }}
        >
          <GridSystem />
        </Box>
      </Box>
      );
    </div>
  );
};

export default Sidebar;
