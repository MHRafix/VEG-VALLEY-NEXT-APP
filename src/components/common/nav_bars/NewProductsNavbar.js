import React from "react";

const NewproductsNavbar = ({ menu }) => {
  const { menu_name, menu_href } = menu;

  return (
    <span className="text-gray-500 text-sm pc:text-xl space-x-1 font-medium uppercase mx-2">
      {menu_name}
    </span>
  );
};

export default NewproductsNavbar;
