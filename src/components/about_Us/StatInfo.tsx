import { FC } from "react";

interface StatInfoProps {
  num: string;
  title: string;
  compelet: string;
}

const StatInfo: FC<StatInfoProps> = ({ num, title, compelet }) => {
  return (
    <>
      <div className="flex flex-col text-center">
        <h3 className="text-main lg:text-[44px] text-2xl font-semibold">
          {num}
          <span className="text-main-light">{compelet}</span>
        </h3>
        <h5 className="text-main mt-4 lg:text-[24px] text-lg font-semibold">
          {title}
        </h5>
      </div>
    </>
  );
};

export default StatInfo;
