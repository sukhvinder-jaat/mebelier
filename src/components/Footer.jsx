import React from "react";
import { Row, Col } from "react-bootstrap";
import footer_logo from "../assets/img/svg/hero_logo.svg";
import phone from "../assets/img/png/phone.svg";
import footer_map from "../assets/img/png/footer_map.png";
import whatsap_2 from "../assets/img/svg/whatsap_2.svg";
import instagram_2 from "../assets/img/svg/instagram_2.svg";
import home_2 from "../assets/img/svg/home_2.svg";
import email from "../assets/img/svg/email.svg";
import pin from "../assets/img/svg/pin.svg";

const Footer = () => {
  return (
    <section className="footer_back bg -black py-5">
      <div className="footer_container">
        <Row>
          <Col xxl={5} className="pe-xl-5">
            <img
              className="w-100"
              data-aos="fade-down"
              data-aos-duration="3000"
              data-aos-delay="300"
              src={footer_logo}
              alt="footer_logo"
            />
            <ul className="ps-0 mt-5 pt-5">
              <li>
                <p
                  className="fw_700 ff_Montserrat fs_xl clr_white ms-5 ps-4"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                >
                  НАШИ КОНТАКТЫ
                </p>
              </li>
              <li className="pt-5">
                <a
                  className="mb-0 d-flex align-items-center fw_400 ff_Montserrat fs_xl clr_white_1 fst-italic"
                  href="tel:9812438052"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="600"
                >
                  <span className="pe-4">
                    <img src={phone} alt="phone" />
                  </span>
                  +7 747 274 22 60
                </a>
              </li>
              <li className="pt-5">
                <a
                  className="mb-0 d-flex align-items-center fw_400 ff_Montserrat fs_xl clr_white_1 fst-italic"
                  href="tel:9812438052"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="900"
                >
                  <span className="pe-4">
                    <img src={phone} alt="phone" />
                  </span>
                  +7 747 274 22 60
                </a>
              </li>
              <li className="pt-5">
                <a
                  className="mb-0 d-flex align-items-center fw_400 ff_Montserrat fs_xl clr_white_1 fst-italic"
                  href="mailto:mebelier_almaty@inbox.ru"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="1200"
                >
                  <span className="pe-4">
                    <img src={email} alt="email" />
                  </span>
                  mebelier_almaty@inbox.ru
                </a>
              </li>
              <li className="pt-5">
                <a
                  className="mb-0 d-flex align-items-center fw_400 ff_Montserrat fs_xl clr_white_1 fst-italic"
                  href="#"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="1500"
                >
                  <span className="pe-4">
                    <img src={pin} alt="pin" />
                  </span>
                  г. Алматы, ул. Коперника, 72В
                </a>
              </li>
            </ul>
          </Col>
          <Col
            xxl={7}
            className="d-flex flex-column align-items-center ps-xl-5"
          >
            <img className="w-100" src={footer_map} alt="footer_map" />
            <span className="d-flex gap-xl-5 pt-5">
              <a
                className="insta_hover"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="300"
                href="https://www.instagram.com/mebelier_almaty/"
              >
                <img src={instagram_2} alt="instagram_2" />
              </a>
              <a
                className="insta_hover"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="600"
                href="https://api.whatsapp.com/send?phone=77472742260"
              >
                <img
                  className="px-xl-5 mx-xl-5 px-4"
                  src={whatsap_2}
                  alt="whatsap_2"
                />
              </a>
              <a
                className="insta_hover"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="900"
                href="#"
              >
                <img src={home_2} alt="home_2" />
              </a>
            </span>
          </Col>
        </Row>
        <div
          className="d-flex flex-column flex-xl-row align-items-center justify-content-end input_box mt-5"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="600"
        >
          <p className="fw_700 ff_Montserrat fs_xl clr_white_1 mb-0">
            НАПИСАТЬ НАМ
          </p>
          <input
            className="ms-lg-4 fw_400 ff_Montserrat fs_xl fst-italic email_input text-center input_w"
            id="email"
            type="text"
            placeholder="enter email address"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
