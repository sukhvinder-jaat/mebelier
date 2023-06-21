import React from "react";
import { Row, Col } from "react-bootstrap";
import washfashion from "../assets/img/videos/washfashion.mp4";
const Bce = () => {
  return (
    <section className="py-5 max_w_1920">
      <Row className="flex-column-reverse flex-lg-row">
        <Col lg={6} className="pe-lg-5">
          <video
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop
            className="w-100 pe-lg-4"
            src={washfashion}
          ></video>
        </Col>
        <Col
          lg={6}
          className="text-center align-items-center d-flex flex-column  justify-content-center pe-lg-5 ps-4"
        >
          <p className="fw_400 ff_forum fs_4xl clr_black text-uppercase">
            все еще сомневаетесь?
          </p>
          <p className="fw_400 ff_Montserrat fs_md clr_light_black max_w_250">
            Получите консультацию прямо сейчас
          </p>
          <button className="fw_400 ff_Montserrat fs_sm clr_black text-uppercase bce_btn mt-5 btn_hover">
            ОСтавить контакты
          </button>
        </Col>
      </Row>
    </section>
  );
};

export default Bce;
