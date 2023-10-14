import React from "react";
import "./PartsSelection.css";
import Carousel from "react-multi-carousel";
import { cabinetPartsData } from "../../data";
import CabinetFooter from "../CabinetFooter/CabinetFooter";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

export default function PartsSelection() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  const CustomLeftArrow = ({ previous }) => {
    return (
      <div
        style={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <img
          src={leftArrow}
          classNameName="left__arrow"
          alt="left"
          onClick={previous}
        />
      </div>
    );
  };

  const CustomRightArrow = ({ next }) => {
    return (
      <div
        style={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <img
          src={rightArrow}
          classNameName="right__arrow"
          alt="right"
          onClick={next}
        />
      </div>
    );
  };

  return (
    <div className="parts__selection__container">
      <div className="parts__selection__carousel-wrap">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          classNameName=""
          containerclassName=""
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemclassName=""
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
          sliderclassName=""
          slidesToSlide={1}
          swipeable
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {cabinetPartsData &&
            cabinetPartsData.length > 0 &&
            cabinetPartsData.map((part, index) => {
              return (
                <div className="parts__carousel-card">
                  <div className="parts__carousel-card-wrap">
                    <div className="parts__carousel-card-bg"></div>

                    <div className="parts__carousel-card-title">
                      {part.title}
                    </div>

                    <div className="parts__carousel-card-img-wrap">
                      <img
                        className="parts__carousel-card-img"
                        src={part.imgURL}
                        alt={part.title}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </Carousel>
      </div>

      <CabinetFooter />
    </div>
  );
}
