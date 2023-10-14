import React from "react";
import "./PartsSelection.css";
import Carousel from "react-multi-carousel";
import { cabinetPartsData } from "../../data";
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
  }
}

const PartsSelection = () => {
  return (
    // <div className="parts__selection__container">
    //   <div class="ag-format-container">
    //     <div class="ag-courses_box">
          <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable

          >
            {cabinetPartsData &&
              cabinetPartsData.length > 0 &&
              cabinetPartsData.map((part, index) => {
                return(   <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                   {part.title}
                  </div>

                  <div class="ag-courses-item_date-box">
                  <img src={part.imgURL} />
                    Start:
                    <span class="ag-courses-item_date">04.11.2022</span>
                  </div>
                </a>
              </div>)
             
              })}
          </Carousel>
    //     </div>
    //   </div>
    // </div>


  );
};

export default PartsSelection;
