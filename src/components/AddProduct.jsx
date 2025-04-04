import React, { useEffect, useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { TextField } from "@mui/material";
import actualData from "../data/text";
import { useContext } from "react";
import Context from "../context/orderContext";

function AddProduct({ addOrder }) {
  const { order, setOrder } = useContext(Context);


  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    orderid: "",
    productName: "",
    price: "",
    size: "",
    photo: "https://picsum.photos/seed/Cotton%20T-Shirt1/150/120",
  });

  // push product

  const pushProduct = async (formData) => {

    const formDataOrderId = formData.orderid;
    const finalOrder = order.find((o) => o.id === formDataOrderId);
    finalOrder.products.push(formData);
    setOrder((prevOrder) =>
      prevOrder.map((o) => (o.id === finalOrder.id ? finalOrder : o))
    );

    console.log(order);

    //Post updated order to server
    try {
        await fetch("http://localhost:5000/orders/SO92875", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              products: finalOrder.products,
            }),
          });
          
    } catch (error) {
      console.error("Error posting data:", error);
    }


  };

  //   form data handiling

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pushProduct(formData);  

    handleClose();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFocus = (event) => {
    event.target.style.border = "none";
  };

  return (
    <Box>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Add Product
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
              label="order id "
              variant="outlined"
              name="orderid"
              onFocus={handleFocus}
              onChange={handleChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="product name"
              variant="outlined"
              name="productName"
              onFocus={handleFocus}
              onChange={handleChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="product price"
              variant="outlined"
              name="price"
              onFocus={handleFocus}
              onChange={handleChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="product size"
              variant="outlined"
              name="size"
              onFocus={handleFocus}
              onChange={handleChange}
              required
            />

            <TextField
              id="outlined-basic"
              label="product photo"
              variant="outlined"
              name="photo"
              onFocus={handleFocus}
              onChange={handleChange}
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
              Add Product
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default AddProduct;
