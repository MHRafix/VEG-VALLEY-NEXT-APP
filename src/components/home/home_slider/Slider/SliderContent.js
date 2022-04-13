import React from "react";

const tagline_style = {
  color: "#eab308",
  fontSize: 60,
  fontWeight: 700,
  textTransform: "capitalize",
};

const title_style = {
  color: "#14532d",
  fontSize: 60,
  fontWeight: 700,
  textTransform: "capitalize",
  lineHeight: 1,
};

const description_style = {
  margin: "7% 0%",
  color: "#444",
  fontSize: 20,
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
        <h1 style={tagline_style}>{slider_tagline}</h1>
        <h1 style={title_style}>{slider_title}</h1>
        <p style={description_style}>{slider_description}</p>
        <button className="btn2 btn_search">shop now</button>
      </div>
    </div>
  );
};
