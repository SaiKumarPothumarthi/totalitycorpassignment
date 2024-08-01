import React from 'react';
import './PromotionalOffers.css';

const PromotionalOffers = () => {
  const offers = [
    {
      title: 'Limited Time Discount',
      description: 'Get a 20% discount on all properties listed this month. Don\'t miss out on this limited-time offer!',
      details: 'Visit our website to view all discounted properties and book your next home today.'
    },
    {
      title: 'Free Property Consultation',
      description: 'Schedule a free consultation with one of our property experts and find the perfect property for you.',
      details: 'Contact us to book your free consultation and get expert advice on buying or renting a property.'
    }
  ];

  return (
    <div className="promotional-offers">
      <h2>Promotional Offers</h2>
      {offers.map((offer, index) => (
        <div key={index} className="offer">
          <h3>{offer.title}</h3>
          <p>{offer.description}</p>
          <p>{offer.details}</p>
        </div>
      ))}
    </div>
  );
};

export default PromotionalOffers;
