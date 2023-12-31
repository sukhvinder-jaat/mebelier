import React from "react";
import { Row, Col } from "react-bootstrap";
import blum from "../assets/img/videos/blum.mp4";
const Accessories = () => {
  return (
    <section className="py-5 max_w_1920">
      <Row>
        <Col
          lg={6}
          className="pe-lg-5"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <video
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop
            className="w-100 pe-lg-4"
            src={blum}
          ></video>
        </Col>
        <Col
          lg={6}
          className="text-lg-end text-start align-items-lg-end align-items-start d-flex flex-column justify-content-center pe-lg-5 ps-4"
        >
          <p
            className="fw_400 ff_forum fs_4xl clr_black text-uppercase"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            ФУРНИТУРА
          </p>
          <p
            className="fw_400 ff_Montserrat fs_md clr_light_black max_w_830"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="300"
          >
            В своих изделиях мы используем исключительно качественную
            европейскую фурнитуру Blum и Hettich.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Accessories;
