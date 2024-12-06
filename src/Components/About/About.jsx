import React, { useRef, useState } from "react";
import adultIcon from "../../Assets/icon-1.jpg";
import miniIcon from "../../Assets/icon-2.jpg";
import toddlerIcon from "../../Assets/icon-3.jpg";
import video from "../../Assets/video.mp4";
import "./About.css";

const SwimClasses = () => {
  // Create a reference for the video element
  const videoRef = useRef(null);

  // State to track whether the video is playing or paused
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause when the button is clicked
  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play();  // Play the video
      }
      setIsPlaying(!isPlaying);  // Toggle the state
    }
  };

  return (
    <>
      <div className="swim-classes">
        <div className="swim-card mini">
          <div className="icon-container">
            <div className="icon-wrapper">
              <img src={miniIcon} alt="Mini Class Icon" className="icon" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Swim Class for Mini</h3>
            <p className="card-instructor">Instructor: Adom Jonson</p>
            <div className="extra-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolorum, totam minus reprehenderit ratione odio dignissimos culpa in? Sunt itaqu</div>
            <button className="read-more-btn mini">Read More</button>
          </div>
        </div>

        <div className="swim-card toddler">
          <div className="icon-container">
            <div className="icon-wrapper">
              <img src={toddlerIcon} alt="Toddler Class Icon" className="icon" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Swim Class for Toddler</h3>
            <p className="card-instructor">Instructor: Adom Jonson</p>
            <div className="extra-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deleniti fuga consequuntur laboriosam? Aspernatur voluptatem ex facilis obcaecati volupt</div>
            <button className="read-more-btn toddler">Read More</button>
          </div>
        </div>

        <div className="swim-card adult">
          <div className="icon-container">
            <div className="icon-wrapper">
              <img src={adultIcon} alt="Adult Class Icon" className="icon" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Swim Class for Adult</h3>
            <p className="card-instructor">Instructor: Adom Jonson</p>
            <div className="extra-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deleniti fuga consequuntur laboriosam? Aspernatur voluptatem ex facilis </div>
            <button className="read-more-btn adult">Read More</button>
          </div>
        </div>
      </div>

      <div className="swimmer-section">
        <div className="image-container">
          <video ref={videoRef} className="swimmer-image" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="play-button" onClick={handlePlayPauseClick}>
            {isPlaying ? "❚❚" : "▶"} {/* Play (▶) or Pause (❚❚) icon */}
          </button>
        </div>
        <div className="text-container">
          <h3 className="subheading">about us</h3>
          <h1>Welcome To Pur Swimmer</h1>
          <h2>Book An Appointment Now</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deleniti fuga <br />consequuntur laboriosam? Aspernatur voluptatem ex facilis obcaecati voluptates, <br /> accusamus quod ducimus vero quae reprehenderit doloribus, quidem at aut repudiandae?.
          </p>
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </>
  );
};

export default SwimClasses;
