import React from 'react';
import { FaLink } from "react-icons/fa6";
import './Blog.css';


const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-card">
        <div className="blog-relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/fYSVAMR2nB1GSiq0xBrbNVHOU9Vjk6MPsNLEI4QSCy0PRF7JA.jpg"
            alt="Child swimming with goggles in a pool"
            className="blog-card-img"
          />
          <div className="blog-overlay">
          <FaLink className='blogi'/>
          </div>
          <div className="blog-date">
            <p>Feb</p>
            <p>21</p>
          </div>
        </div>
        <div className="blog-card-content">
          <h2>Swimming Is The Best Physical Activity</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labo rloreb magna aliquaaliquip.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="blog-card">
        <div className="blog-relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/m3VpEJ0vOiqDORv09ZttWogffIC2W1RJmecLiD5niivFFVsnA.jpg"
            alt="Child swimming underwater with pink goggles"
            className="blog-card-img"
          />
          <div className="blog-overlay">
          <FaLink className='blogi' />
          </div>
          <div className="blog-date">
            <p>Feb</p>
            <p>24</p>
          </div>
        </div>
        <div className="blog-card-content">
          <h2>Swimming Is The Best Physical Activity</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labo rloreb magna aliquaaliquip.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="blog-card">
        <div className="blog-relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/vrDEm3mfiAzegELgzdp0a0dSz3kA98kDnc1Q57PASmCgiK2TA.jpg"
            alt="Child with pink goggles in a pool"
            className="blog-card-img"
          />
          <div className="blog-overlay">
          <FaLink className='blogi' />
          </div>
          <div className="blog-date">
            <p>Feb</p>
            <p>26</p>
          </div>
        </div>
        <div className="blog-card-content">
          <h2>Swimming Is The Best Physical Activity</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labo rloreb magna aliquaaliquip.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;