import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const SubBanner = () => {
  return (
    <div className="my-20">
      <div className="sub_banners">
        {singleBanner("natural fresh fruits", "single_banner1")}
        {singleBanner("fresh vegitables", "single_banner2")}
      </div>
    </div>
  );
};

export default SubBanner;

const singleBanner = (banner_title, banner_calss) => {
  return (
    <div className={`banner ${banner_calss}`}>
      <div className="banner_content">
        <h1 className="text-3xl capitalize text-green-800 my-5 font-bold">
          {banner_title}
        </h1>
        <button className="btn btn_shop_now">
          SHOP NOW &nbsp;&nbsp; <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};
