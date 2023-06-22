import React from "react";
import partnerss from "../assets/img/videos/partnerss.mp4";
export const BetweenSection = () => {
  return (
    <div className="py-lg-5 py-4 overflow-hidden mb-xl-5 mt-xxl-5">
      <div className="mx_1920 mlra pb-xxl-5">
        <p
          className=" ff_Montserrat pe-sm-0 pe-3 fs_5xl clr_light_black fw_400 mb-0 lh_90p text-end mt-xl-5"
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-delay="600"
        >
          НАШИ
        </p>
        <p
          className=" ff_Montserrat pe-sm-0 pe-3 fs_5xl text-black fw_700 text-end"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          ПАРТНЕРЫ
        </p>
        <span>
          <video
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop
            className="w-100"
            data-aos="flip-down"
            data-aos-duration="1500"
            data-aos-delay="900"
            src={partnerss}
          ></video>
        </span>
      </div>
    </div>
  );
};
