import Contact from "@/components/contact_Us/Contact";
import HeroUs from "@/components/contact_Us/HeroUs";
import { FC } from "react";

interface contact_UsProps {}

const contact_Us: FC<contact_UsProps> = () => {
  return (
    <>
      <div className="main_img">
        <HeroUs />
        <Contact/>
      </div>
    </>
  );
};

export default contact_Us;
