import React from 'react';
import './card.css';

const Card = ( { names, image, price, tax, netPrice } ) => {
    
  return(
    <div className="card">
      <h1>{names}</h1>
      <img className="product-img" src={image} alt="i" />
      <p>price: ${price} + tax:{tax}</p>
      <p>net price: {netPrice}</p>
      <div className="buy-button">
        <p>Buy now</p>
      </div>
    </div>
  );
 
}

export default Card;


