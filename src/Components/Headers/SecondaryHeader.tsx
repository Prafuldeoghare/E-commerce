import React from "react";
import Basket from "../../assets/Icons/Basket";
import Heart from "../../assets/Icons/Heart";
import Bag from "../../assets/Images/Bag.png";
import NumberCount from "../Badge/NumberCount";
import IconButton from "../Button/IconButton";

function SecondaryHeader() {
  return (
    <div className="w-full h-auto px-10 py-3">
      <div className="flex justify-between items-center">
        <div className="font-medium text-c2-a">
          <div className="text-3xl object-contain flex items-center">
            <img src={Bag} className="mr-2 w-10" />
            <h2 className="font-roboto tracking-wide">Shopnow</h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="m-3">
            <IconButton icon={<Heart />} name="Wishlist" />
          </div>
          <div className="m-3 relative">
            <IconButton icon={<Basket />} name="Add To Cart" />
          </div>
          <div className="m-3 mr-0">
            <IconButton icon={<NumberCount count={112} />} name="Product" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondaryHeader;
