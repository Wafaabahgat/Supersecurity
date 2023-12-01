import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";

interface S_borderProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  ttl?: string;
  disc?: string;
}

const S_border: FC<S_borderProps> = ({ src, ttl, disc, className }) => {
  return (
    <>
      <div className="element mt-20 bg-white px-4 pt-14 pb-10 rounded-[26px]">
        <div className="relative">
          <div className="absolute mt-6 -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className={cn(
                "footer_border w-fit bg-white shadow-md rounded-3xl ",
                className
              )}
            >
              <img src={src} alt="" />
            </div>
          </div>
          <div className="pt-6 text-center">
            <h2 className="font-inter mb-1 text-[22px] font-semibold text-center text-main-light ">
              {ttl}
            </h2>
            <p className="text-[16px] text-slate-500">{disc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default S_border;
