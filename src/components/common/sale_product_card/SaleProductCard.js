import Link from "next/link";
import React from "react";

const SaleProductCard = ({ product_data }) => {
  const {
    uid,
    product_title,
    product_thumbnail,
    sale_price,
    regular_price,
    rest_time,
  } = product_data;
  return (
    <Link href={`/products/single_products/${uid}`}>
      <div className="my-3 py-3 cursor-pointer hover:shadow-xl">
        <div className="relative bg-gray-50 mb-4">
          {rest_time && <span className="sale_badge">sale!</span>}
          <img
            className="mx-auto"
            src={product_thumbnail}
            width={200}
            height={200}
          />
        </div>
        <div className="count_down_timer"></div>
        <div className="product_details text-center">
          <h1 className="text-xl text-green-900 spacing-x-1 capitalize font-semibold">
            {product_title}
          </h1>
          <span className="line-through text-sm font-medium text-gray-500 mx-2">
            $ {regular_price}
          </span>
          <span className="text-sm font-semibold text-yellow-600">
            $ {sale_price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SaleProductCard;
