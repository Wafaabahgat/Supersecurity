import Certificates from "@/components/home/Certificates";
import Clients from "@/components/home/Clients";
import Hall from "@/components/home/Hall";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
import Welcome from "@/components/home/Welcome";
import { FC } from "react";

interface homeProps {}

const home: FC<homeProps> = () => {
  return (
    <div className="flex-1">
      <Welcome />
      <Clients />
      <Services />
      <div className="main_img">
        <Hall />
        <Certificates />
        <Testimonial />
      </div>
    </div>
  );
};

export default home;
