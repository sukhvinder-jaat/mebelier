import React from "react";
import biggest_img from "../assets/img/png/biggest_img.png";
export const BetweenSection = () => {
  return (
    <div className="py-lg-5 py-4 overflow-hidden mb-xl-5">
      <div className="mx_1920 mlra pb-xxl-5">
        <p className=" ff_Montserrat fs_5xl clr_light_black fw_400 mb-0 lh_90p text-end">
          НАШИ
        </p>
        <p className=" ff_Montserrat fs_5xl text-black fw_700 text-end">
          ПАРТНЕРЫ
        </p>
        <span>
          <img src={biggest_img} alt="biggest_img" className="w-100" />
        </span>
      </div>
    </div>
  );
};
