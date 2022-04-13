import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import {
  all_categories,
  CategoryMarkup,
} from "../../common/navigation_data/navigation_menu";
import { SliderBanner } from "./Slider/Slider";

const HomeSlider = () => {
  const [dropdownActive, setDropdownActive] = useState(true);

  return (
    <>
      <div className="home_slider_area my-10">
        {/* filtering bar here */}
        <div className="header_navigation">
          <div
            className="flex items-center bg-yellow-500 text-white px-4 cursor-pointer"
            onClick={() => {
              if (dropdownActive) setDropdownActive(false);
              else setDropdownActive(true);
            }}
          >
            <div className="flex justify-between items-center text-xl mr-20 font-medium">
              <AiOutlineBars /> <span className="ml-2">All Categories</span>
            </div>
            {dropdownActive ? (
              <div>
                <IoIosArrowDown />
              </div>
            ) : (
              <div>
                <IoIosArrowUp />
              </div>
            )}
          </div>
          <div
            className="mx-3"
            style={{ display: "grid", gridTemplateColumns: "15% 71% 14%" }}
          >
            <div className="sorting_menu">
              <select className="sorting_input">
                <option value="all">All</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
            <div>
              <input
                className="w-full p-4 text-2xl ml-1 outline-none"
                type="search"
                name="search"
                placeholder="Search product..."
              />
            </div>
            <div>
              <button className="btn2 btn_search py-4 px-7 text-3xl">
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="text-yellow-500 text-6xl mx-1">
              <MdOutlinePhoneInTalk />
            </div>
            <div>
              <p className="text-black text-xl font-medium">(088) 1611859565</p>
              <p className="text-gray-500 text-lg font-medium">
                Customer Support
              </p>
            </div>
          </div>
        </div>

        {/* categories and slider */}
        <div className="slider_wrapper_main mt-3">
          <div
            className={
              dropdownActive
                ? "categories_wrapper_active"
                : "categories_wrapper_deactive"
            }
          >
            {all_categories.map((category) => (
              <CategoryMarkup
                key={category.uid}
                category={category.category_name}
              />
            ))}
          </div>

          <div
            className={
              dropdownActive ? "slider_wrapper_normal" : "slider_wrapper_extend"
            }
          >
            <SliderBanner />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
