import React from "react";
import arrow_left from "../assets/img/svg/slider_2_arroe_left.svg";
import arrow_right from "../assets/img/svg/slider_2_arrow_right.svg";
import top_comma from "../assets/img/svg/top_coma.svg";
import Slider from "react-slick";
import { Col } from "react-bootstrap";
export const Footer_up_slider = () => {
  var slider_2 = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const buttons = React.useRef();
  return (
    <div className="py-5 my-5">
      <div className="slider_container">
        <p className="ff_Montserrat fs_5xl clr_light_black fw_400 mb-0 lh_90p text-start">
          ОСТАВЬТЕ
        </p>
        <p className="ff_Montserrat fs_5xl text-black fw_700 text-start">
          СВОЙ ОТЗЫВ
        </p>
      </div>
      {/* slider */}

      <div className="slider_clr_container position-relative">
        <span
          className="position-absolute z-3 slider_footer_2_arrow2 d-xl-flex d-none justify-content-center align-items-center"
          onClick={() => buttons.current.slickPrev()}
        >
          <img
            src={arrow_left}
            alt="arrow_left"
            className="w-75 pointer slider_btn_animation"
          />
        </span>
        <span
          className="position-absolute z-3 slider_footer_2_arrow d-xl-flex d-none justify-content-center align-items-center"
          onClick={() => buttons.current.slickNext()}
        >
          <img
            src={arrow_right}
            alt="arrow_right"
            className="w-75 pointer slider_btn_animation2"
          />
        </span>

        <Slider {...slider_2} ref={buttons} className="clr_slider px-2">
          <Col
            xs={12}
            className="d-flex flex-column align-items-center py-lg-5 py-2"
          >
            <span className="d-flex justify-content-center">
              <img
                src={top_comma}
                alt="top_comma"
                className="img_custom_w_slider"
              />
            </span>
            <p className="ff_forum fw_400 text-black fs_3xl text-center lh-sm pt-3 pb-lg-4 pb-0">
              Вчера все доставли и выполнили работу отлично. Спасибо, Умар. Вы
              <span className="d-xxl-block">отличный продавец.</span>
            </p>
            <p className="fw_700 ff_Montserrat text-black fs_4xl mb-0">
              АЛЕКСАНДР
            </p>
            <p className="ff_forum fw_400 fs_2xl text-black mb-0">
              +7 778 *** ** 64
            </p>
          </Col>
          <Col
            xs={12}
            className="d-flex flex-column align-items-center py-lg-5 py-2"
          >
            <span className="d-flex justify-content-center">
              <img
                src={top_comma}
                alt="top_comma"
                className="img_custom_w_slider"
              />
            </span>
            <p className="ff_forum fw_400 text-black fs_3xl text-center lh-sm pt-3 pb-lg-4 pb-0">
              Вчера все доставли и выполнили работу отлично. Спасибо, Умар. Вы
              <span className="d-xxl-block">отличный продавец.</span>
            </p>
            <p className="fw_700 ff_Montserrat text-black fs_4xl mb-0">
              АЛЕКСАНДР
            </p>
            <p className="ff_forum fw_400 fs_2xl text-black mb-0">
              +7 778 *** ** 64
            </p>
          </Col>
        </Slider>
      </div>
      <div className="text-center mt-5">
        <button className="fw_400 fs_4xl ff_Montserrat clr_black our_btn bg-transparent btn_hover">
          ОСТАВИТЬ ОТЗЫВ
        </button>
      </div>
    </div>
  );
};
