import React from "react";
import SaleProductCard from "../../common/sale_product_card/SaleProductCard";
import SaleProductsData from "../../fake_data/sale_products_data.json";

const HomeSaleProducts = () => {
  return (
    <>
      <div className="section_title mb-10">
        <h1 className="section_title_tag">deals of the week</h1>
        <p className="text-black-700 my-2 text-xl font-medium space-x-1 ">
          Recently added our store
        </p>
      </div>

      <div className="sale_products_wrapper">
        {SaleProductsData.map((product) => (
          <SaleProductCard key={product.uid} product_data={product} />
        ))}
      </div>
    </>
  );
};

export default HomeSaleProducts;
