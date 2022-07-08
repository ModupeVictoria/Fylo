import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto px-8 mt-2">
      <img
        src="/images/logo.svg"
        alt="Logo"
        className="w-[60px] md:w-[100px]"
      />
      <ul className="flex font-[300] text-[#a2a1af]">
        <li className="p-4">Features</li>
        <li className="p-4">Team</li>
        <li className="p-4">Sign In</li>
      </ul>
    </div>
  );
};

export default Navbar;
