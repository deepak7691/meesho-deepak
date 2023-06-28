import React, { useContext, useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { MyAppContext } from './App';

function Register() {
  const navigate = useNavigate();
  const {setCount} = useContext(MyAppContext)
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [address, setAddress] = useState('');
  const [open, setOpen] = useState(false);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setOpen(true);
    setTimeout(()=>{
      navigate("/login")
    },4000)
    
  
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="payment">New User Registration</h2>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={handleCardNumberChange}
        placeholder="Enter Your Name"
        className="inputdata"
        required
      />
      <input
        type="text"
        id="expiryDate"
        value={expiryDate}
        onChange={handleExpiryDateChange}
        placeholder="Enter Your Email"
        className="inputdata"
        required
      />
      <input
        type="text"
        id="cvv"
        value={cvv}
        onChange={handleCVVChange}
        placeholder="Enter Phone Number"
        className="inputdata"
        required
      />
      <input
        type="text"
        id="address"
        value={address}
        onChange={handleAddressChange}
        placeholder="Create Password"
        className="inputdata"
        required
      />
      <div className='batan'>
      <Button className="buttonSubmit" variant='contained' type="submit" style={{color:"black",background:"white"}}>
        Create Account
      </Button>
      <Button onClick={() => navigate("/login")} className="buttonSubmit" variant='contained'  style={{color:"black",background:"white"}}>
        Have an Account ?
      </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Successfully registered
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Now Plz Login <br></br>
            Redirecting you to Login Page
          </Typography>
        </Box>
      </Modal>
    </form>
  );
}

export default Register;
