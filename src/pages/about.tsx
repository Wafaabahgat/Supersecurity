import { FC } from "react";
import Hero from "@/components/globals/Hero";
import Who from "@/components/contact_Us/Who";
import Results from "@/components/contact_Us/Results";
import Vision from "@/components/contact_Us/Vision";

interface aboutProps {}

const about: FC<aboutProps> = () => {
  return (
    <>
      <div className="main_img">
        <Hero
          className="lg:text-[80px] md:text-[45px] sm:text-[33px] text-[25px] w-[40%]"
          ttl="Why Securecrowd?"
          disc="crowdsourced security platform that helps organizations identify and fix security vulnerabilities before they can be exploited."
        />
        <Who/>
        <Results/>
        <Vision/>
      </div>
    </>
  );
};

export default about;
