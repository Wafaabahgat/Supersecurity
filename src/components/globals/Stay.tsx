import { FC } from "react";
import Container from "../ui/Container";
import imgSty from "@assets/stay_informed.png";
import { Button } from "../ui/Button";

interface StayProps {}

const Stay: FC<StayProps> = () => {
  return (
    <>
      <div className="mt-20">
        <Container className="relative lg:py-20 md:py-14 py-10 md:px-10 sm:px-7 px-5">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <img src={imgSty} className="w-full h-full" />
          </div>
          <div className="relative text-white text-center w-full h-full">
            <h2 className="lg:text-[77px] md:text-[45px] sm:text-[35px] text-[30px] font-semibold">
              Stay Informed
            </h2>
            <p className="lg:text-[40px] md:text-[28px] text-[18px]">
              Have specific questions or need personalized advice?
            </p>
            <div className="flex items-center justify-center gap-10 mt-5">
              <Button text="Contact Us"  variant="secondary"/>
              <Button text="Schedule call" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Stay;
