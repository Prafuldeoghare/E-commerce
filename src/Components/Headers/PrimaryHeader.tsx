import React from "react";

function PrimaryHeader() {
  return (
    <div className="w-full h-12 border-b-[1px] border-c1-a border-opacity-5 px-10 bg-white shadow-lg">
      <div
        id="nav-container"
        className="w-auto h-full flex justify-between items-center bg-white"
      >
        <div className="w-auto bg-white">
          <ul className="min-w-[375px] flex justify-between list-none caption bg-white">
            <li className="text-c2-a bg-white">Chat with us</li>
            <li className="bg-white">+91 9856320125</li>
            <li className="bg-white">info@shopnow.com</li>
          </ul>
        </div>
        <div className="w-auto">
          <ul className="caption ">
            <li className="text-c2-a bg-white">About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrimaryHeader;
