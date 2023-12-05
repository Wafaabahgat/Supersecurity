import { FC } from "react";

interface CollaborateProps {}

const Collaborate: FC<CollaborateProps> = () => {
  return (
    <div className="mt-12 max-w-[414px]">
      <div>
        <h1 className="lg:text-[48px] md:text-[40px] mb-5 text-3xl font-bold text-main">
          Contact Us
        </h1>
        <p className="lg:text-[32px] text-2xl text-main whitespace-nowrap">
          Collaborate, Secure, Succeed
        </p>
      </div>
      {/*  */}
      <div className="">
        <div className=" md:mt-24 mt-10 flex justify-between">
          {/* <div className="flex flex-col absolute top-2 left-0 text-center">
            <span className="bg-main-light py-1 px-3 text-white rounded-full">
              1
            </span>
            <span className="bg-main-light w-[2px] h-[184px] mx-auto"></span>
            <span className="bg-main-light py-1 px-3 text-white rounded-full">
              2
            </span>
            <span className="bg-main-light w-[2px] h-[184px] mx-auto"></span>
            <span className="bg-main-light py-1 px-3 text-white rounded-full">
              3
            </span>
          </div> */}
          {/* <div className="flex flex-col left-16 top-0 absolute md:gap-20 gap-5"> */}
          <div className="flex flex-col  md:gap-20 gap-5">
            <div className="">
              <h2 className="md:text-[28px] text-[20px] text-main-light font-semibold">
                Proposal Preparation
              </h2>
              <p className="md:text-[16px] text-[15px] text-text-gray">
                Lorem ipsum dolor sit amet consectetur. Placerat porttitor
                mattis massa odio ullamcorper. Malesuada eget mattis at urna
                lacus.
              </p>
            </div>
            <div className="">
              <h2 className="md:text-[28px] whitespace-nowrap text-[20px] text-main-light font-semibold">
                Discussion and Exploration
              </h2>
              <p className="md:text-[16px] text-[15px] text-text-gray">
                Lorem ipsum dolor sit amet consectetur. Placerat porttitor
                mattis massa odio ullamcorper. Malesuada eget mattis at urna
                lacus.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="md:text-[28px] text-[20px] text-main-light font-semibold">
                Let's Start Testing
              </h2>
              <p className="md:text-[16px] text-[15px] text-text-gray">
                Lorem ipsum dolor sit amet consectetur. Placerat porttitor
                mattis massa odio ullamcorper. Malesuada eget mattis at urna
                lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
