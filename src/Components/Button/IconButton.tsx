import React from "react";

function IconButton({ icon, name, className, onClick }: any) {
  return (
    <div
      className={`flex items-center font-poppins cursor-pointer ${className}`}
      onClick={onClick}
    >
      {!!icon && <div>{icon}</div>}
      <span className={`${icon && "ml-2"} text-sm`}>{name}</span>
    </div>
  );
}

export default IconButton;
