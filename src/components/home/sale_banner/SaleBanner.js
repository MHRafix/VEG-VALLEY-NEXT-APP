import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const SaleBanner = () => {
  return (
    <>
      <div className="banner sale_banner_wrapper">
        <div className="container_wrapper">
          <div className="sale_banner">
            <div className="w-2/5 mx-auto">
              <h3 className="text-4xl mb-5 text-left capitalize font-semibold space-x-1">
                special offer
              </h3>
              <h1 className="text-6xl mb-5 text-left capitalize font-bold space-x-1">
                summer sale
              </h1>
              <h1 className="text-6xl mb-5 text-left  capitalize font-bold space-x-1">
                <span className="text-green-600">50% off</span> fruits
              </h1>
              <button className="btn btn_shop_now">
                SHOP NOW &nbsp;&nbsp; <FaArrowAltCircleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleBanner;
