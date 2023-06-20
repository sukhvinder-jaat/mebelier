import React from "react";
import { Row, Col } from "react-bootstrap";
import bce from "../assets/img/png/bce.png";
const Bce = () => {
  return (
    <section className="py-5 max_w_1920">
      <Row className="flex-column-reverse flex-lg-row">
        <Col lg={6} className="pe-lg-5">
          <img className="w-100" src={bce} alt="bce" />
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
          <button className="fw_400 ff_Montserrat fs_sm clr_black text-uppercase bce_btn mt-5">ОСтавить контакты</button>
        </Col>
      </Row>
    </section>
  );
};

export default Bce;
