import React from 'react';
import { FaEnvelope, FaHome, FaPhoneAlt } from 'react-icons/fa'; // Importing specific icons
import './Contact.css'; // Custom CSS file

const Contact = () => {
  const infoCards = [
    {
      icon: <FaHome />, // React Icon for home
      title: 'ADDRESS',
      content: ['Elizabeth Tower, 6th Floor', 'Medtown, New York'],
      bgColor: '#0d47a1',
    },
    {
      icon: <FaPhoneAlt />, // React Icon for phone
      title: 'PHONE NUMBER',
      content: ['0123456789', '0123456789'],
      bgColor: '#0288d1',
    },
    {
      icon: <FaEnvelope />, // React Icon for email
      title: 'EMAIL',
      content: ['demo@example.com', 'demo@example.com'],
      bgColor: '#d32f2f',
    },
  ];

  return (
    <div className="contact-info">
      {infoCards.map((card, index) => (
        <div key={index} className="info-card" style={{ backgroundColor: card.bgColor }}>
          <div className="info-icon">{card.icon}</div>
          <h3>{card.title}</h3>
          {card.content.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Contact;
