import React from "react";
import rightarrow from "../ListJobs/icon/right-arrow.svg"
import leftarrow from "../ListJobs/icon/left-arrow.svg"
export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightarrow : leftarrow} />
    </button>
  );
}
