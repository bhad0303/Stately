import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OrderList from "./OrderList";
import SelectedOrder from "./SelectedOrder";
import ProductDetails from "./ProductDetails";
import { useThemeContext } from "../context/ThemeContext";

export default function GridSystem({ order }) {
  
  let {mode} = useThemeContext();


  

  return (
    <Box>
      {/* Grid Container */}
      <Grid container  rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ padding: "1rem", width: "100%" }}>
        {/* Grid Item 1 */}
        <Grid item xs={12} sm={6} md={6} lg={3} sx={{ height: "100vh" }}>
          <Box
            sx={{
              margin: { xs: "3.4rem 0", sm: "3.8rem 0" },
              background: mode === 'light' ? '#f5f4fc' : '#282828',
              borderRadius: "1rem",
              transition: "all 0.3s ease-in-out",
              height : '100%',
              overflowY: 'scroll',
              '&::-webkit-scrollbar':{
                display : 'none',
              },
              "&:hover": {
                transform: "scale(1)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <OrderList order={order} />
          </Box>
        </Grid>

        {/* Grid Item 2 */}
        <Grid item xs={12} sm={6} md={6} lg={3} sx={{ height: "100vh" }}>
          <Box
            sx={{
              margin: { xs: "3.4rem 0", sm: "3.8rem 0" },
              background: mode === 'light' ? '#f5f4fc' : '#282828', 
               height : '100%',
              borderRadius: "1rem",
              padding: "0.5rem 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <SelectedOrder />
          </Box>
        </Grid>

        {/* Grid Item 3 */}
        <Grid item xs={12} sm={12} md={12} lg={6} >
          <Box
            sx={{
              margin: { xs: "3.4rem 0", sm: "3.8rem 0" },
              background: mode === 'light' ? '#f5f4fc' : '#282828', 
              borderRadius: "1rem",
              padding : '2rem 1rem',
              height : '100%',
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
              },
            }}
          >

            <ProductDetails />


          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
