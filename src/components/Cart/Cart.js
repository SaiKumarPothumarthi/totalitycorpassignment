import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import "./Cart.css"

const Cart = ({ cart, totalCost, checkout,removeFromCart }) => {
  return (
    <aside className="cart">
      <h2>Booking Cart</h2>
      <div className="cartItems">
      {cart.length === 0 ? (
        <p>No properties in the cart.</p>
      ) : (
        <ul>
          {cart.map((property, index) => (
            
            <li key={index} className="order-item">
              <h3>{property.title}</h3>
              <p className='price-para'>${property.price}</p>
              <button onClick={() => removeFromCart(index)} className='remove-button' >
                <RxCrossCircled className='remove-icon' />
              </button>
            </li>
            
          ))}
        </ul>
      )}
      </div>
      <div className="cartSummary">
        <p>Total: ${totalCost.toFixed(2)}</p>
        <button onClick={checkout} disabled={cart.length === 0} className='cart-button'>Checkout</button>
      </div>
    </aside>
  );
};

export default Cart;
