import React from "react";
import Btn from "./Btn";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse px-8 w-full md:flex-row md:justify-between md:px-16 ">
      <div className="mb-20">
        <h1 className="text-2xl px-0 text-center my-8 font-semibold text-[#000032] md:text-left md:text-4xl md:mt-24 ">
          All your files in one secure <br />
          location, accessible anywhere.
        </h1>
        <p className="text-xs px-0 text-center mb-8 text-[#4e4c60] md:text-left md:text-sm">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends,family, and
          co-workers.
        </p>
        <div className="flex flex-col mx-auto items-center md:flex-row md:justify-between">
          <input
            type="text"
            placeholder="Enter your email..."
            className="pl-4 mr-4 py-2 text-xs text-[#e4e4e4] w-[250px] md:w-[350px] outline outline-offset-2 outline-2"
          />
          <Btn
            Text={"Get Started"}
            className={
              "bg-[#2f65f9] text-sm mt-4 text-white w-[260px] md:w-[180px] md:mt-0 py-1.5 text-center rounded"
            }
          />
        </div>
      </div>
      <img
        src="/images/illustration-1.svg"
        alt="illustration-1"
        className="w-[70%] mt-8 md:w-[50%]"
      />
    </div>
  );
};

export default Hero;
