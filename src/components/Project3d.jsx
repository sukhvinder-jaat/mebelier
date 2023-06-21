import React from "react";
import { Row, Col } from "react-bootstrap";
import bedroom from "../assets/img/videos/bedroom.mp4";
const Project3d = () => {
  return (
    <section className="py-5 my-5 max_w_1920">
      <Row className="flex-column-reverse flex-lg-row">
        <Col
          lg={6}
          className="pe-lg-5"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <video
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop
            className="w-100 pe-lg-4"
            src={bedroom}
          ></video>
        </Col>
        <Col
          lg={6}
          className="text-lg-end text-start align-items-lg-end align-items-start d-flex flex-column justify-content-center pe-lg-5 ps-4"
        >
          <p
            className="fw_400 ff_forum fs_4xl clr_black"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            ПРОЕКТ 3D
          </p>
          <p
            className="fw_400 ff_Montserrat fs_md clr_black max_w_400"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            Для достижения наилучшего результата, подготовим подробные 3D эскизы
            и чертежи.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Project3d;
