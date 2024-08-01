import React from 'react';
import Property from '../Property/Property';
import "./PropertyList.css"

const PropertyList = ({ properties, addToCart }) => {
  return (
    <section id="propertyListings">
      {properties.map((property) => (
        <Property key={property.id} property={property} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default PropertyList;
