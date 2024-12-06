import React, { useRef, useState } from "react";
import img1 from "../../Assets/11.jpeg";
import img2 from "../../Assets/2.jpeg";
import img3 from "../../Assets/3.jpeg";
import img4 from "../../Assets/4.jpeg";
import img5 from "../../Assets/5.jpeg";
import "./Courses.css";

const ClassCard = ({ age, title, description, time, totalClasses, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const cardRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded((prev) => {
      const newState = !prev;

      // If expanding, scroll the card into view
      if (newState) {
        setTimeout(() => {
          cardRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100); // Delay to allow animation to begin
      }

      return newState;
    });
  };


  return (
    <div className="class-card-course" ref={cardRef}>
      <div className="card-header-course" onClick={toggleExpand}>
        <div className="card-title-section-course">
          <div className="icon-wrapper-course">🏊</div>
          <h2 className="age-text-course">{age}</h2>
        </div>
        <h3 className="class-title-course">{title}</h3>
        <button className="expand-button-course">{isExpanded ? "−" : "+"}</button>
      </div>
      <div
        className="card-content-course"
        style={{
          height: isExpanded ? `${contentRef.current?.scrollHeight}px` : "0",
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div className="card-content-inner-course" ref={contentRef}>
          <div className="card-grid-course">
            <div className="card-details-course">
              <h3 className="title-course">{title.toUpperCase()}</h3>
              <p className="age-text-course">{age}</p>
              <p className="time-course">Class Time: {time}</p>
              <p className="description-course">{description}</p>
              <p>Total Classes: {totalClasses}</p>
              <button className="register-button-course">Register Now</button>
            </div>
            <div className="image-container-course">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container-course">
      <header className="header-course">
        <h1>Our Classes</h1>
        <div className="header-line-course"></div>
      </header>
      <div className="cards-container-course">
        <ClassCard
          age="2-3 Years"
          title="Mini Infant Class"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud."
          time="10am - 11am"
          totalClasses="20"
          image={img1}
        />
        <ClassCard
          age="3-4 Years"
          title="Junior Class"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud."
          time="11am - 12pm"
          totalClasses="15"
          image={img2}
        />
        <ClassCard
          age="4-5 Years"
          title="Toddler Class"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud."
          time="1pm - 2pm"
          totalClasses="18"
          image={img3}
        />
         <ClassCard
          age="5-15 Years"
          title="Beginer Class"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud."
          time="1pm - 2pm"
          totalClasses="18"
          image={img4}
        />

         <ClassCard
          age="15-20 Years"
          title="Adult Class"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud."
          time="1pm - 2pm"
          totalClasses="18"
          image={img5}
        />
      </div>
    </div>
  );
};

export default App;
