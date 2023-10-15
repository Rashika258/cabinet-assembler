import { cloneDeep } from 'lodash';
import React, { useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import leftArrow from '../../assets/left-arrow.png';
import rightArrow from '../../assets/right-arrow.png';
import { useCabinetStateContext } from '../../context';
import CabinetFooter from '../CabinetFooter/CabinetFooter';
import './PartsSelection.css';

export default function PartsSelection() {
  const carouselRef = useRef(null);
  const { cabinetSharedState, setCabinetSharedState } =
    useCabinetStateContext();
  const [selectedItems, setSelectedItems] = useState([]);
  console.log('cabinetData', cabinetSharedState);

  const handlePrevious = () => {
    const isAtFirstSlide = carouselRef.current.state.currentSlide === 0;

    if (isAtFirstSlide) {
      carouselRef.current.goToSlide(cabinetSharedState.length - 1);
    } else {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    const currentSlide = carouselRef.current.state.currentSlide;
    const nextSlide =
      currentSlide === cabinetSharedState.length - 1 ? 0 : currentSlide + 1;
    carouselRef.current.goToSlide(nextSlide, true);
  };

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
    },
  };

  const ButtonGroup = ({
    next,
    previous,
    goToSlide,
    handleNext,
    handlePrevious,
    length,
    ...rest
  }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    console.log('currentSlide', currentSlide);

    return (
      <div className='button__wrap'>
        <div
          className={
            // currentSlide === 0 ? 'left__arrow-wrap hide' :
            'left__arrow-wrap'
          }
        >
          <img
            src={leftArrow}
            className='left__arrow'
            alt='left'
            onClick={() => handlePrevious()}
          />
        </div>
        <div
          className={
            // currentSlide === length
            //   ? 'right__arrow-wrap hide'
            //   :
            'right__arrow-wrap'
          }
        >
          <img
            src={rightArrow}
            className='right__arrow'
            alt='right'
            onClick={() => handleNext()}
          />
        </div>
      </div>
    );
  };

  const handleSelectedItems = (part) => {
    let items = cloneDeep(selectedItems);
    if (items && items.length > 0 && items.includes(part.id)) {
      items = items.filter((i) => i !== part.id);
    } else {
      items.push(part.id);
    }
    setSelectedItems(items);
  };

  console.log('selectedItems', selectedItems);
  return (
    <div className='parts__selection__container'>
      <div className='parts__selection__carousel-wrap'>
        <Carousel
          key='carousel-parts'
          additionalTransfrom={0}
          arrows={false}
          ref={carouselRef}
          autoPlaySpeed={0}
          centerMode={false}
          className=''
          containerClass='carousel__container'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite={false}
          itemclassName=''
          keyBoardControl
          minimumTouchDrag={80}
          infiniteLoop={true}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderclassName=''
          slidesToSlide={1}
          swipeable
          partialVisbile={false}
          shouldResetAutoplay={false}
          autoPlay={false}
          customButtonGroup={
            <ButtonGroup
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              length={cabinetSharedState.length}
            />
          }
        >
          {cabinetSharedState.map((part, index) => {
            return (
              <div
                className={
                  selectedItems.includes(part.id)
                    ? 'parts__carousel-card-selected parts__carousel-card'
                    : 'parts__carousel-card'
                }
                onClick={(e) => handleSelectedItems(part)}
              >
                <div className='parts__carousel-card-wrap'>
                  <div className='parts__carousel-card-bg'></div>

                  <div className='parts__carousel-card-title'>{part.title}</div>

                  <div className='parts__carousel-card-img-wrap'>
                    <img
                      className='parts__carousel-card-img'
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

      <CabinetFooter selectedItems={selectedItems} />
    </div>
  );
}
