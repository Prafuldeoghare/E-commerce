import React from "react";
import Grid from "../../assets/Icons/Grid";
import List from "../../assets/Icons/List";
import IconButton from "../Button/IconButton";

function ViewToggle() {
  return (
    <div className="w-full h-auto">
      <h1 className="text-c1-a font-poppins font-semibold">View</h1>
      <div className="mt-3">
        <IconButton icon={<Grid />} name="Grid view" />
      </div>
      <div className="mt-3">
        <IconButton icon={<List />} name="List view" />
      </div>
    </div>
  );
}

export default ViewToggle;
