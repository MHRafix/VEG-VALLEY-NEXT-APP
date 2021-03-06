import React from "react";
import { CgPhone } from "react-icons/cg";
import { IoIosMail } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  header_menus,
  IconMarkup,
  social_menus,
} from "../navigation_data/navigation_menu";
import FooterNavBars from "../nav_bars/FooterNavBars";

const Footer = () => {
  return (
    <>
      <div className="footer_area mt-20">
        <div className="container_wrapper">
          <div className="footer_wrapper">
            <div className="footer_block">
              <div className="block_header md:!py-9 xxxs:py-4">
                <h1 className="font-bold text-2xl capitalize">
                  <span className="text-green-900">veg</span>
                  <span className="text-button-btnPrimary">valley</span>
                </h1>
              </div>
              <div className="block_content">
                <p className="text-gray-600 w-3/4 font-medium md:!mb-10 xxxs:mb-5">
                  Lorem ipsum, dolor sit amet consectetur
                </p>
                <span className="social_icon_area">
                  {social_menus.map((menu) => (
                    <IconMarkup key={menu.uid} Icon={menu.icon} />
                  ))}
                </span>
              </div>
            </div>
            <div className="footer_block">
              <div className="block_header md:!py-9 xxxs:py-5">
                <h1 className="section_title_tag text-2xl">categories</h1>
              </div>
              <div className="block_content">
                <div className="grid">
                  {header_menus.map((menu) => (
                    <FooterNavBars key={menu.uid} menu={menu} />
                  ))}
                </div>
              </div>
            </div>
            <div className="footer_block">
              <div className="block_header md:!py-9 xxxs:py-5">
                <h1 className="section_title_tag text-2xl">usefull linkes</h1>
              </div>
              <div className="block_content">
                <div className="grid">
                  {header_menus.map((menu) => (
                    <FooterNavBars key={menu.uid} menu={menu} />
                  ))}
                </div>
              </div>
            </div>
            <div className="footer_block">
              <div className="block_header md:!py-9 xxxs:py-5 mb-2">
                <h1 className="section_title_tag text-2xl">stay connected</h1>
              </div>
              <div className="block_content">
                <div className="flex justify-left items-center mb-5">
                  <input
                    className="tv:w-10/12 pc:w-10/12 laptop:w-10/12 tab:w-10/12 md:w-1/3 sm:w-2/4 xs:w-full xxs:w-full bg-gray-50 py-2 rounded-tl-md rounded-bl-md text-sm px-2 outline-none"
                    type="text"
                    name="text"
                    placeholder="Email address"
                  />
                  <button className="btn2 btn_search py-1 px-1 -ml-1 rounded-md text-3xl">
                    <MdOutlineKeyboardArrowRight />
                  </button>
                </div>

                <div className="flex justify-left items-center">
                  <div className="text-button-btnPrimary text-xl m-1">
                    <CgPhone />
                  </div>
                  <div>
                    <p className="text-textColor-textGray text-sm font-medium">
                      (088) 1611859565
                    </p>
                  </div>
                </div>
                <div className="flex justify-left items-center">
                  <div className="text-button-btnPrimary text-xl m-1">
                    <IoIosMail />
                  </div>
                  <div>
                    <p className="text-textColor-textGray text-sm font-medium">
                      Support@vegvalley.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="footer_bottom_area md:!mt-20 xxxs:mt-10 py-5 md:!flex md:!justify-between md:!items-center xxxs:grid xxxs:gap-10"
            style={{ borderTop: "1px solid #e7d5d5" }}
          >
            <div className="copy-right_text">
              <h2 className="font-medium text-sm text-gray-500 spacing-x-1">
                Copyright ??2022 vegvalley. All Rights Reserved.
              </h2>
            </div>
            <div className="brnads_area flex justify-between">
              <div className="brand_icon mx-2">
                <img
                  src="https://i.ibb.co/bghzVQN/download.png"
                  alt="brnad_icon"
                  className="brand_image"
                  height="60"
                  width="80"
                />
              </div>
              <div className="brand_icon mx-2">
                <img
                  className="brand_image"
                  width="80"
                  height="60"
                  src="https://i.ibb.co/GtxRfYc/discover.jpg"
                  alt="brnad_icon"
                />
              </div>
              <div className="brand_icon mx-2">
                <img
                  className="brand_image"
                  width="80"
                  height="60"
                  src="https://i.ibb.co/6P6Rwv6/visapng.png"
                  alt="brnad_icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
