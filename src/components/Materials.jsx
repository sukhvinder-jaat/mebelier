import React from "react";
import { Row, Col } from "react-bootstrap";
import furniture from "../assets/img/videos/furniture.mp4";
const Materials = () => {
  return (
    <section className="py-5 my-5 max_w_1920">
      <Row>
        <Col
          lg={6}
          className="text-start align-items-start d-flex flex-column justify-content-center ps-lg-5 ps-4"
        >
          <p className="fw_400 ff_forum fs_4xl clr_black">МАТЕРИАЛЫ</p>
          <p className="fw_400 ff_Montserrat fs_md clr_black max_w_855">
            Для создания хорошей мебели очень важно использование качественных
            материалов. Мы напрямую работаем только с проверенными
            производителями Турции, Австрии, Польши и России. Всегда учитываем
            характеристики и требования к проектам.
          </p>
        </Col>
        <Col lg={6} className="ps-lg-5">
          <video
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop
            className="w-100 pe-lg-4"
            src={furniture}
          ></video>
        </Col>
      </Row>
    </section>
  );
};

export default Materials;
