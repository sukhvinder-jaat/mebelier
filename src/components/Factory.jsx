import React from "react";
import { Row, Col } from "react-bootstrap";
import map from "../assets/img/webp/map.webp";
const Factory = () => {
  return (
    <section className="py-sm-5 my-xl-5 max_w_1920">
      <Row className=" flex-column-reverse flex-lg-row">
        <Col
          lg={6}
          className="text-start align-items-start d-flex flex-column justify-content-center ps-lg-5 ps-4"
        >
          <p
            className="fw_400 ff_forum fs_4xl clr_black"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            наша фабрика
          </p>
          <p
            className="fw_400 ff_Montserrat fs_md clr_black max_w_830"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            Индивидуальный подход к каждому клиенту, наша фабрика с полным
            циклом производства может воплотить любой эскиз и пожелание
            заказчика
          </p>
        </Col>
        <Col
          lg={6}
          className="pslg-5"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <img className="w-100" src={map} alt="map" />
        </Col>
      </Row>
    </section>
  );
};

export default Factory;
