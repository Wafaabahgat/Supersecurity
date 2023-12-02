import { cn } from "@/utils";
import { FC } from "react";

interface StepsGroupProps {}

const StepsGroup: FC<StepsGroupProps> = ({ num, ttl, className }) => {
  return (
    <>
      <div className={cn(className, "")}>
        <div className="flex items-center justify-center relative">
          {/*  */}
          <div className="flex flex-col absolute -top-2 left-6 bg-white shadow-md transition-transform rounded-full px-3 ">
            <h6 className="uppercase text-[13px]">step</h6>
            <span className="font-medium text-[21px]">{num}</span>
          </div>
          {/* ml-28 */}
          <h4 className="font-semibold text-[18px]  uppercase mx-auto">
            {ttl}
          </h4>
        </div>
        <p className="text-[12px] bg-main-light rounded-3xl border-l-4 border-main  max-w-[291px] py-7 px-5 text-start text-white">
          Lorem ipsum dolor sit amet consectetur. Fusce enim etiam vitae e velit
          amet diam nunc. Lorem elit non dignissim molestie ut.
        </p>
      </div>
    </>
  );
};

export default StepsGroup;
