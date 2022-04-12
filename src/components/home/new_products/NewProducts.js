import React from "react";
import { toogle_products_menus } from "../../common/navigation_data/navigation_menu";
import NewProductsNavbar from "../../common/nav_bars/NewProductsNavbar";
import NewProductsData from "../../fake_data/new_products_data.json";
import NewProductCard from "./NewProductCard";
const NewProducts = () => {
  return (
    <>
      <div className="my-10">
        <div className="flex justify-between items-center">
          <div className="section_title_tag">new products</div>
          <div>
            {toogle_products_menus.map((menu) => (
              <NewProductsNavbar key={menu.uid} menu={menu} />
            ))}
          </div>
        </div>
      </div>
      <div className="new_prodcuts_wrapper gap-x-3 grid grid-rows-1 grid-cols-5">
        {NewProductsData.map((product) => (
          <NewProductCard key={product.uid} product_data={product} />
        ))}
      </div>
      <div className="text-center my-2">
        <button className="text-green-800 text-xl font-bold text-center capitalize underline">
          view all products
        </button>
      </div>
    </>
  );
};

export default NewProducts;
