import React, { useContext } from 'react';
import { MyAppContext } from './App';
import '../Styles/cart.css';
import safety from "../Images/safety.png"
import emptyCart from "../Images/emptyCart.png"
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();

    const navigateToHome = () => {
         navigate("/meesho")
    }
  const { cartItem, setCartItem } = useContext(MyAppContext);

  const removeItem = (productId) => {
    const updatedCart = cartItem.filter((product) => product.id !== productId);
    setCartItem(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItem.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  return (
    <>
    {cartItem.length ? ( <div className="cart-containers">
      <div className="products-section">
        <h3 className='productName'>Cart {cartItem.length} Items</h3>
        <div className="products-all">
          {cartItem.map((product) => (
            <div className="cart-items" key={product.id}>
              <div className="item-image">
                <img src={product.thumbnail} alt={product.title} className="photo" />
              </div>
              <div className="item-details">
                <h3 className='productName'>{product.title}</h3>
                <p className='textc'>₹{product.price}</p>
                <p className='textc'>All issues easy returns allowed</p>
                <p className='textc'>Qty: {product.quantity}</p>
                <button className='btn' onClick={() => removeItem(product.id)}>REMOVE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pricing-section">
        <h3  className='productName'>Price Details</h3>
        <div className="price-info">
          <p>Total Product Price       </p>
          <p>+ ₹{calculateTotal()}</p>
        </div>
        
        <div className="orderinfo">
          <p className='productName'>Order Total</p>
          <p>₹{calculateTotal()}</p>
        </div>
        <div className="clicking">
            <p className='textc abc'> Clicking on Continue will not deduct any money</p>
        </div>
        <div>
            <button className='buttonss'>Continue</button>
        </div>
        <div className="safety">
            <img src={safety} className='safetyImage'/>
        </div>
      </div>
    </div>) : 
    (<div className='empty'>
        <img src={emptyCart} alt='emptyImage' className='emptyImage'/>
        <p className='yourcartEmpty'>Your cart is empty</p>
        <p className='xtra'>Just relax, let us help you find some first-class products</p>
        <button className='start' onClick={navigateToHome}> Start Shopping</button>

    </div>)
    
    }
   
    </>
  );
}

export default Cart;
