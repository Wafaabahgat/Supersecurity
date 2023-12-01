import { FC } from "react";
import Container from "../ui/Container";
import BG from "@assets/BG.svg";
import { cn } from "@/utils";

interface HeroProps {
  ttl: string;
  disc: string;
}

const Hero: FC<HeroProps> = ({ ttl, disc,className }) => {
  return (
    <div className="relative md:py-20 px-10 py-10 lg:mr-6 md:mr-14">
      <div className="absolute w-full h-full z-0">
        <img src={BG} className="w-full h-full" />
      </div>
      <Container className="relative lg:py-18 md:py-10 py-6 md:top-14 top-5">
        <div className="relative text-white text-center w-full h-full">
          <h3
            className={cn(
              " font-semibold mx-auto mb-4",
              className
            )}
          >
            {ttl}
          </h3>
          <p className="lg:text-[36px] md:text-[25px] sm:text-[16px] text-[14px]">{disc}</p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
