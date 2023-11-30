import { FC } from "react";
import HomeForm from "@globals/HomeForm";

interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  return (
    <>
      <HomeForm ttl="Our Services">
        <p className="text-main text-center lg:text-[36px] md:text-[30px] sm:text-[25px] text-[20px] px-5 lg:py-20 md:py-16 sm:py-10 py-6">
          All The Services You need In One Place
        </p>
      </HomeForm>
    </>
  );
};

export default Services;
