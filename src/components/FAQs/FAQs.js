import React from 'react';
import './FAQs.css';

const FAQs = () => {
  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer: "Our website helps you find and manage property listings with ease. You can filter properties based on location and price, add them to your cart, and proceed with checkout."
    },
    {
      question: "How do I filter properties?",
      answer: "You can filter properties by location and price using the filters available on the left side of the page. Simply select your desired location and/or set a price range to see the relevant properties."
    },
    {
      question: "Can I remove items from my cart?",
      answer: "Yes, you can remove items from your cart by clicking the 'Remove' button next to each property in the cart section."
    },
    {
      question: "How do I check out?",
      answer: "To check out, add the desired properties to your cart and click the 'Checkout' button. Fill out the required information in the checkout form and submit it to complete your purchase."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Currently, we accept various credit and debit cards. We are working on adding more payment options in the future."
    },
    {
      question: "Can I save my favorite properties?",
      answer: "Yes, you can mark properties as favorites by clicking the 'Save' icon. This allows you to easily access them later."
    },
    {
      question: "What should I do if I encounter a problem with the website?",
      answer: "If you encounter any issues, please contact our support team through the 'Contact Us' section. We will assist you as soon as possible."
    },
    {
      question: "How can I update my account information?",
      answer: "To update your account information, go to the 'Profile' section and make the necessary changes. Ensure you save the updates to apply them."
    },
    {
      question: "Can I cancel a booking?",
      answer: "Cancellation policies vary depending on the property. Please refer to the property details or contact our support team for specific cancellation instructions."
    },
    {
      question: "How do I subscribe to the newsletter?",
      answer: "You can subscribe to our newsletter by entering your email address in the subscription box at the bottom of the homepage. You'll receive updates on new properties and promotions."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes, we prioritize your privacy and security. Your personal information is encrypted and stored securely according to our privacy policy."
    },
    {
      question: "Can I access the website from my mobile device?",
      answer: "Yes, our website is fully responsive and optimized for mobile devices, allowing you to browse properties and manage your cart on the go."
    }
  ];

  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
