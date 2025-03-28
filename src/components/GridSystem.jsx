import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function GridSystem() {
  return (
    <Box >
      {/* Grid Container */}
      <Grid container spacing={2} sx={{padding:'1rem',width:'100%'}}>
        {/* Grid Item 1 */}
        <Grid item xs={12} sm={6} md={3} sx={{ height: "100vh"  }}>
          <Box
            sx={{
              margin: { xs: "3.4rem 0", sm: "3.8rem 0" },
              background: "#F5F4FC",

              borderRadius: "1rem",
            }}
          >
            <h1>hello</h1>
          </Box>
        </Grid>

        {/* Grid Item 2 */}
        <Grid item xs={12} sm={6} md={3} sx={{ height: "100vh" }}>
          <Box
            sx={{
              margin: { xs: "3.4rem 0", sm: "3.8rem 0" },
              background: "#F5F4FC",

              borderRadius: "1rem",
            }}
          >
            <h1>hello</h1>
          </Box>
        </Grid>

        {/* Grid Item 3 */}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ height: "100vh"}}
        >
          <Box
            sx={{
              margin: { xs: "3.4rem 0", sm: "3.8rem 0" },
              background: "#F5F4FC",

              borderRadius: "1rem",
            }}
          >
            <h1>hello</h1>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
