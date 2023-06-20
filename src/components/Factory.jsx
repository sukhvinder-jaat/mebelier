import React from "react";
import { Row, Col } from "react-bootstrap";
import map from "../assets/img/png/map.png";
const Factory = () => {
  return (
    <section className="py-5 my-5 max_w_1920">
      <Row>
        <Col
          lg={6}
          className="text-start align-items-start d-flex flex-column justify-content-center ps-lg-5 ps-4"
        >
          <p className="fw_400 ff_forum fs_4xl clr_black">наша фабрика</p>
          <p className="fw_400 ff_Montserrat fs_md clr_black max_w_400">
            Индивидуальный подход к каждому клиенту, наша фабрика с полным
            циклом производства может воплотить любой эскиз и пожелание
            заказчика
          </p>
        </Col>
        <Col lg={6} className="pslg-5">
          <img className="w-100" src={map} alt="map" />
        </Col>
      </Row>
    </section>
  );
};

export default Factory;
