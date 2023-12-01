import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  ttl: string;
}

const Title: FC<TitleProps> = ({ className, ttl }) => {
  return (
    <>
      <h2
        className={cn(
          "text-center text-[36px] text-main font-bold mb-8",
          className
        )}
      >
        {ttl}
      </h2>
    </>
  );
};

export default Title;
