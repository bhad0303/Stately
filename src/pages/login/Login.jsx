import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import "./Login.css";

import { Link } from "react-router";
import { Password } from "@mui/icons-material";




function Login() {
      
    const [formData,setFormData] = useState({
       email : '',
       password: ''
    })

    let handleSubmit = (event)=>{
       event.preventDefault();
       let resultData = {
         ...formData
       }

       console.log(resultData)

       setFormData({
        email : "",
        password : ""
       })
    }


    let handleChange =(event)=>{
       setFormData({
         ...formData,
         [event.target.name] : event.target.value
       })
    }


  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#F7FBFF",
        boxSizing: "border-box",
      }}
    >
      <Card sx={{ minWidth: "300px", padding: "1.3rem" ,boxShadow : '0 0 10px rgba(0,0,0,0.2)' }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              margin: "0 auto",
              letterSpacing: "0.2rem",
              color: "#D1A201",
              fontSize: 30,
              border: "2px solid #D1A201",
              width: "fit-content",
              fontWeight: 500,
            }}
          >
            STATELY
          </Typography>
          <Typography sx={{ fontSize: "2rem" ,fontWeight : 'bold',margin:'1rem 0'}}>Sing in</Typography>

          <form className="Login" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value ={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="*****"
                value ={formData.password}
                onChange={handleChange}
              />
            </div>
         

          <Button
            variant="contained"
            startIcon={<LoginIcon />}
            className="btn-grad"
            type="submit"
          >
            Sign in
          </Button>

          <div
            style={{
              textAlign: "center",
             

            }}
          >
            <Link to="/forgot" style={{
                color : 'black'
            }}>
              Forgot password
            </Link>
          </div>

          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
