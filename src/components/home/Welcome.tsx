import { FC } from "react";
import welcome from "@assets/home/welcome-bg.svg";
import Container from "../ui/Container";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  return (
    <>
      <div className="relative welcome mx-auto before:bg-bottom">
        <Container className="text-center flex flex-col items-center relative py-14">
          <h2 className="text-main lg:px-24 font-bold lg:text-[60px] md:text-[45px] sm:text-[35px] text-[28px] whitespace-nowrap">
            Welcome to <span className="text-main-light">securecrowd</span>
            <br />
            your digital fortest
          </h2>
          <p className="text-main-dark lg:text-[36px] md:text-[25px] px-10 text-[20px] lg:mx-36 mt-6 mx-auto whitespace-nowrap">
            Get Prepared, and Hack your application
            <br />
            before Real Hackers do!
          </p>
        </Container>
      </div>
    </>
  );
};

export default Welcome;
{
  /* <div className="mx-auto relative mt-20 rounded-2xl ">
        <div className="absolute top-0 left-0 z-0 "> */
}
