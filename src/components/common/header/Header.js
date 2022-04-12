import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { header_menus } from "../navigation_data/navigation_menu";
import NavBars from "../nav_bars/NavBars";

const Header = () => {
  return (
    <>
      <header className="bg-white mt-7">
        <nav className="header_navigation">
          <div>
            <h1 className="font-bold text-4xl capitalize">
              <span className="text-green-900">veg</span>
              <span className="text-yellow-500">valley</span>
            </h1>
          </div>
          <div className="flex justify-start items-center ml-1">
            {header_menus.map((menu) => (
              <NavBars key={menu.uid} menu={menu} />
            ))}
          </div>
          <div className="flex justify-end items-center">
            <button className="btn btn_login">LOGIN</button>
            <button className="btn btn_signup">SIGN UP</button>
            <div className="relative">
              <button className="btn2 btn_cart w-10 h-10 ">
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
