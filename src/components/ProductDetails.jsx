import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

function ProductDetails() {

     
   const  { mode }  = useThemeContext();



  return (
    <Card sx={{ maxWidth: "100%", padding: "1rem",   background: mode === 'light' ? 'white' : '#282828', color : mode === 'light' ?'black' : 'white' }}>
      <CardContent>
        <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
          Rails Wyatt Long-Slevee Shirt
        </Typography>
      </CardContent>

      <Box
        sx={{
          display: "flex",
          flexDirection: {md:'row-reverse' ,sm:'column'}
        }}
      >
        <CardMedia
          sx={{ width: "55%", objectFit: "cover", height: "400px" }}
          image="https://toptenmartltd.com/wp-content/uploads/2024/09/Formal-shirt-1-600x600.jpg"
          title="green iguana"
        />
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <CardContent>
            <Typography
              color="text.secondary"
              variant="subtitle2"
              component="div"
            >
              Brand
            </Typography>
            <Typography variant="body2">
              Rails Wyatt
            </Typography>
          </CardContent>

          <CardContent>
            <Typography
              color="text.secondary"
              variant="subtitle2"
              component="div"
            >
              Tier
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                background: "#D2A100",
                width: "fit-content",
                padding: "0 0.7rem",
                borderRadius: "0.2rem",
              }}
            >
              LUXE
            </Typography>
          </CardContent>

          <Box
            sx={{
              display: "flex",
            }}
          >
            <CardContent>
              <Typography
                color="text.secondary"
                variant="caption"
                component="div"
              >
                Size
              </Typography>
              <Typography variant="overline" >
                Small
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                color="text.secondary"
                variant="caption"
                component="div"
              >
                Fit
              </Typography>
              <Typography variant="overline" >
                Natural Fit
              </Typography>
            </CardContent>
          </Box>

          <Box
            sx={{
              display: "flex",
            }}
          >
            <CardContent>
              <Typography
                color="text.secondary"
                variant="caption"
                component="div"
              >
                Color
              </Typography>
              <Typography variant="overline" >
                Stone
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                color="text.secondary"
                variant="caption"
                component="div"
              >
                Fabric Content
              </Typography>
              <Typography variant="overline" >
                95% cotton , 2% Sapndex
              </Typography>
            </CardContent>
          </Box>
                     
               
            <CardContent>
              <Typography
                color="text.secondary"
                variant="caption"
                component="div"
              >
                Description
              </Typography>
              <Typography variant="overline" sx={{ lineHeight:'0.8rem'}}>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nam nobis fuga sequi quas? Dolore optio, laboriosam, quo eos, in voluptas consequuntur vero harum ab neque saepe velit amet totam.
                </Typography>
            </CardContent>


            <CardContent>
              <Typography
                color="text.secondary"
                variant="caption"
                component="div"
              >
                    Country of Origin
              </Typography>
              <Typography variant="overline" sx={{ lineHeight:'0.8rem'}}>

                  Bangladesh
                </Typography>
            </CardContent>



          <Box
            sx={{
              display: "flex",
            }}
          >
            <CardContent>
              <Typography
                color="text.secondary"
                variant="caption"
                component="div"
              >
                MSRP
              </Typography>
              <Typography variant="overline" >
                99.00
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                color="text.secondary"
                variant="caption"
                component="div"
              >
                Cost
              </Typography>
              <Typography variant="overline" >
                       12.25
               </Typography>
            </CardContent>
          </Box>
                   

          <CardActions
            sx={{
              display: "flex",
              flexWrap: "wrap",
             
            }}
          >
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderRadius: "1rem",
                fontWeight: "normal",
                color : mode === 'light' ?'black' : 'white',
                border: mode === 'light' ?  "1px solid black": '1px solid white',
              }}
            >
              Edit item
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderRadius: "1rem",
                fontWeight: "normal",
                color : mode === 'light' ?'black' : 'white',
                border: mode === 'light' ?  "1px solid black": '1px solid white',              }}
            >
              Add to lock
            </Button>

            <Button
              size="small"
              variant="outlined"
              sx={{
                borderRadius: "1rem",
                fontWeight: "normal",
                color: "red",
                border: "1px solid red",
              }}
            >
              Remove item
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
}

export default ProductDetails;
