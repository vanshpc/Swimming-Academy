import React, { useState } from 'react';

import download from "../../Assets/download.jpg";
import download1 from "../../Assets/download1.jpg";
import images from "../../Assets/images.jpg";
import "./Home.css";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: download1,
            subtitle: 'swimming',
            title: 'A HEALTHY ACTIVITY FOR YOUR KIDS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            image: download,
            subtitle: 'swimming',
            title: 'SWIMMING FOR FITNESS',
            description: 'Swimming is a low-impact activity that has many physical and mental health benefits.'
        },
        {
            image: images,
            subtitle: 'swimming',
            title: 'LEARN TO SWIM',
            description: 'Start early and develop confidence in the water for a lifetime of safety and fun.'
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="carousel">
            <div
                className="carousel-slide"
                style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            >
                <div className="carousel-overlay"></div>
                
                {/* Use key to re-trigger animations on each slide change */}
                <div className="carousel-content" key={currentIndex}>
                    <p className="carousel-subtitle">{slides[currentIndex].subtitle}</p>
                    <h1 className="carousel-title">{slides[currentIndex].title}</h1>
                    <p className="carousel-description">{slides[currentIndex].description}</p>
                    <button className="carousel-button">Read More</button>
                </div>

                <div className="carousel-arrow carousel-arrow-left" onClick={handlePrevious}>
                    &lt;
                </div>
                <div className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
                    &gt;
                </div>
            </div>
        </div>
    );
}
