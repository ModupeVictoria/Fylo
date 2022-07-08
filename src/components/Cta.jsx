import React from "react";
import Btn from "./Btn";

const Cta = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:px-16 items-center p-8 bg-[#575989] text-white">
      <div className="">
        <h1 className="mb-5 text-2xl">Get early access today</h1>
        <p className="text-sm">
          It only takes a minute to sign up and our free starter tier is <br />
          extremely generous. If you have any question, our support team <br />
          would be happy to help you.
        </p>
      </div>
      <div className="mx-auto md:mr-20">
        <input
          type="text"
          placeholder="email@example.com"
          className="px-4 mt-3 text-xs text-[#e4e4e4] py-2.5 w-[250px] md:w-[350px] rounded"
        />
        <Btn
          Text={"Get Started For Free"}
          className={
            "bg-[#2f65f9] transition duration-1000 hover:bg-[#6b9bff] text-sm text-white w-[250px] md:w-[200px] py-2 text-center rounded mt-4"
          }
        />
      </div>
    </div>
  );
};

export default Cta;
