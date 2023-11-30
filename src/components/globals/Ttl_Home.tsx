import { FC } from "react";

interface TtlHomeProps {
  ttl?: string;
}

const TtlHome: FC<TtlHomeProps> = ({ ttl }) => {
  return (
    <>
      <p className="text-main text-center lg:text-[36px] md:text-[30px] sm:text-[25px] text-[20px] px-5 lg:py-20 md:py-16 sm:py-10 py-6">
        {ttl}
      </p>
    </>
  );
};

export default TtlHome;

