import React from 'react';
import divider from "../../Assets/divider.png";
import './Pricing.css';

function PricingPlan() {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">OUR PRICING PLAN</h1>
      <div className="pricing-divider">
        <img src={divider} alt="" />
      </div>
      
      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="pricing-icon-container">
            <span className="pricing-icon">💠</span>
          </div>
          <h2>Silver Pack</h2>
          <div className="price">
            <span className="amount">$95</span>
            <span className="period">/month</span>
          </div>
          <ul className="features">
            <li>Mini - Toddler</li>
            <li>Coffee Break</li>
            <li>Total Classes - 15</li>
            <li>Group Lesson</li>
          </ul>
          <button className="pricing-register-btn">Register Now</button>
        </div>

        <div className="pricing-card featured">
          <div className="pricing-icon-container">
            <span className="pricing-icon">👑</span>
          </div>
          <h2>Premium Pack</h2>
          <div className="price">
            <span className="amount">$95</span>
            <span className="period">/month</span>
          </div>
          <ul className="features">
            <li>Mini - Toddler</li>
            <li>Coffee Break</li>
            <li>Total Classes - 15</li>
            <li>Group Lesson</li>
          </ul>
          <button className="pricing-register-btn">Register Now</button>
        </div>

        <div className="pricing-card">
          <div className="pricing-icon-container">
            <span className="pricing-icon">💎</span>
          </div>
          <h2>Platinum Pack</h2>
          <div className="price">
            <span className="amount">$95</span>
            <span className="period">/month</span>
          </div>
          <ul className="features">
            <li>Mini - Toddler</li>
            <li>Coffee Break</li>
            <li>Total Classes - 15</li>
            <li>Group Lesson</li>
          </ul>
          <button className="pricing-register-btn">Register Now</button>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;