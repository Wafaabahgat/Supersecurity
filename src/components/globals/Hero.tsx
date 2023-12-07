import { FC, ImgHTMLAttributes } from "react";
import Container from "e:/secure_crowd_v2/src/components/ui/Container";
import { cn } from "@/utils";

import BG from "@assets/BG.png";

interface HeroProps extends ImgHTMLAttributes<HTMLImageElement> {
  ttl: string;
  disc: string;
  p_class?: string;
  bg_img?: string;
}

const Hero: FC<HeroProps> = ({ ttl, disc, p_class, className, bg_img }) => {
  return (
    <div className="relative w-full rounded-2xl  lg:pb-28 md:py-20 py-10 my-10">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={bg_img ? bg_img : BG}
          className={cn(
            bg_img ? "object-cover" : "",
            "h-full w-full  rounded-3xl"
          )}
          alt=""
        />{" "}
      </div>
      <Container  className={cn(
          bg_img ? "text-main" : "text-white",
          "text-center w-full h-full relative"
        )}>
        <h3
          className={cn(
            "font-bold lg:!leading-[80px] xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl max-w-[1200px] mx-auto",
            className
          )}
        >
          {ttl}
        </h3>
        <p
          className={cn(
            "w-full md:leading-10 lg:text-4xl md:text-3xl sm:2xl text-lg xl:mt-14 md:mt-10 mt-6",
            p_class
          )}
        >
          {disc}
        </p>
      </Container>
    </div>
  );
};

export default Hero;
