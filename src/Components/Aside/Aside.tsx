import React from "react";
import CategoriesSelection from "./CategoriesSelection";
import ViewToggle from "./ViewToggle";

function Aside() {
  return (
    <div className="w-full h-auto">
      <div className="px-10">
        <ViewToggle />
      </div>
      <div className="px-10 mt-10">
        <CategoriesSelection />
      </div>
    </div>
  );
}

export default Aside;
