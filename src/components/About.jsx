import React from "react";

const About = () => {
  return (
    <div className="relative w-full mt-16">
      <img
        src="/images/bg-curve-desktop.svg"
        alt="bg-curve-desktop"
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />

      <div className="p-16 bottom-0 left-0 flex flex-col-reverse items-center md:flex-row md:mt-16 md:justify-between">
        <div className="">
          <h1 className="text-xl px-0 md:text-4xl text-[#000032] my-8 font-semibold">
            Stay productive, wherever you are
          </h1>
          <p className="text-xs px-0 md:text-sm text-[#4e4c60] mb-4">
            Never let location be an issue when accessing your files. Fylo has
            you <br /> covered for all of your file storage needs.
          </p>
          <p className="text-xs px-0 md:text-sm text-[#4e4c60] mb-4">
            Securely share files and folders with friends, family and colleagues
            for <br /> live collaboration. No email attachments required!
          </p>

          <div className="flex">
            <p className="underline underline-offset-8 text-[#5d9d8f] text-sm cursor-pointer">
              See how Fylo works
            </p>
            <img
              src="/images/icon-arrow.svg"
              alt="icon-arrow"
              className="mr-2 w-[20px]"
            />
          </div>

          {/* testimonial box */}
          <div class="shadow-md w-[350px] bg-white mt-8 p-5">
            <img
              src="/images/icon-quotes.svg"
              alt="icon-quotes"
              className="fill-[#5d9d8f]"
            />
            <p className="mt-2 text-sm text-[#4e4c60] font-bold">
              Fylo has improved our team productivity by <br />
              an order of magnitude. Since making the <br />
              switch our team has become a well-oiled <br /> collaboration
              machine.
            </p>
            <div className="flex mt-4">
              <img
                src="/images/avatar-testimonial.jpg"
                alt="avatar-testimonial"
                className="w-[50px] mr-4 rounded-full"
              />
              <div className="">
                <h1 className="text-sm text-[#161333] font-black">
                  Kyle Burton
                </h1>
                <p className="text-xs text-[#4e4c60] font-extrabold">
                  Founder & CEO Muddle
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/illustration-2.svg"
          alt="illustration-2"
          className="w-[80%] md:w-[40%] mt-8 mr-10"
        />
      </div>
    </div>
  );
};

export default About;
