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
import {
  Dashboard,
  Sync,
  People,
  CheckCircle,
  Style,
} from "@mui/icons-material";

import DayNavigation from "./DayNavigation";

const drawerWidth = 180;

const Sidebar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

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
    <div>
      <List
        sx={{
          padding: "0.5rem",
        }}
      >
        {[
          { name: "Pending", icon: <Dashboard /> },
          { name: "Exchange", icon: <Sync /> },
          { name: "Completed", icon: <CheckCircle /> },
          { name: "Members", icon: <People /> },
          { name: "Looks", icon: <Style /> },
        ].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ padding: "0.5rem" }}>
            <ListItemButton
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.3rem",
                paddingLeft: "1rem",
                background: "#E4E7F1",
                borderRadius: "1rem",
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      (
      <Box sx={{ display: "flex", gap: "0.5rem" }}>
        <CssBaseline />

        <AppBar
          sx={{
            width: { sm: "100%" },
            ml: { sm: `${drawerWidth}px` },
            background: "#F4F5FC",
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
                m : {xs : '0 auto' , sm : '0'}
              }}
            >
              STATELY
            </Typography>

            <Box
              sx={{
                ml: "auto",
                display: { xs: "none", sm: "block" },
              }}
            >
              <DayNavigation direction='row' width='234px' />
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
            margin: { xs: "3.4rem 0", sm: "3.8rem 0" },
            background: "red",
            height: "100vh",
            width: "100%",
            background: "#F5F4FC",
            borderRadius: "1rem",
          }}
        >
          <Box
            sx={{
              padding: "1rem",
            }}
          >
            <h1>hello</h1>
          </Box>
        </Box>

        {/* <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            background: "#F4F5FC",
          }}
        >
          <Toolbar />
          <Typography sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </Box> */}
      </Box>
      );
    </div>
  );
};

export default Sidebar;
