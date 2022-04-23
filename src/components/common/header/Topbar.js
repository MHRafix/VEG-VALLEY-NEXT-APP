import React from "react";
import { IconMarkup, social_menus } from "../navigation_data/navigation_menu";

export const Topbar = () => {
  return (
    <div className="border border-b-1">
      <div className="container_wrapper">
        <div className="topbar_wrapper">
          <div className="social_icon_area">
            {social_menus.map((menu) => (
              <IconMarkup key={menu.uid} Icon={menu.icon} />
            ))}
          </div>
          <div className="clearfix"></div>
          <div className="language_currency_area">
            <div className="lang_crrency_wrapper">
              <select className="select_input">
                <option value="english">ENGLISH</option>
                <option value="bangla">BANGLA</option>
                <option value="france">FRANCE</option>
              </select>
            </div>
            <div className="text-center text-gray-500 mr-3 flex items-center justify-center">
              |
            </div>
            <div className="lang_crrency_wrapper">
              <select className="select_input">
                <option value="usd">US DOLLAR</option>
                <option value="bdt">BDT</option>
                <option value="rupi">Rupi</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Topbar;
