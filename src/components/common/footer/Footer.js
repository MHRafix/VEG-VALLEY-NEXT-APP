import Image from "next/image";
import React from "react";
import { CgPhone } from "react-icons/cg";
import { IoIosMail } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Logo from "../../../images/logo/logo.png";
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
          <div className="footer_wrapper grid grid-rows-1 grid-cols-4">
            <div className="footer_block">
              <div className="block_header">
                <Image src={Logo} width={150} height={100} alt="site_logo" />
              </div>
              <div className="block_content">
                <p className="text-gray-600 w-3/4 font-medium mb-3 ">
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
              <div className="block_header py-9">
                <h1 className="section_title_tag text-3xl">categories</h1>
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
              <div className="block_header py-9">
                <h1 className="section_title_tag text-3xl">usefull linkes</h1>
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
              <div className="block_header py-9 mb-2">
                <h1 className="section_title_tag text-3xl">stay conected</h1>
              </div>
              <div className="block_content">
                <div className="flex justify-center items-center mb-5">
                  <input
                    className="w-10/12 bg-gray-50 py-3 rounded-tl-md rounded-bl-md text-xl px-2 ml-2 outline-none"
                    type="text"
                    name="text"
                    placeholder="Email address"
                  />
                  <button className="btn2 btn_search py-3 px-3 -ml-1 rounded-md text-3xl">
                    <MdOutlineKeyboardArrowRight />
                  </button>
                </div>

                <div className="flex justify-left items-center">
                  <div className="text-yellow-400 text-3xl my-2 mx-1">
                    <CgPhone />
                  </div>
                  <div>
                    <p className="text-black text-xl font-medium">
                      (088) 1611859565
                    </p>
                  </div>
                </div>
                <div className="flex justify-left items-center my-2">
                  <div className="text-yellow-400 text-3xl mx-1">
                    <IoIosMail />
                  </div>
                  <div>
                    <p className="text-black text-xl font-medium">
                      Support@vegvalley.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
