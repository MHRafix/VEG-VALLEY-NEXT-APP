import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
const FooterBanner = () => {
  return (
    <>
      <div className="footer_banner_section">
        <div className="gird grid-rows-1 grid-cols-1">
          {footerBanner("fresh breakfast", "footer_banner1")}
          {footerBanner("fish and seafood", "footer_banner2")}
        </div>
        <div className="gird grid-rows-1 grid-cols-1">
          <iframe
            className="my-8"
            width="100%"
            height="435"
            src="https://www.youtube.com/embed/Jyyt-QWO4Qs"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="gird grid-rows-1 grid-cols-1">
          {footerBanner("rice, egg, bread & dried foods", "footer_banner3")}
        </div>
      </div>
    </>
  );
};

export default FooterBanner;

const footerBanner = (banner_title, banner_class) => {
  return (
    <div className={`banner ${banner_class} my-8`}>
      <div className="banner_details">
        <h1 className="text-4xl tab:text-3xl text-left capitalize font-bold text-black space-x-1 my-5">
          {banner_title}
        </h1>
        <button className="btn btn_shop_now">
          SHOP NOW &nbsp;&nbsp; <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};
