import { FC } from "react";
import { Button } from "../ui/Button";
import Form from "./Form";
import Container from "../ui/Container";

interface WrapperProps {}

const Wrapper: FC<WrapperProps> = () => {
  return (
    <>
      <div className="border border-main-light rounded-2xl py-5 px-7 max-w-[690px]">
        <div className="w-full">
          <h1 className="lg:text-[56px] md:text-[40px] text-[28px] font-semibold text-main mb-2">
            Get in touch today
          </h1>
          <p className="text-[16px] text-text-primary ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
            dolorol egestas morbi sem vulputate etiam facilisis pellentesque ut
            quis.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 lg:gap-8 gap-3">
          <Form placeholder="John Carter" name="name" />
          <Form placeholder="example@email.com" name="email" />
          <Form placeholder="(123) 456 - 789" name="phone" />
          <Form placeholder="Facebook" name="Company" />
          <Form
            name="Leave us a message"
            placeholder="Please type your message here..."
            className="col-span-2 py-10 rounded-2xl"
            />
        </div>

        <Button text="Send message" size="lg" className="mt-10" />
      </div>
    </>
  );
};

export default Wrapper;
