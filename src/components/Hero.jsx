import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
import instagram from "../assets/img/svg/instagram.svg";
import whatsap from "../assets/img/svg/whatsap.svg";
import email_1 from "../assets/img/svg/email_1.svg";
import hero_logo from "../assets/img/svg/hero_logo.svg";
import kitchen_main from "../assets/img/videos/kitchen_main.mp4";
const Hero = () => {
  const [first, setFirst] = useState(true);
  function clickshow() {
    setFirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <section className="hero_bg d-flex flex-column vh_100_1920">
      <div className="py-3">
        <div className="d-flex justify-content-between align-items-center px-md-5 px-2">
          <div className="z_10 d-xxl-none">
            <h3 className="clr_black menu_icon" onClick={clickshow}>
              {first ? <BiMenu /> : <RxCross1 />}
            </h3>
          </div>
          <ul
            className={`nav_show d-flex gap-md-5 gap-4 align-items-center mb-0 ${
              first ? "" : "showw ps-0"
            }`}
          >
            <li onClick={() => setFirst(true)} className="hover_grey">
              <a
                className="fw_400 ff_forum fs_lg clr_black text-uppercase mb-0"
                href="#section_2"
              >
                ПОРТФОЛИО
              </a>
            </li>
            <li onClick={() => setFirst(true)} className="hover_grey">
              <a
                className="fw_400 ff_forum fs_lg clr_black text-uppercase mb-0"
                href="#section_3d"
              >
                уСЛУГИ
              </a>
            </li>
            <li onClick={() => setFirst(true)} className="hover_grey">
              <a
                className="fw_400 ff_forum fs_lg clr_black text-uppercase mb-0"
                href="#footer_up"
              >
                оТЗЫВЫ
              </a>
            </li>
            <li onClick={() => setFirst(true)} className="hover_grey">
              <a
                className="fw_400 ff_forum fs_lg clr_black text-uppercase mb-0"
                href="#footer"
              >
                кОНТАКТЫ
              </a>
            </li>
            <li onClick={() => setFirst(true)} className="hover_grey">
              <a
                className="fw_400 ff_Montserrat fs_xsm fst-italic clr_grey d-xxl-none d-block"
                href="tel:9812438052"
              >
                +7 747 274 22 60
              </a>
            </li>
            <li onClick={() => setFirst(true)} className="hover_grey">
              <a
                className="fw_400 ff_Montserrat fs_xsm fst-italic clr_grey d-xxl-none d-block"
                href="tel:9812438052"
              >
                +7 727 327 73 27
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <span className="d-flex flex-column pe-md-5 me-md-5">
              <a
                className="fw_400 position-relative hover_line_black ff_Montserrat fs_xsm fst-italic clr_grey d-none d-xxl-block"
                href="tel:9812438052"
              >
                +7 747 274 22 60
              </a>
              <a
                className="fw_400 position-relative hover_line_black ff_Montserrat fs_xsm fst-italic clr_grey d-none d-xxl-block"
                href="tel:9812438052"
              >
                +7 727 327 73 27
              </a>
            </span>
            <span className="d-flex align-items-center z_10 gap-4">
              <a
                className="insta_hover"
                href="https://www.instagram.com/mebelier_almaty/"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                className="insta_hover"
                href="https://api.whatsapp.com/send?phone=77472742260"
              >
                <img src={whatsap} alt="whatsap" />
              </a>
              <a className="insta_hover" href="mailto:mebelier_almaty@inbox.ru">
                <img src={email_1} alt="email_1" />
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="text-center py-sm-5 flex-grow-1 py-5 d-flex flex-column align-items-center position-relative">
        <video
          id="background-video"
          className="position-absolute z-0 object-fit-cover"
          autoPlay
          loop
          muted
        >
          <source src={kitchen_main} type="video/mp4" />
        </video>

        <div
          className="py-5 position-relative z_5"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <span>
            <img className="w_100" src={hero_logo} alt="hero_logo" />
          </span>
          <p className="fw_400 ff_forum fs_lg clr_white_1 text-capitalize pt-4">
            МЕБЕЛЬНАЯ ФАБРИКА
          </p>
          <div className="py-5 mt-5">
            <p className="fw_400 ff_forum fs_lg clr_white_1">
              ХОТИТЕ ПОЛУЧИТЬ БЫСТРЫЙ РАСЧЕТ?
            </p>
            <button className="fw_400 ff_Montserrat fs_md clr_white_1 submit_btn bg-transparent mt-2">
              ОСТАВИТЬ ЗАЯВКУ
            </button>
            <p className="fw_400 ff_Montserrat fs_xsm clr_white_1 pt-4">
              Бесплатный замер
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
