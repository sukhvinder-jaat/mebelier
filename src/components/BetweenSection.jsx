import React from "react";
import partnerss from "../assets/img/videos/partnerss.mp4";
export const BetweenSection = () => {
  return (
    <div className="py-lg-5 py-4 overflow-hidden mb-xl-5">
      <div className="mx_1920 mlra pb-xxl-5">
        <p className="ff_Montserrat fs_5xl clr_light_black fw_400 mb-0 lh_90p text-end">
          НАШИ
        </p>
        <p className="ff_Montserrat fs_5xl text-black fw_700 text-end">
          ПАРТНЕРЫ
        </p>
        <span>
          <video
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop
            className="w-100 pe-lg-4"
            src={partnerss}
          ></video>
        </span>
      </div>
    </div>
  );
};
