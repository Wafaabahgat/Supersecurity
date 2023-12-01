import { FC } from "react";

interface StepsGroupProps {}

const StepsGroup: FC<StepsGroupProps> = () => {
  return (
    <>
      <div>
        <div className="flex gap-4 items-center justify-center">
          {/*  */}
          <div className="flex flex-col shadow-3xl border-b border-slate-200 border rounded-full px-3 ">
            <h6 className=" uppercase text-[13px]">step</h6>
            <span className="font-medium text-[21px]">01</span>
          </div>

          <h4 className="font-semibold">PRE-TEST</h4>
        </div>
        <p className="text-[12px] bg-main-light rounded-md p-6 max-w-[291px] text-start text-white">
          Lorem ipsum dolor sit amet consectetur. Fusce enim etiam vitae eu
          velit amet diam nunc. Lorem elit non dignissim molestie ut.
        </p>
      </div>
    </>
  );
};

export default StepsGroup;
