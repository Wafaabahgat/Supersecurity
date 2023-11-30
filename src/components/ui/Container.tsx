import { cn } from "@/utils";
import { FC, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        className,
        "lg:w-[80%] md:w-[90%] w-[95%] max-w-[2000px] mx-auto mt-10 "
      )}
    >
      {children}
    </div>
  );
};

export default Container;
