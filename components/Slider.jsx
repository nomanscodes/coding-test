import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const Slider = ({ onenModal, openSignUpModal }) => {
  return (
    <div className="relative mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className={`absolute right-[33px] md:right-[51px] bottom-0 w-8 md:w-12 h-7 md:h-10 bg-[#2d6f6d] z-10  ${
              onenModal || openSignUpModal ? `hidden` : `flex`
            } items-center justify-center cursor-pointer hover:opacity-90`}
          >
            <BiArrowBack className="text-sm text-white md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, Next) => (
          <div
            onClick={clickHandler}
            className={`absolute  right-0 bottom-0 w-8 md:w-12 h-7 md:h-10 bg-[#2d6f6d] z-10 ${
              onenModal || openSignUpModal ? ` hidden` : `flex`
            }  items-center justify-center cursor-pointer hover:opacity-90`}
          >
            <BiArrowBack className="text-sm rotate-180 text-white md:text-lg" />
          </div>
        )}
      >
        <div>
          <picture>
            <img
              src="/image/slider1.png"
              alt="slider"
              className="aspect-[16/10] md:aspect-auto object-cover rounded"
            />
          </picture>
          <button className="px-[15px] md:px-[5px] py-[5px] md:py-[7px] font-oswald bg-[#2d6f6d] absolute bottom-[25px] md:bottom-[75px] left-0 text-white text-[15px] md:text-[30px] font-medium cursor-pointer hover:opacity-90">
            SHOP NOW
          </button>
        </div>
        <div>
          <picture>
            <img
              src="/image/slider2.png"
              alt="slider"
              className="aspect-[16/10] md:aspect-auto object-cover rounded"
            />
          </picture>
          <button className="px-[15px] md:px-[5px] py-[5px] md:py-[7px] font-oswald bg-[#2d6f6d] absolute bottom-[25px] md:bottom-[75px] left-0 text-white text-[15px] md:text-[30px] font-medium cursor-pointer hover:opacity-90">
            SHOP NOW
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
