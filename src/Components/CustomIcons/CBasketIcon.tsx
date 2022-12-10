import React from "react";
import Basket from "../../assets/Icons/Basket";

interface CBasketIconProps {
  count: number | string;
}

function CBasketIcon({ count }: CBasketIconProps) {
  return (
    <div className="relative">
      <Basket />
      <div className="absolute w-4 h-4 bg-c4-a text-c1-j text rounded-lg flex items-center justify-center s6 -bottom-1 -left-1">
        {count}
      </div>
    </div>
  );
}
export default CBasketIcon;
