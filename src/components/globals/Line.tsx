import { FC } from "react";

interface LineProps {
  ttl?: string;
}

const Line: FC<LineProps> = ({ ttl }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <span className="h-[2px] bg-gradient-to-l w-full block from-[#8e8b8b] to-transparent"></span>
        <h2 className="text-main lg:text-[24px] text-[19px] font-medium whitespace-nowrap px-4 py-2">{ttl}</h2>
        <span className="h-[2px] bg-gradient-to-r w-full block from-[#8e8b8b] to-transparent"></span>
      </div>
    </>
  );
};

export default Line;
