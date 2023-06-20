import React from "react";
import { Row, Col } from "react-bootstrap";
import footer_logo from "../assets/img/png/footer_logo.png";
import phone from "../assets/img/png/phone.svg";

const Footer = () => {
  return (
    <section className="footer _back bg-black py-5">
      <div className="footer_container">
        <Row>
          <Col lg={5}>
            <img src={footer_logo} alt="footer_logo" />
            <ul>
              <li>
                <p>НАШИ КОНТАКТЫ</p>
              </li>
              <li>
                <a className="mb-0 d-flex align-items-center fw_400 ff_Montserrat fs_xl clr_white fst-italic" href="#">
                  <span className="pe-4">
                    <img className="" src={phone} alt="phone" />
                  </span>
                  +7 747 274 22 60
                </a>
              </li>
              <li>
                <a className="mb-0 d-flex align-items-center fw_400 ff_Montserrat fs_xl clr_white fst-italic" href="#">
                  <span className="pe-4">
                    <img className="" src={phone} alt="phone" />
                  </span>
                  +7 747 274 22 60
                </a>
              </li>
              <li>
                <a className="mb-0 d-flex align-items-center fw_400 ff_Montserrat fs_xl clr_white fst-italic" href="#">
                  <span className="pe-4">
                    <img className="" src={phone} alt="phone" />
                  </span>
                  mebelier_almaty@inbox.ru
                </a>
              </li>
              <li>
                <a className="mb-0 d-flex align-items-center fw_400 ff_Montserrat fs_xl clr_white fst-italic" href="#">
                  <span className="pe-4">
                    <img className="" src={phone} alt="phone" />
                  </span>
                  г. Алматы, ул. Коперника, 72В
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={7}></Col>
        </Row>
      </div>
    </section>
  );
};

export default Footer;
