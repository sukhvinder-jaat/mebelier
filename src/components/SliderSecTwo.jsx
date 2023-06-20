import React from "react";
import { Col, Row } from "react-bootstrap";
import slider_1 from "../assets/img/png/slider_2_1.png";
import slider_img_2 from "../assets/img/png/slider_2_2.png";
import arrow_left from "../assets/img/svg/slider_2_arroe_left.svg";
import arrow_right from "../assets/img/svg/slider_2_arrow_right.svg";
import slider_3 from "../assets/img/png/slider_2_3.png";
// import { Slider } from "slider";
import Slider from "react-slick";
export const SliderSecTwo = () => {
  var slider_2 = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
          centerPadding: 60,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: false,
          //   centerPadding: 60,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const buttons = React.useRef();
  return (
    <div className=" py-5">
      <div className="slider_container position-relative shadow_right">
        <span
          className="position-absolute z-3 top-50 start-0 translate-middle-y d-xl-flex d-none justify-content-center align-items-center"
          onClick={() => buttons.current.slickPrev()}
        >
          <img
            src={arrow_left}
            alt="arrow_left"
            className="w-75 pointer slider_btn_animation"
          />
        </span>
        <span
          className="position-absolute z-3 top-50 end-0 translate-middle-y d-xl-flex d-none justify-content-center align-items-center"
          onClick={() => buttons.current.slickNext()}
        >
          <img
            src={arrow_right}
            alt="arrow_right"
            className="w-75 pointer slider_btn_animation2"
          />
        </span>
        <Slider {...slider_2} ref={buttons} id="demo15">
          <Col xs={4} className="px-2 hover15 overflow-hidden">
            <span>
              <img src={slider_1} alt="slider_1" className="w-100" />
            </span>
          </Col>
          <Col xs={4} className="px-2 hover15 overflow-hidden">
            <span>
              <img src={slider_img_2} alt="slider_img_2" className="w-100" />
            </span>
          </Col>
          <Col xs={4} className="px-2 hover15 overflow-hidden">
            <span>
              <img src={slider_3} alt="slider_1" className="w-100" />
            </span>
          </Col>
          <Col xs={4} className="px-2 hover15 overflow-hidden">
            <span>
              <img src={slider_1} alt="slider_1" className="w-100" />
            </span>
          </Col>
          <Col xs={4} className="px-2 hover15 overflow-hidden">
            <span>
              <img src={slider_img_2} alt="slider_img_2" className="w-100" />
            </span>
          </Col>
          <Col xs={4} className="px-2 hover15 overflow-hidden ">
            <span>
              <img src={slider_3} alt="slider_1" className="w-100" />
            </span>
          </Col>
        </Slider>
      </div>
    </div>
  );
};
