import React, { useRef, useState } from "react";
import HeroSlider, {Slide} from "hero-slider"
import image1 from "../img/suzuki.jpg"
import image2 from "../img/PNJ.jpg"
import "./Swiper.css"
export default function SwiperApp() {
  return (
    <div  className="container-slide">
        <HeroSlider
            slidingAnimation="left_to_right"
        >

            <Slide
            background={{
                backgroundImage : {image1},
                backgroundImageSizes : "fixed"
            }}>

            </Slide>
            <Slide
            background={{
                backgroundImage : {image1},
                backgroundImageSizes : "fixed"
            }}>

            </Slide>
        </HeroSlider>

    </div>
  );
}
