import { FC, HTMLAttributes } from "react";
import Input from "@components/ui/Input";
import { cn } from "@/utils";

interface FormProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  name?: string;
}

const Form: FC<FormProps> = ({ placeholder, name, className }) => {
  return (
    <div className="w-full">
      <h3 className="text-[18px] text-main font-semibold first-letter:capitalize mb-2 text-start">
        {name}
      </h3>
      <Input placeholder={placeholder} className={cn(className, "")} />
    </div>
  );
};

export default Form;
