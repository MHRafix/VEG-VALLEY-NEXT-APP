import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import { Topbar } from "../common/header/Topbar";
import FooterBanner from "./footer_banner/FooterBanner";
import HomeSaleProducts from "./home_sale_products/HomeSaleProducts";
import HomeSlider from "./home_slider/HomeSlider";
import NewProducts from "./new_products/NewProducts";
import Features from "./our_features/Features";
import SaleBanner from "./sale_banner/SaleBanner";
import SubBanner from "./sub_banner/SubBanner";

const HomeMain = () => {
  return (
    <>
      <Topbar />
      <div className="container_wrapper">
        <Header />
        <HomeSlider />
        <Features />
        <SubBanner />
        <HomeSaleProducts />
        <NewProducts />
        <FooterBanner />
      </div>
      <SaleBanner />
      <Footer />
    </>
  );
};

export default HomeMain;
