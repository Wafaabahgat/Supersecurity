import { FC } from "react";
import Hero from "@/components/globals/Hero";
import ServicesItem from "@components/services/ServicesItem";
import Steps from "@components/services/Steps";
interface servicesProps {}

const services: FC<servicesProps> = () => {
  return (
    <>
      <div className="main_img">
        <Hero
          className="lg:text-[64px] md:text-[45px] sm:text-[30px] text-[20px] w-[80%] "
          ttl="Comprehensive Cybersecurity Solutions"
          disc=" We offer a suite of comprehensive cybersecurity solutions tailored to meet the evolving challenges of the digital world."
        />
        <ServicesItem />
        <Steps/>
      </div>
    </>
  );
};

export default services;
