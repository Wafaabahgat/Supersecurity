import { FC } from "react";

interface Collaborate2Props {}

const Collaborate2: FC<Collaborate2Props> = () => {
  return (
    <div className="mt-16 col-span-2">
      <div>
        <h1 className="lg:text-[48px] md:text-[40px] mb-5 text-3xl font-bold text-main">
          Contact Us
        </h1>
        <p className="lg:text-[32px] text-2xl text-main">
          Collaborate, Secure, Succeed
        </p>
      </div>
      <div className="md:mt-32 mt-10">
        <Card
          num="1"
          ttl="Proposal Preparation"
          disc="Lorem ipsum dolor sit amet consectetur. Placerat porttitor mattis
              massa odio ullamcorper. Malesuada eget mattis at urna lacus."
        />
        <Card
          num="2"
          ttl="Discussion and Exploration"
          disc="Lorem ipsum dolor sit amet consectetur. Placerat porttitor mattis
              massa odio ullamcorper. Malesuada eget mattis at urna lacus."
        />
        <Card
          num="3"
          ttl="Let's Start Testing"
          disc="Lorem ipsum dolor sit amet consectetur. Placerat porttitor mattis
              massa odio ullamcorper. Malesuada eget mattis at urna lacus."
          isLine={false}
        />
      </div>
    </div>
  );
};

export default Collaborate2;

const Card = ({
  num,
  ttl,
  disc,
  isLine = true,
}: {
  num: string;
  ttl: string;
  disc: string;
  isLine?: boolean;
}) => {
  return (
    <div className="flex gap-2">
      <div className="relative">
        <span className="bg-main-light w-[32px] h-[32px] flex items-center justify-center text-white rounded-full">
          {num}
        </span>
        {isLine && (
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full z-[-1] bg-main-light"></span>
        )}
      </div>
      <div className="pb-16">
        <h2 className="-mt-1 md:text-[28px] text-[20px] text-main-light font-semibold">
          {ttl}
        </h2>
        <p className="md:text-[16px] text-[15px] mt-4 text-text-gray">{disc}</p>
      </div>
    </div>
  );
};
