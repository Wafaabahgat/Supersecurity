import Contact from "@/components/contact_Us/Contact";
import BG from "@assets/contact_Us/BG.svg";
import Hero from "@/components/globals/Hero";
import { FC } from "react";

interface contact_UsProps {}

const contact_Us: FC<contact_UsProps> = () => {
  return (
    <>
      <div className="main_img">
        <div className="mx-5">
          <Hero
            bg_img={BG}
            className="xl:text-[80px] lg:text-7xl md:text-6xl sm:text-4xl text-2xl lg:mt-16"
            ttl="Get in Touch with Our Team"
            disc="Team
          Our dedicated team of cybersecurity experts is ready to assist you."
            p_class="md:mb-8"
          />
        </div>
        <Contact />
      </div>
    </>
  );
};

export default contact_Us;
