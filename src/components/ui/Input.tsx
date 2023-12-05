import { cn } from "@/utils";
import { FC } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  className,
  p_className,
  type,
  placeholder,
  ...props
}) => {
  return (
    <div
      className={cn(
        "px-4 border border-black rounded-full bg-white flex items-center",
        className
      )}
    >
      <input
        className="flex w-full outline-none bg-transparent px-1 py-5 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
