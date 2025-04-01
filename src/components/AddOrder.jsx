import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { TextField } from "@mui/material";
import actualData from "../data/text";
import { useContext } from "react";
import Context from "../context/orderContext";




function AddOrder({addOrder}) {


   const {order,setOrder} = useContext(Context);




  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    id: "",
    customerName: "",
    dateOrder: "",
    activityType: "",
    state: "",
  });

  //   form data handiling

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
 
  };


  const handleSubmit = (e)=>{
       
      setOrder((prevOrder)=>[...prevOrder,formData])
      handleClose();
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFocus = (event) => {
    event.target.style.border = "none";
  };

  return (
    <Box>
      <Button variant="contained" color="warning" onClick={handleOpen}>
        Add Order
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 3,
            borderRadius: 2,
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onSubmit={handleSubmit}
          >
            <div style={{ textAlign: "center" }}>
              <h2>Enter a Details</h2>
            </div>

            <TextField
              id="outlined-basic"
              label="id"
              variant="outlined"
              name="id"
              onFocus={handleFocus}
              onChange={handleChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="customerName"
              variant="outlined"
              name="customerName"
              onFocus={handleFocus}
              onChange={handleChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="date-order"
              variant="outlined"
              name="dateOrder"
              onFocus={handleFocus}
              onChange={handleChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="activity type"
              variant="outlined"
              name="activityType"
              onFocus={handleFocus}
              onChange={handleChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="state"
              variant="outlined"
              name="state"
              onFocus={handleFocus}
              onChange={handleChange}
              required
            />

            <Button
              variant="contained"
          
              sx={{
                background: "#D1A201",
                color: "black",
                "&:hover": { background: "#b8860b" },
                width: { xs: "100%", sm: "auto" },
                fontSize: { xs: "1rem", sm: "1.1rem" },
              }}
              type="submit"
            >
              Add Order
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default AddOrder;
