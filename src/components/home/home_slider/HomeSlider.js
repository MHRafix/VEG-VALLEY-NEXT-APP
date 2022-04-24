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
        <nav className="slider_header_navigation">
          <div
            className="category_toggle_bar"
            onClick={() => {
              if (dropdownActive) setDropdownActive(false);
              else setDropdownActive(true);
            }}
          >
            <div className="bar_icon_wrapper">
              <AiOutlineBars />
              <span className="ml-2 tv:text-lg pc:text-lg laptop:text-lg md:text-sm xxxs:text-sm">
                All Categories
              </span>
            </div>
            {dropdownActive ? (
              <div className="toggle_icon">
                <IoIosArrowDown />
              </div>
            ) : (
              <div className="toggle_icon">
                <IoIosArrowUp />
              </div>
            )}
          </div>
          <div className="w-2/4 tv:flex pc:flex laptop:flex tab:flex md:!flex sm:!flex xxxs:hidden mx-3">
            <div
              className="sorting_menu ml-1"
              style={{ width: "15%", display: "flex", alignItems: "center" }}
            >
              <select className="sorting_input">
                <option value="all">All</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
            <div
              style={{
                width: "71%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className="w-full tv:py-3 pc:py-3 laptop:py-3 tab:py-3 md:!py-3 sm:!py-2 xxxs:py-2 text-lg ml-2 outline-none bg-gray-50 px-1"
                type="search"
                name="search"
                placeholder="Search product..."
              />
            </div>
            <div
              style={{ width: "14%", display: "flex", alignItems: "center" }}
            >
              <button className="bg-button-btnPrimary tv:py-4 pc:py-4 laptop:py-4 tab:py-4 md:!py-3 sm:!py-3 xxxs:py-2 px-5 text-xl">
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="communication_details">
            <div className="communication_icon_style">
              <MdOutlinePhoneInTalk />
            </div>
            <div>
              <p className="text-black tv:text-xl pc:text-xl laptop:text-xl tab:text-xl md:text-xl xxxs:text-sm font-medium">
                (088) 1611859565
              </p>
              <p className="text-textColor-textGray tv:text-base pc:text-base laptop:text-base tab:text-base md:text-base xxxs:text-xs font-medium">
                Customer Support
              </p>
            </div>
          </div>
        </nav>

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
