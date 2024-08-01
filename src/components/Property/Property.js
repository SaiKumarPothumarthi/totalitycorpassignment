import React from 'react';
import "./Property.css"

const Property = ({ property, addToCart }) => {
  return (
    <div className="property" data-id={property.id}>
      <img src={property.image} alt={property.title} className='home-img' />
      <div>
        <h3>{property.title}</h3>
        <p>{property.description}</p>
        <p>Price: ${property.price}</p>
        <p>Location: {property.location}</p>
        <button onClick={() => addToCart(property)}>Add to Cart</button>
      </div>
    </div>
  );  
};

export default Property;
