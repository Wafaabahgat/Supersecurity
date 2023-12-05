import { FC } from "react";
import Input from "@components/ui/Input";
import { cn } from "@/utils";

interface FormProps {
  placeholder?: string;
  name?: string;
}

const Form: FC<FormProps> = ({ placeholder, name, className }) => {
  return (
    <>
      <div>
        <h3 className="text-[18px] text-main font-semibold capitalize mb-2 text-start">
          {name}
        </h3>
        <Input
          placeholder={placeholder}
          className={cn(className, "max-w-[286px]")}
        
        />
      </div>
    </>
  );
};

export default Form;
