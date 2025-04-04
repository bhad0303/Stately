import React, {  useState } from "react";
import { Button, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import actualData from "../data/text.js";
import { useContext } from "react";
import Context from "../context/orderContext.js";
import { useThemeContext } from "../context/ThemeContext.jsx";

function OrderList() {
  const [selectedCard, setSelectedCard] = useState(0);

  const {order,setOrder} = useContext(Context);


  const {  setSelectedOrder } = useContext(Context);

  const {mode}   = useThemeContext();



  const handleClick = (item) => {
    setSelectedOrder(item);
  };

  return (
    <div
      style={{
        padding: "0 1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Pending</h2>
        <Button
          variant="contained"
          sx={{
            background: "#D6E8FF",
            color: "#5B3FB3",
            borderRadius: "3rem",
            fontSize: "1.1rem",
            padding: "0 ",
          }}
        >
          197
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "4px",
            background: "#859396",
            width: "19%",
            borderRadius: "5px",
          }}
        ></div>

        <div
          style={{
            height: "4px",
            background: "#D3A20E",
            width: "19%",
            borderRadius: "5px",
          }}
        ></div>

        <div
          style={{
            height: "4px",
            background: "red",
            width: "19%",
            borderRadius: "5px",
          }}
        ></div>

        <div
          style={{
            height: "4px",
            background: "blue",
            width: "19%",
            borderRadius: "5px",
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <TextField
          id="outlined-basic"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "2rem", // Apply borderRadius here
            },
            margin: "1rem 0",
          }}
          placeholder="Search..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <FilterAltOffIcon />
      </div>

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
          overflowY: "scroll",
          maxHeight: "100vh",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        { order && order.map((item, index) => (
          
          <Card
            sx={{
              borderLeft: selectedCard === index ? "5px solid yellow" : "none",
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "scale(1)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
              },    
            }}
            onClick={() => handleClick(item)}
          >
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                height: "100%",
                background: mode === 'light' ? 'white' : '#3f3f3f',
                color : mode === 'light' ? 'black' : 'white',

                "&[data-active]": {
                  backgroundColor: mode === 'light' ?  "#F3F6FB" : '#717171',

                  "&:hover": {
                    backgroundColor: mode === 'light' ? "#F3F6FB" : '#717171  ',
                  },
                },
              }}
            >
              ,
              <CardContent sx={{ height: "100%" ,   color : mode === 'light' ? 'black' : 'white'}}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="button " >
                    {item.customerName}
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    {item.id}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1" >
                    {item.dateOrder}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="white"
                    sx={{
                      background: "black",
                      borderRadius: "1rem",
                      display: "inline",
                      padding: "0.3rem 0.5rem",
                    }}
                  >
                    {item.state}
                  </Typography>
                </Box>

                <Typography variant="body2" color="red">
                  {item.activityType}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default OrderList;
