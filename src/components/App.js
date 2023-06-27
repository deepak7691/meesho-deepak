import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import HomeReplace from './HomeReplace';
import Meesho from './Meesho';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

export const MyAppContext = React.createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  const [login, setLogin] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState(0);

  const contextValue = {
    inputValue,
    setInputValue,
    login,
    setLogin,
    cartItem,
    setCartItem,
    count, 
    setCount
  };

  return (
    <MyAppContext.Provider value={contextValue}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meesho" element={<Meesho />} />
          <Route path="/homeReplace/:category" element={<HomeReplace />} />
          <Route path="/products/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </MyAppContext.Provider>
  );
}

export default App;
