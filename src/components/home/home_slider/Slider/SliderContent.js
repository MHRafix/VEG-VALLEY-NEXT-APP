import React from "react";

const description_style = {
  margin: "7% 0%",
  color: "#444",
  fontSize: 18,
  fontWeight: 500,
};

export const SliderContent = ({ slider }) => {
  const {
    slider_tagline,
    slider_title,
    slider_description,
    slider_background,
  } = slider;

  return (
    <div
      className="single_slider"
      style={{
        backgroundImage: `url(${slider_background})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        padding: "0% 5%",
      }}
    >
      <div>
        <h1 className="tagline_style">{slider_tagline}</h1>
        <h1 className="title_style">{slider_title}</h1>
        <p style={description_style}>{slider_description}</p>
        <button className="btn2 btn_search">shop now</button>
      </div>
    </div>
  );
};
