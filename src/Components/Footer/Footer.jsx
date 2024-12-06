import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';
import blog1 from '../../Assets/blog1.jpeg';
import blog2 from '../../Assets/blog2.jpeg';
import blog3 from '../../Assets/blog3.jpeg';
import './Footer.css'; // Custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Twitter Feed Section */}
        <div className="footer-section">
          <h3>Twitter Feed</h3>
          <div className="tweet">
            <p>
              <span className="author">Post By: John Doe</span> <span className="date">12 Feb 2017</span>
            </p>
            <p>#There are many <a href="#">“variations”</a> of text</p>
            <p>Lorem Ipsum available njhgh fhg excercise</p>
          </div>
          <div className="tweet">
            <p>
              <span className="author">Post By: John Doe</span> <span className="date">12 Feb 2017</span>
            </p>
            <p>There are many <a href="#">#“variations”</a> passages of text</p>
          </div>
        </div>

        {/* About Section */}
        <div className="footer-section about">
          <h3>Swimmer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut labore et dolore magna aliqua.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaGooglePlusG />
            <FaPinterestP />
            <FaYoutube />
          </div>
        </div>

        {/* Latest Post Section */}
        <div className="footer-section">
          <h3>Latest Post</h3>
          <div className="latest-posts">
            <img src={blog1} alt="Post 1" />
            <img src={blog2} alt="Post 2" />
            <img src={blog3} alt="Post 3" />
            <img src={blog1} alt="Post 4" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2024 <strong>Swimmer</strong> Made with ❤️ by Vansh.</p>
      </div>
    </footer>
  );
};

export default Footer;
