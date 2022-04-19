import React from "react";

const NewProductCard = ({ product_data }) => {
  const {
    uid,
    product_title,
    product_thumbnail,
    sale_price,
    regular_price,
    rest_time,
  } = product_data;
  return (
    <div className="bg-gray-50 mb-4 p-3 cursor-pointer hover:shadow-xl hover:duration-300">
      <div>
        <img className="mx-auto" src={product_thumbnail} width="50%" />
      </div>
      <div className="text-center mt-2">
        <h1 className="text-xl text-green-900 spacing-x-1 capitalize font-semibold">
          {product_title}
        </h1>
        <span className="line-through text-sm font-medium text-textColor-textGray mx-2">
          $ {regular_price}
        </span>
        <span className="text-sm font-semibold text-button-btnPrimary">
          $ {sale_price}
        </span>
      </div>
    </div>
  );
};

export default NewProductCard;
