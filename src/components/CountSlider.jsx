import React from "react";
import { Col, Row } from "react-bootstrap";
import chat from "../assets/img/svg/chat.svg";
import insta from "../assets/img/svg/instagram2.svg";
import home from "../assets/img/svg/home3.svg";
import arrow_left from "../assets/img/svg/arrow_left_two.svg";
import arrow_right from "../assets/img/svg/arrow_right_two.svg";
import blum_slider from "../assets/img/webp/blum_slider.webp";
import blum_slider_1 from "../assets/img/webp/blum_slider_1.webp";
import blum_slider_2 from "../assets/img/webp/blum_slider_2.webp";
import blum_slider_3 from "../assets/img/webp/blum_slider_3.webp";
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
        <p className="ff_Montserrat text-end fw_700 fs_3xl text-uppercase clr_light_black mb-0 pt-4 ps-3 position-absolute count_location">
          <span className="fs_5xl">0{i + 1} </span> /06
        </p>
      );
    },
  };
  const buttons = React.useRef();
  return (
    <>
      <div className="max_w_1920 mlra pt-5 mt-xxl-5">
        <p
          className=" ff_Montserrat fs_5xl clr_light_black fw_400 mb-0 lh_90p text-start pt-5 mt-xl-5"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          КАК МЫ
        </p>
        <p
          className=" ff_Montserrat fs_5xl text-black fw_700 text-start"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          РАБОТАЕМ?
        </p>
      </div>
      <div className="max_w_1920 mlra py-xl-0 py-md-5 py-3">
        <Row className="flex_reverse_1500">
          <Col
            xs={5}
            className="bg_light_black col_12_1500 tranform_small pe-0 d-flex flex-column justify-content-between"
          >
            <div className="p--md-4 p-2">
              <p
                className="clr_white ff_Montserrat fw_700 fs_xl lh-1 pb-3"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-delay="300"
              >
                получите консультацию специалиста
              </p>
              <p
                className=" text-white fw_700 ff_Montserrat fs_md lh-1"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="900"
              >
                Оставьте свои данные для
                <span className="d_block_1500">обратной связи</span>
              </p>
              <div className=" d-flex align-items-center pt-5">
                <span
                  className=" d-flex insta_hover justify-content-center align-items-center"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <a href="https://api.whatsapp.com/send?phone=77472742260">
                    <img src={chat} alt="chat" className="w-75" />
                  </a>
                </span>
                <span
                  className="d-flex insta_hover justify-content-center align-items-center ms-5"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-delay="600"
                >
                  <a href="https://www.instagram.com/mebelier_almaty/">
                    <img src={insta} alt="insta" className="w-75" />
                  </a>
                </span>
                <span
                  className="d-flex insta_hover justify-content-center align-items-center ms-5"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  data-aos-delay="900"
                >
                  <a href="#">
                    <img src={home} alt="home" className="w-75" />
                  </a>
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center mt-5">
              <span
                className="bg_white p-lg-3 p-sm-2 p-1 pointer"
                onClick={() => buttons.current.slickPrev()}
              >
                <img src={arrow_left} alt="arrow_left" className="w-100" />
              </span>
              <span
                className="bg_white p-lg-3 p-sm-2 p-1 border_left_btn pointer"
                onClick={() => buttons.current.slickNext()}
              >
                <img src={arrow_right} alt="arrow_left" className="w-100" />
              </span>
            </div>
          </Col>
          <Col xs={7} className="p-0 col_12_1500">
            <Slider {...slider_bottom} ref={buttons} className="">
              <img src={blum_slider} alt="blum_slider" className="w-100" />
              <img src={blum_slider_1} alt="blum_slider_1" className="w-100" />
              <img src={blum_slider_2} alt="blum_slider_2" className="w-100" />
              <img src={blum_slider_3} alt="blum_slider_3" className="w-100" />
              <img src={blum_slider} alt="blum_slider" className="w-100" />
              <img src={blum_slider_1} alt="blum_slider_1" className="w-100" />
            </Slider>
          </Col>
        </Row>
      </div>
    </>
  );
};
