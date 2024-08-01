import React from 'react';
import "./CheckoutForm.css"
const CheckoutForm = ({ checkoutFormVisible, submitCheckout ,name,email,address,onChangeName,onChangeEamil,onChangeAddress}) => {
  if (!checkoutFormVisible) return null;
 
  return (
    <div id="checkoutForm" style={{ display: checkoutFormVisible ? 'block' : 'none' }} className='final-form'>
      <h2 className='final-head'>Checkout</h2>
      <form onSubmit={submitCheckout} className='form-class'>
        <input type="text"  value={name} onChange={onChangeName} placeholder="Name" required className='form-ele'/>
        <input type="email"  value={email} onChange={onChangeEamil} placeholder="Email" required className='form-ele' />
        <input type="text"  value={address} onChange={onChangeAddress} placeholder="Address" required className='form-ele' />
        <button type="submit" className='confirm-button'>Confirm Booking</button>
      </form>
    </div>
  ); 
};

export default CheckoutForm;
