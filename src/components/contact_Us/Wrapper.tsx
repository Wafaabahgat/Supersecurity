import { FC } from "react";
import { Button } from "../ui/Button";
import Form from "./Form";

interface WrapperProps {}

const Wrapper: FC<WrapperProps> = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border border-main-light shadow-xl shadow-slate-300 rounded-[32px] py-6 px-14 col-span-3"
    >
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
      <div className="mt-16 grid lg:grid-cols-2  lg:gap-8 gap-3 lg:mb-8 mb-3">
        <Form placeholder="John Carter" name="name" />
        <Form placeholder="example@email.com" name="email" />
        <Form placeholder="(123) 456 - 789" name="phone" />
        <Form placeholder="Facebook" name="Company" />
      </div>
      <div>
        <h3 className="text-[18px] text-main font-semibold first-letter:capitalize mb-2 text-start">
          Leave us a message
        </h3>
        <textarea
          placeholder="Please type your message here..."
          name=""
          id=""
          className="rounded-2xl p-4 border-[0.05rem] outline-none border-black bg-white w-full"
          cols={30}
          rows={8}
        ></textarea>
      </div>
      <Button type="submit" text="Send message" size="lg" className="mt-8" />
    </form>
  );
};

export default Wrapper;
