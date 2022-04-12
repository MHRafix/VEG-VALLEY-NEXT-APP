import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export const header_menus = [
  { uid: 4384, menu_name: "home", menu_href: "/" },
  { uid: 4684, menu_name: "shop", menu_href: "/shop" },
  { uid: 4484, menu_name: "blog", menu_href: "/blog" },
  { uid: 4284, menu_name: "contact", menu_href: "/contact" },
];

export const toogle_products_menus = [
  { uid: 4389, menu_name: "vegetables" },
  { uid: 4687, menu_name: "fruits" },
  { uid: 4485, menu_name: "salad" },
  { uid: 4282, menu_name: "fish" },
];

export const social_menus = [
  { uid: 1223, icon: FaFacebookF },
  { uid: 1224, icon: AiOutlineTwitter },
  { uid: 1225, icon: AiOutlineInstagram },
  { uid: 1226, icon: FaLinkedinIn },
  { uid: 1227, icon: FaPinterestP },
];

export const IconMarkup = ({ Icon }) => {
  return (
    <div className="social_icon_wrapper">
      <Icon />
    </div>
  );
};
