import React from "react";
import { Col, Row } from "react-bootstrap";
import chat from "../assets/img/svg/chat.svg";
import insta from "../assets/img/svg/instagram2.svg";
import home from "../assets/img/svg/home3.svg";
import arrow_left from "../assets/img/svg/arrow_left_two.svg";
import arrow_right from "../assets/img/svg/arrow_right_two.svg";
import image_1 from "../assets/img/png/slider_two_1.png";
import Slider from "react-slick";
export const CountSlider = () => {
  var slider_bottom = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <p className=" ff_Montserrat text-end fw_700 fs_3xl text-uppercase clr_light_black mb-0 pt-4 ps-3 position-absolute count_location">
          <span className="fs_5xl">0{i + 1} </span> /06
        </p>
      );
    },
  };
  const buttons = React.useRef();
  return (
    <>
      <div className="max_w_1920 mlra">
        <p className=" ff_Montserrat fs_5xl clr_light_black fw_400 mb-0 lh_90p text-start">
          КАК МЫ
        </p>
        <p className=" ff_Montserrat fs_5xl text-black fw_700 text-start">
          РАБОТАЕМ?
        </p>
        <div className=" pe-5">
          {/* <ul className="slick-dots">
            <li className=" mb-0 ff_Montserrat fw_700 fs_5xl clr_light_black">
              <a>01</a>
            </li>
            <li className=" mb-0 ff_Montserrat fw_700 fs_5xl clr_light_black">
              <a>02</a>
            </li>
            <li className=" mb-0 ff_Montserrat fw_700 fs_5xl clr_light_black">
              <a>03</a>
            </li>
            <li className=" mb-0 ff_Montserrat fw_700 fs_5xl clr_light_black">
              <a>04</a>
            </li>
            <li className=" mb-0 ff_Montserrat fw_700 fs_5xl clr_light_black">
              <a>05</a>
            </li>
            <li className=" mb-0 ff_Montserrat fw_700 fs_5xl clr_light_black">
              <a>06</a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className=" max_w_1920 mlra">
        <Row className="flex_reverse_1500">
          <Col
            xs={5}
            className="bg_light_black col_12_1500 tranform_small pe-0 d-flex flex-column justify-content-between"
          >
            <div className="p--md-4 p-2">
              <p className="clr_white ff_Montserrat fw_700 fs_xl lh-1 pb-3">
                получите консультацию специалиста
              </p>
              <p className=" text-white fw_700 ff_Montserrat fs_md lh-1">
                Оставьте свои данные для
                <span className="d_block_1500">обратной связи</span>
              </p>
              <div className=" d-flex align-items-center pt-5">
                <span className=" d-flex justify-content-center align-items-center">
                  <img src={chat} alt="chat" className="w-75" />
                </span>
                <span className=" d-flex justify-content-center align-items-center ms-5">
                  <img src={insta} alt="insta" className="w-75" />
                </span>
                <span className=" d-flex justify-content-center align-items-center ms-5">
                  <img src={home} alt="home" className="w-75" />
                </span>
              </div>
            </div>
            <div className=" d-flex justify-content-end align-items-center mt-5">
              <span
                className="bg_white p-lg-3 p-sm-2 p-1 pointer"
                onClick={() => buttons.current.slickNext()}
              >
                <img src={arrow_left} alt="arrow_left" className="w-100" />
              </span>
              <span
                className="bg_white p-lg-3 p-sm-2 p-1 border_left_btn pointer"
                onClick={() => buttons.current.slickPrev()}
              >
                <img src={arrow_right} alt="arrow_left" className="w-100" />
              </span>
            </div>
          </Col>
          <Col xs={7} className="p-0 col_12_1500">
            <Slider {...slider_bottom} ref={buttons} className="">
              <img src={image_1} alt="image_1" className="w-100" />
              <img src={image_1} alt="image_1" className="w-100" />
              <img src={image_1} alt="image_1" className="w-100" />
              <img src={image_1} alt="image_1" className="w-100" />
              <img src={image_1} alt="image_1" className="w-100" />
              <img src={image_1} alt="image_1" className="w-100" />
            </Slider>
          </Col>
        </Row>
      </div>
    </>
  );
};
