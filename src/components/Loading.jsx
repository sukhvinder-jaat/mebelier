import React, { useEffect, useState } from "react";
import rotate from "../assets/img/rotate.gif";
const Loading = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  },5000);
  return (
    <div
      id="none"
      className="loading_back min-vh-100 w-100 position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg_effect">
        <span className="d-flex align-items-center pointer justify-content-center justify-content-sm-start">
          <img className="w-100 vh-100 object-fit-cover" src={rotate} alt="rotate" />
        </span>
      </div>
    </div>
  );
};
export default Loading;
