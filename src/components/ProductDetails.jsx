import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductData } from './data';
import { Button } from '@mui/material';
import { AddShoppingCart, Payment } from '@mui/icons-material';
import '../Styles/productDetails.css';
import loader from "../Images/loader.gif"
import { MyAppContext } from './App';

function ProductDetails() {

  const navigate = useNavigate();
  const {cartItem , setCartItem, setCount} = useContext(MyAppContext)
  const { id } = useParams();
  const [loaders, setLoaders] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

   // Find the product with the matching ID
   const product = ProductData.find((product) => product.id === parseInt(id));

  const handleLoader = () => {
    setCount((prev) => prev + 1)
    setLoaders(false);
    setCartItem([...cartItem,product])
    setTimeout(() => {
      setLoaders(true);
    }, 600);
  }

  const  navigatePayment = () =>{
      navigate("/payment")
  }
  

  const handleAdditionalImageClick = (image) => {
    setSelectedImage(image);
  }

 

  if (!product) {
    return <div className="product-not-found">Product not found.</div>;
  }

  return (
    <>
      {loaders ? (
        <div className="product-details">
          <div className="additional-photos">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Additional Image ${index}`}
                className={`additional-image ${selectedImage === image ? 'selected' : ''}`}
                onClick={() => handleAdditionalImageClick(image)}
              />
            ))}
          </div>
          <div className="main-section">
            <img src={selectedImage || product.thumbnail} alt={product.title} className="mainpic" />
            <div className="buttons">
              <Button onClick={handleLoader} variant="outlinedst" startIcon={<AddShoppingCart />} style={{ border: '1px solid rgb(159, 32, 137)', color: 'rgb(159, 32, 137)' }}>
                Add to Cart
              </Button>
              <Button onClick={navigatePayment} variant="contained" startIcon={<Payment />} style={{ backgroundColor: 'rgb(159, 32, 137)' }}>
                Buy Now
              </Button>
            </div>
          </div>
          <div className="product-info">
            <div className="productDisName">
              <h2 className="product-title">{product.title}</h2>
              <h4 className="product-price">Price: ${product.price}</h4>
            </div>
            <div className="size-selection">
              <h2 className="headings">Select Size:</h2>
              <div className="radio-group">
                <label>
                  <input type="radio" name="size" value="S" />
                  S
                </label>
                <label>
                  <input type="radio" name="size" value="M" />
                  M
                </label>
                <label>
                  <input type="radio" name="size" value="L" />
                  L
                </label>
                <label>
                  <input type="radio" name="size" value="XL" />
                  XL
                </label>
              </div>
            </div>
            <div className="product-details-list">
              <h2 className="headings">Product details</h2>
              <p>Discription: {product.description}</p>
              <p>Rating: {product.rating}</p>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
              <p>Stock: {product.stock} left</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader" style={{ backgroundColor: loaders ? 'white' : 'rgb(51 51 51 / 100%)' }}>
          <img className="loadingMeesho" src={loader} alt="Loading" />
        </div>
      )}
    </>
  );
}

export default ProductDetails;
