import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import g3 from "../../Assets/g3.jpeg";
import g4 from "../../Assets/g4.jpeg";
import g5 from "../../Assets/g5.jpeg";
import "./Gallery.css";

const Gallery = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 5,
      pagination: {
        el: `.swiper-pagination`,
        clickable: true,
      },
      loop: true,
      navigation: {
        nextEl: `.swiper-button-nexts`,
        prevEl: `.swiper-button-prevs`,
      },
    });

    swiperRef.current.swiperInstance = swiper;
  }, []);

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiperInstance) {
      swiperRef.current.swiperInstance.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiperInstance) {
      swiperRef.current.swiperInstance.slidePrev();
    }
  };

  return (
    <div className="desktop_3" unique-script-id="w-w-dm-id">
      <div className="gallery-header">
        <h2>OUR GALLERY</h2>
        <div className="underline">
          <span className="line"></span>
          <span className="circle"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="swiper-container mySwiper" ref={swiperRef}>
            <div className="btn">
              <div className="swiper-button-nexts" onClick={handleNextClick}>
                <img
                  className="nextArrow"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Vector.png"
                  alt="Next"
                />
              </div>
              <div className="swiper-button-prevs" onClick={handlePrevClick}>
                <img
                  className="prevArrow"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Vector.png"
                  alt="Previous"
                />
              </div>
            </div>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img className="mainImage" src={g3} alt="Slide 1" />
              </div>
              <div className="swiper-slide">
                <img className="mainImage" src={g4} alt="Slide 2" />
              </div>
              <div className="swiper-slide">
                <img className="mainImage" src={g5} alt="Slide 3" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
