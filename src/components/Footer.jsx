import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-left p-8 bg-[#07043b] md:flex-row md:justify-between md:px-16  text-white md:text-center">
      <div>
        <img src="/images/logo2.svg" alt="logo" className="w-[100px] my-5" />
        <div className="flex my-4">
          <img
            src="/images/icon-phone.svg"
            alt="icon-phone"
            className="mr-3 w-[16px]"
          />
          <p className="text-xs">Phone: +1-543-123-4567</p>
        </div>
        <div className="flex">
          <img src="/images/icon-email.svg" alt="icon-email" className="mr-3" />
          <p className="text-xs">example@fylo.com</p>
        </div>
      </div>

      <div className="mt-8 md:px-40">
        <ul className="text-xs">
          <li className="mb-3 hover:text-[#2f65f9] cursor-pointer">About Us</li>
          <li className="mb-3 hover:text-[#2f65f9] cursor-pointer">Jobs</li>
          <li className="mb-3 hover:text-[#2f65f9] cursor-pointer">Press</li>
          <li className="hover:text-[#2f65f9] cursor-pointer">Blog</li>
        </ul>
      </div>

      <div className="mt-8 md:px-40">
        <ul className="text-xs">
          <li className="mb-3 hover:text-[#2f65f9] cursor-pointer">
            Contact Us
          </li>
          <li className="mb-3 hover:text-[#2f65f9] cursor-pointer">Terms</li>
          <li className="hover:text-[#2f65f9] cursor-pointer">Privacy</li>
        </ul>
      </div>

      <div className="flex mt-5 mx-auto md:pr-8 md:mt-8 text-xs">
        <h1 className="pr-3 hover:text-[#2f65f9] cursor-pointer">
          <FaFacebookF />
        </h1>
        <h1 className="pr-3 hover:text-[#2f65f9] cursor-pointer">
          <FaTwitter />
        </h1>
        <h1 className=" hover:text-[#2f65f9] cursor-pointer">
          <FaInstagram />
        </h1>
      </div>
    </div>
  );
};

export default Footer;
