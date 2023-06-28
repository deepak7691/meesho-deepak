import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [address, setAddress] = useState('');
    
  
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
      
      
      setTimeout(()=>{
        navigate("/meesho")
        
      },4000)
      
    
    };
  
   
  
    return (
      <form onSubmit={handleSubmit}>
        <h2 className="payment">Login </h2>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="Enter Usernmae"
          className="inputdata"
          required
        />
        <input
          type="password"
          id="expiryDate"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          placeholder="Enter Your Password"
          className="inputdata"
          required
        />
       
        
        <div className='batan'>
        <Button className="buttonSubmit" variant='contained' type="submit" style={{color:"black",background:"white"}}>
          Login
        </Button>
        <Button onClick={() => navigate("/register")} className="buttonSubmit" variant='contained' type="submit" style={{color:"black",background:"white"}}>
          New User ?
        </Button>
        </div>
      
      </form>
    );
}

export default Login