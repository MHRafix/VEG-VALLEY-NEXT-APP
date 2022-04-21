import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { FaShippingFast, FaUserTie } from "react-icons/fa";

const Features = () => {
  return (
    <>
      <div className="section_wrapper mt-20">
        <div className="grid gap-3 grid-rows-1 pc:grid-cols-4 laptop:grid-cols-3 tab:grid-cols-2 tab:gap-3 md:grid-cols-2 md:gap-y-3 xs:grid-cols-2 xs:gap-3">
          <div className="features_card">
            <div className="feature_icon">
              <AiOutlineCreditCard />
            </div>
            <div>
              <p className="feature_title">100% secure payment</p>
              <p className="feature_desc">we ensure secure payment with PEV</p>
            </div>
          </div>
          <div className="features_card">
            <div className="feature_icon">
              <BiShare />
            </div>
            <div>
              <p className="feature_title">30 days return</p>
              <p className="feature_desc">
                simply return it within 30 days for an Exchange
              </p>
            </div>
          </div>
          <div className="features_card">
            <div className="feature_icon">
              <FaUserTie />
            </div>
            <div>
              <p className="feature_title">support 24/7</p>
              <p className="feature_desc">
                contact us 24 hours a day. 7 days a week
              </p>
            </div>
          </div>
          <div className="features_card">
            <div className="feature_icon">
              <FaShippingFast />
            </div>
            <div>
              <p className="feature_title">free shipping</p>
              <p className="feature_desc">
                free shipping on all us order. order above $50
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
