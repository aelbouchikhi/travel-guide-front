import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      // partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    if(currentSlide === 0)
         document.querySelector('.shadow-left').style.background = 'transparent';
    else
         document.querySelector('.shadow-left').style.backgroundImage = 'linear-gradient(to right, rgb(255, 255, 255, 1) 0%, rgb(255, 255, 255, 0) 100%)';
  
    if(currentSlide === 2)
         document.querySelector('.shadow-right').style.background = 'transparent';
    else
         document.querySelector('.shadow-right').style.backgroundImage = 'linear-gradient(to left, rgb(255, 255, 255, 1) 0%, rgb(255, 255, 255, 0) 100%)';
    
  };

  return (
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        customButtonGroup={<ButtonGroup />}
        className='font-montserrat'
      >
        <div className="card">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/f9/eb/caption.jpg?w=600&h=600&s=1&cx=941&cy=299&chk=v1_18cfa51ea9b832b15689" />
          <h3>yellowstone<br/>national park,WY</h3>
        </div>
        <div className="card">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/1e/34/fe/tombe-dei-merenidi.jpg?w=600&h=600&s=1" />
          <h3>fes, morocco</h3>
        </div>
        <div className="card">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/65/tangier.jpg?w=600&h=600&s=1" />
          <h3>tangier,<br/>morocco</h3>
        </div>
        {/* <div className="card">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c5/7c/68/caption.jpg?w=600&h=600&s=1&cx=950&cy=1766&chk=v1_9ee2771da71f55a7ac6a" />
          <h3>New York City,<br/>NY</h3>
        </div> */}
        <div className="card">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ae/5d/ec/caption.jpg?w=600&h=600&s=1" />
           <h3>cancun, mexico</h3>
        </div>
        <div className="card">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=600&h=600&s=1" />
          <h3>landon, UK</h3>
        </div>
        
        <div className="card">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/fa/42/caption.jpg?w=600&h=600&s=1" />
          <h3>yosemite<br/>national park,<br/>ca</h3>
        </div>
      </Carousel>

  );
};

export default Slider;
