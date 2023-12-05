import { FC } from "react";
import BG from "@assets/contact_Us/BG.svg";
import Container from "../ui/Container";

interface HeroUsProps {}

const HeroUs: FC<HeroUsProps> = () => {
  return (
    <>
    <div className="relative w-full lg:py-40 md:py-28 sm:py-24 py-20 sm:px-24 px-5">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img src={BG} className="w-full h-full" />
        </div>
        <Container className="text-white flex flex-col items-center w-full h-full relative">
          <h1 className="xl:text-[80px] lg:text-[70px] whitespace-nowrap md:text-[47px] sm:text-[36px] text-[23px] font-bold text-main">
            Get in Touch with Our Team
          </h1>
          {/* w-[1288px] */}
          <p className="xl:text-[36px] lg:[33px] md:text-[25px] sm:text-[15px] text-[13px] whitespace-nowrap text-main ">
            Our dedicated team of cybersecurity experts is ready to assist you.
          </p>
        </Container>
      </div>
    </>
  );
};

export default HeroUs;
