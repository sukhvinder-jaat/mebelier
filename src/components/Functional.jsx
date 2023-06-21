import React from "react";
import { Row, Col } from "react-bootstrap";
import window from "../assets/img/webp/window.webp";
const Functional = () => {
  return (
    <section className="py-5 my-5 max_w_1920">
      <Row>
        <Col
          lg={6}
          className="text-start align-items-start d-flex flex-column justify-content-center ps-lg-5 ps-4"
        >
          <p
            className="fw_400 ff_forum fs_4xl clr_black"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            ФУНКЦИОНАЛ
          </p>
          <p
            className="fw_400 ff_Montserrat fs_md clr_black max_w_855"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            Отличительная особенность продуманной мебели - хорошая
            функциональность. В вашей мебели будут установлены
            высококачественные системы хранения, а внутреннее пространство будет
            использовано наилучшим образом.
          </p>
        </Col>
        <Col
          lg={6}
          className="ps-lg-5"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img className="w-100" src={window} alt="window" />
        </Col>
      </Row>
    </section>
  );
};

export default Functional;
