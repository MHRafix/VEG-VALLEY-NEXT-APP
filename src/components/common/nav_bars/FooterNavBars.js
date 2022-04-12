import Link from "next/link";
import React from "react";

const FooterNavBars = ({ menu }) => {
  const { menu_name, menu_href } = menu;

  return (
    <span className="navigation_link2">
      <Link href={`${menu_href}`}>{menu_name}</Link>
    </span>
  );
};

export default FooterNavBars;
