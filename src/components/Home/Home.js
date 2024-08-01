import React, { useState, useEffect } from 'react';
import Filters from '../Filters/Filters';
import PropertyList from '../PropertyList/PropertyList';
import Cart from '../Cart/Cart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import propertiesData from '../../data/properties.json';
import NewsSection from '../NewsSection/NewsSection';
import PromotionalOffers from '../PromotionalOffers/PromotionalOffers';
import FAQs from '../FAQs/FAQs';
import ContactUs from '../ContactUs/ContactUs';
import './Home.css';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [cart, setCart] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [checkoutFormVisible, setCheckoutFormVisible] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  const addToCart = (property) => {
    setCart([...cart, property]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
    if(cart.length === 0){
      setCheckoutFormVisible(false)
    }
  };

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  const filterProperties = () => {
    let filteredProperties = propertiesData;
    if (locationFilter) {
      filteredProperties = filteredProperties.filter(
        (property) => property.location === locationFilter
      );
    }
    if (priceFilter) {
      filteredProperties = filteredProperties.filter(
        (property) => property.price <= priceFilter
      );
    }
    setProperties(filteredProperties);
  };

  const checkout = () => {
    if (cart.length >0){
      setCheckoutFormVisible(true);
    }else{
      setCheckoutFormVisible(false)
    }   
  };

  
  const onChangeName = (event) => {
    setName(event.target.value);
  }
  const onChangeEamil = (event) =>{
    setEmail(event.target.value);
  }
  const onChangeAddress = (event) =>{
    setAddress(event.target.value);
  }

  const submitCheckout = (event) => {
    event.preventDefault();
   
    if (totalCost >0){
      alert(`Congratulation! ${name} Checkout successful!`);
      setCart([]);
      setCheckoutFormVisible(false);
      setName("")
      setEmail("")
      setAddress("")
    }else{
      alert("Please add atleast one Property to proceed");
      setCheckoutFormVisible(false);
    }
  };

  return (

   
    <div className="home">
      <Filters
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        filterProperties={filterProperties}
      />
      <div className="content">
        <PropertyList properties={properties} addToCart={addToCart} />
        <div className='cart-con'>
          <Cart cart={cart} totalCost={totalCost} checkout={checkout} removeFromCart={removeFromCart} />
          <CheckoutForm 
              checkoutFormVisible={checkoutFormVisible} 
              submitCheckout={submitCheckout} 
              onChangeAddress={onChangeAddress}
              onChangeEamil={onChangeEamil}
              onChangeName={onChangeName}
              name={name}
              email={email}
              address={address}
          />
          <NewsSection />
          <PromotionalOffers />
          <FAQs />
          <ContactUs/>
        </div>
        
      </div>
    </div>
    
  );
};

export default Home;
