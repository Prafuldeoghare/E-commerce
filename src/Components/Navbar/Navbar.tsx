import React from "react";
import NavList from "./NavList";

function Navbar() {
  return (
    <div className="w-full h-[55px] bg-c1-a py-4 px-[45px]">
      <ul className="flex">
        <li className="mr-10">
          <NavList title={"All"} />
        </li>
        <li className="mr-10">
          <NavList title={"Mens Wears"} />
        </li>
        <li className="mr-10">
          <NavList title={"Women Wears"} />
        </li>
        <li className="mr-10">
          <NavList title={"Jewellery"} />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
