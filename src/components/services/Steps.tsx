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
        <Container className="relative py-10">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <img src={BgSteps} alt="steps" className="w-full h-full" />
          </div>
          {/* h-[639px] */}
          <div className="relative text-center w-full h-full ">
            <h2 className="lg:text-[36px] md:text-[30px] sm:text-[25px] text-[18px]">
              Easy steps to start your pentest
            </h2>
            <div className="grid grid-cols-3 px-10 mt-7 gap-6">
              <div className="flex flex-col items-center justify-center gap-28">
               <StepsGroup/>
               <StepsGroup/>
               
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img src={illustration} className=" max-w-[502px]" />
              </div>
              <div className="flex flex-col items-center justify-center gap-28">
              <StepsGroup/>
               <StepsGroup/>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Steps;
