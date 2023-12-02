import { FC } from "react";
import BgSteps from "@assets/services/BgSteps.png";
import illustration from "@assets/services/illustration.svg";
import Container from "../ui/Container";
import StepsGroup from "./StepsGroup";

interface StepsProps {}

const Steps: FC<StepsProps> = () => {
  return (
    <>
      <div className="mt-20">
        <Container className="relative xl:py-10 py-4">
          <div className="absolute top-0 left-0 w-full h-full z-0 md:block hidden">
            <img src={BgSteps} alt="steps" className="w-full h-full" />
          </div>
          {/* h-[639px] */}
          <div className="relative text-center w-full h-full ">
            <h2 className="lg:text-[36px] md:text-[30px] sm:text-[25px] text-[18px]">
              Easy steps to start your pentest
            </h2>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:px-10 px-16 mt-7 xl:gap-6">
              <div className="flex flex-col items-center justify-center xl:gap-24 md:gap-12 ">
                <StepsGroup num="01" ttl="pre-test" className=" mb-6"/>
                <StepsGroup num="02" ttl="test" className=" mb-6"/>
              </div>
              <div className="hidden w-full h-full xl:flex items-center justify-center">
                <img src={illustration} className=" max-w-[502px]" />
              </div>

              <div className="flex flex-col items-center justify-center xl:gap-24 md:gap-12">
                <StepsGroup num="03" ttl="preporting" className=" mb-6"/>
                <StepsGroup num="04" ttl="review" className=" mb-6"/>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Steps;
