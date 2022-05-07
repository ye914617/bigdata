import React from "react";
import taipeilogo from "./taipeilogo.png";

const Header = () => {
  return (
    <div className="flex items-center flex-col p-2">
      <img src={taipeilogo} alt="logo" className="w-28 h-28" />
      <h1>109年人口戶數及性別</h1>
    </div>
  );
};

export default Header;
