import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider_Data from "../../../fake_data/slider_data.json";
import { SliderContent } from "./SliderContent";

export const SliderBanner = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#eab308",
          position: "absolute",
          right: "1%",
          bottom: "41vh",
          padding: "20px",
          borderRadius: "100px",
          color: "white",
          zIndex: 1222,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#eab308",
          position: "absolute",
          left: "1%",
          top: "38.5vh",
          padding: "20px",
          borderRadius: "100px",
          color: "white",
          zIndex: 1222,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {Slider_Data.map((slider) => (
        <SliderContent key={slider.uid} slider={slider} />
      ))}
    </Slider>
  );
};
