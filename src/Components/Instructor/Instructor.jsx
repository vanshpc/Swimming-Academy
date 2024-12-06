import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaSwimmer, FaTwitter } from "react-icons/fa";
import inst1 from "../../Assets/inst1.jpeg";
import inst2 from "../../Assets/inst2.jpeg";
import inst3 from "../../Assets/inst3.jpeg";
import "./Instructor.css";

const InstructorCard = ({ image, title, name, description, backgroundColor }) => {
    return (
      <div className="instructor-card">
        <img src={image} alt={name} className="instructor-card-image" />
        <div
          className="instructor-card-content"
          style={{ backgroundColor: backgroundColor }}
        >
          <h3 className="instructor-card-title">{title}</h3>
          <p className="instructor-card-name">{name}</p>
          <p className="instructor-card-description">{description}</p>
          <div className="instructor-social-icons">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaGooglePlusG />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    );
  };
const Instructor = () => {
    return (
        <div className="instructor-section">
          <div className="instructor-header">
            <h2 className="instructor-title">OUR BEST INSTRUCTOR</h2>
            <div className="instructor-divider">
              <div className="divider-line"></div>
              <FaSwimmer className="divider-icon" />
              <div className="divider-line"></div>
            </div>
          </div>
          <div className="instructor-cards-container">
            <InstructorCard
              image={inst1}
              title="SWIM INSTRUCTOR"
              name="Jhon doe"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              backgroundColor="#ef4444"
            />
            <InstructorCard
              image={inst2}
              title="SWIM INSTRUCTOR"
              name="Jane Doe"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              backgroundColor="#3b82f6"
            />
            <InstructorCard
              image={inst3}
              title="SWIM INSTRUCTOR"
              name="John Smith"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              backgroundColor="#1d4ed8"
            />
          </div>
        </div>
      );
};

export default Instructor;


