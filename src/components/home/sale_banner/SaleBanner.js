import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const SaleBanner = () => {
  return (
    <>
      <div className="banner sale_banner_wrapper">
        <div className="sale_banner">
          <div className="w-full mx-auto">
            <h3 className="sm:!text-4xl xxxs:text-3xl mb-5 text-left capitalize font-semibold space-x-1">
              special offer
            </h3>
            <h1 className="sm:!text-6xl xxxs:text-4xl mb-5 text-left capitalize font-bold space-x-1">
              summer sale
            </h1>
            <h1 className="sm:!text-6xl xxxs:text-4xl mb-5 text-left  capitalize font-bold space-x-1">
              <span className="text-green-900">50% off</span> fruits
            </h1>
            <button className="btn btn_shop_now">
              SHOP NOW &nbsp;&nbsp; <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleBanner;
