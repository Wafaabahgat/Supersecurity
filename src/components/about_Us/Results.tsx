import { FC } from "react";
import Container from "@ui/Container";
import StatInfo from "./StatInfo";

interface ResultsProps {}

const Results: FC<ResultsProps> = () => {
  return (
    <>
      <Container className="mb-28">
        <div className="flex flex-col items-center">
          <h1 className="text-main lg:text-[38px] text-3xl font-semibold mb-2">
            Our results in numbers
          </h1>
          <p className="text-main-dark lg:text-[20px] text-md text-center">
            Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.
          </p>
          <div className="flex lg:gap-14 md:gap-8 gap-6 mt-10">
            <StatInfo num="99" compelet="%" title="Customer satisfaction" />
            <span className="w-[1px] h-[100px] bg-main-light"></span>
            <StatInfo num="32" compelet="M" title="Active users" />
            <span className="w-[1px] h-[100px] bg-main-light"></span>
            <StatInfo num="125" compelet="+" title="Team members" />
            <span className="w-[1px] h-[100px] bg-main-light"></span>
            <StatInfo num="240" compelet="%" title="Company growth" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Results;
