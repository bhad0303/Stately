import React from "react";
import { useContext } from "react";
import orderContext from "../context/orderContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

const SelectedOrder = () => {
  const { selectedOrder } = useContext(orderContext);
  const { mode } = useThemeContext(); 

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "86%", md: "92%", lg: "87%" },
        maxWidth: "450px",
        minHeight: "250px",
        borderRadius: "1rem",
        background: mode === 'light' ? 'white' : '#3f3f3f',
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
            >
              {selectedOrder.customerName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Date Order: {selectedOrder.dateOrder}
            </Typography>
            <Typography variant="body2" color="error" fontWeight="500">
              {selectedOrder.activityType}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              alignItems: { xs: "flex-start", sm: "flex-end" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: mode === 'light' ? 'black' : 'white',
                textAlign: { xs: "left", sm: "right" },
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              {selectedOrder.id}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                textTransform: "uppercase",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {selectedOrder.state}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SelectedOrder;
