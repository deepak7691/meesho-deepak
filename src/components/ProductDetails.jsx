import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductData } from './data';
import { Rating } from '@mui/material';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Button } from '@mui/material';
import { AddShoppingCart, ShoppingCart, Payment } from '@mui/icons-material';
import '../Styles/productDetails.css';

function ProductDetails() {
  const { id } = useParams();

  // Find the product with the matching ID
  const product = ProductData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div className="product-not-found">Product not found.</div>;
  }

  return (
    <div className="product-details">
      <div className="additional-photos">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Additional Image ${index}`} className="additional-image" />
        ))}
      </div>
      <div className="main-image">
        <img src={product.thumbnail} alt={product.title}  className='main-image'/>
        <div className="buttons">
          <Button variant="contained" startIcon={<AddShoppingCart />}>
            Add to Cart
          </Button>
          <Button variant="contained" startIcon={<Payment />}>
            Buy Now
          </Button>
        </div>
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <FormControl component="fieldset" className="size-selection">
          <p>Select Size:</p>
          <RadioGroup row defaultValue="" name="size">
            <FormControlLabel value="S" control={<Radio />} label="S" />
            <FormControlLabel value="M" control={<Radio />} label="M" />
            <FormControlLabel value="L" control={<Radio />} label="L" />
            <FormControlLabel value="XL" control={<Radio />} label="XL" />
          </RadioGroup>
        </FormControl>
        <ul className="product-details-list">
          <li>Discount: {product.discountPercentage}% off</li>
          <li>
            Rating: <Rating name="product-rating" value={product.rating} precision={0.5} readOnly />
          </li>
          <li>Brand: {product.brand}</li>
          <li>Category: {product.category}</li>
          <li>Stock: {product.stock}</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
