import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MyAppContext } from './App';

function Login() {

  const {setLogin} = useContext(MyAppContext)


  const navigate = useNavigate();



  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     
    const storedEmail = localStorage.getItem('email')
    const storedName = localStorage.getItem('name');
    const storedPassword = localStorage.getItem('password');

    if (name === (storedName ||  storedEmail) && password === storedPassword) {
      setTimeout(() => {
        setLogin(true)
        navigate('/payment');

      }, 4000);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="payment">Login</h2>
      <input
        type="text"
        id="cardNumber"
        value={name}
        onChange={handleName}
        placeholder="Enter Username"
        className="inputdata"
        required
      />
      <input
        type="password"
        id="expiryDate"
        value={password}
        onChange={handlePassword}
        placeholder="Enter Your Password"
        className="inputdata"
        required
      />
      <div className="batan">
        <Button className="buttonSubmit" variant="contained" type="submit" style={{ color: 'black', background: 'white' }}>
          Login
        </Button>
        <Button
          onClick={() => navigate('/register')}
          className="buttonSubmit"
          variant="contained"
          type="submit"
          style={{ color: 'black', background: 'white' }}
        >
          New User?
        </Button>
      </div>
    </form>
  );
}

export default Login;
