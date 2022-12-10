import React from "react";
import ChevronDown from "../../assets/Icons/ChevronDown";

interface NavListTypes {
  title: string;
}

function NavList({ title }: NavListTypes) {
  return (
    <div className="flex items-center">
      <span className="s5 text-c1-j mr-1">{title}</span>
      <ChevronDown />
    </div>
  );
}

export default NavList;
