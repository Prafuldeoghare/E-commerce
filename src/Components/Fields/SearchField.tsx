import React from "react";
import Search from "../../assets/Icons/Search";

function SearchField() {
  return (
    <div className="w-[500px] h-[42px] bg-c1-h border-[1px] border-c1-d rounded-xl flex items-center justify-around px-4 pt-[10px] pb-[9px]">
      <select name="categories" className="w-[130px] bg-c1-h button">
        <option>All categories</option>
        <option>Mens Wears</option>
        <option>Womens Wears</option>
      </select>
      <div className="w-[22px] h-[1px] bg-c1-d rotate-90"></div>
      <input
        placeholder="Search Products, categories ..."
        className="w-full bg-c1-h body ml-6 mr-4"
      />
      <div className="">
        <Search />
      </div>
    </div>
  );
}

export default SearchField;
