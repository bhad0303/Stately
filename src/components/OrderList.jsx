import React, { useState } from "react";
import { Button, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import data from '../data/card.json'

function OrderList() {
  const [selectedCard, setSelectedCard] = useState(0);

  console.log(data)

  let cards = [
    {
      title: "hello",
      description: "0",
    },
  ];

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
        }}
      >
        {cards.map((card, index) => (
          <Card>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
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
