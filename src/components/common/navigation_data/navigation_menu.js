import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

// naviagtion menus are here
/**
 * Header navigation menus
 */
export const header_menus = [
  { uid: 4384, menu_name: "home", menu_href: "/" },
  { uid: 4684, menu_name: "shop", menu_href: "/shop" },
  { uid: 4484, menu_name: "blog", menu_href: "/blog" },
  { uid: 4284, menu_name: "contact", menu_href: "/contact" },
];

/**
 * Sale products navigation menus
 */
export const toogle_products_menus = [
  { uid: 4389, menu_name: "vegetables" },
  { uid: 4687, menu_name: "fruits" },
  { uid: 4485, menu_name: "salad" },
  { uid: 4282, menu_name: "fish" },
];

/**
 * All categories here
 */
export const all_categories = [
  { uid: 43239, category_name: "healthy" },
  { uid: 46127, category_name: "marrow" },
  { uid: 44235, category_name: "allium" },
  { uid: 42232, category_name: "vitamins" },
  { uid: 42132, category_name: "green vaegetables" },
  { uid: 52132, category_name: "fresh fruits" },
  { uid: 22132, category_name: "daily needs" },
  { uid: 32132, category_name: "milky products" },
  { uid: 42130, category_name: "more category" },
  { uid: 42131, category_name: "uncategorize" },
];

/**
 * Social icons menus here
 */
export const social_menus = [
  { uid: 1223, icon: FaFacebookF },
  { uid: 1224, icon: AiOutlineTwitter },
  { uid: 1225, icon: AiOutlineInstagram },
  { uid: 1226, icon: FaLinkedinIn },
  { uid: 1227, icon: FaPinterestP },
];

/**
 * Category markup here
 */
export const CategoryMarkup = ({ category }) => {
  return (
    <div className="category_wrapper flex items-center justify-between text-lg text-gray-500 py-2 px-4 my-2 font-medium space-x-1 capitalize hover:bg-gray-300 hover:text-black hover:duration-500 cursor-pointer">
      {category} <RiArrowRightSLine />
    </div>
  );
};

/**
 * Icon markup here
 */
export const IconMarkup = ({ Icon }) => {
  return (
    <div className="social_icon_wrapper">
      <Icon />
    </div>
  );
};
