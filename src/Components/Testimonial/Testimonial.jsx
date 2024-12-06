import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Testimonial.css';

function Testimonial() {
  return (
 
    <div className="testimonial-wrapper">
    <div className="testimonial-container">
      <h2 className="testimonial-title">What Client Say?</h2>
      <div className="testimonial-quote">
      <FaQuoteLeft className="quote-icon left" />
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa deserunt consequuntur! Explicabo enim commodi laboriosam quam totam facere. Nemo animi expedita similique numquam molestiae. Soluta animi ad ratione corrupti!.</p>
        <FaQuoteRight className="quote-icon right" />
      </div>
    </div>
  </div>
  );
  
}

export default Testimonial;