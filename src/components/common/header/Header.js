import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { header_menus } from "../navigation_data/navigation_menu";
import NavBars from "../nav_bars/NavBars";

const Header = () => {
  return (
    <>
      <header className="bg-white mt-7">
        <nav className="header_navigation md:grid xxxs:flex xxxs:justify-between xxxs:items-center">
          <div>
            <h1 className="font-bold tab:text-4xl xxxs:text-xl capitalize">
              <span className="text-green-900">veg</span>
              <span className="text-button-btnPrimary">valley</span>
            </h1>
          </div>
          <div className="tv:flex pc:flex laptop:flex tab:flex md:flex justify-start items-center sm:hidden xs:hidden xxs:hidden xxxs:hidden">
            {header_menus.map((menu) => (
              <NavBars key={menu.uid} menu={menu} />
            ))}
          </div>
          <div className="flex justify-end items-center">
            <button
              className="btn2 btn_menubar tv:w-10
                          pc:w-10
                          laptop:w-10
                          tab:w-10
                          md:w-10
                          sm:w-8
                          xs:w-8
                          xxxs:w-8
                          tv:h-10
                          pc:h-10
                          laptop:h-10
                          tab:h-10
                          md:h-10
                          sm:h-8
                          xs:h-8
                          xxxs:h-8"
            >
              <BiMenuAltRight />
            </button>
            <button className="btn btn_login">LOGIN</button>
            <button className="btn btn_signup">SIGN UP</button>
            <div className="relative">
              <button
                className="btn2
                          btn_cart   
                          tv:w-10
                          pc:w-10
                          laptop:w-10
                          tab:w-10
                          md:w-10
                          sm:w-8
                          xs:w-8
                          xxxs:w-8
                          tv:h-10
                          pc:h-10
                          laptop:h-10
                          tab:h-10
                          md:h-10
                          sm:h-8
                          xs:h-8
                          xxxs:h-8"
              >
                <FiShoppingCart />
              </button>
              <span className="cart_badge">0</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
