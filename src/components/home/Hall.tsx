import { FC } from "react";
import HomeForm from "@globals/HomeForm";
import { Button } from "@ui/Button";
import Arrow_Right from "@assets/home/Arrow_Right.svg";
import Google from "@assets/home/Google.svg";
import Careem from "@assets/home/Careem.svg";
import Twitter from "@assets/home/Twitter.svg";
import Paypal from "@assets/home/Paypal.svg";
import IBM from "@assets/home/IBM.svg";
import Uber from "@assets/home/Uber.svg";
import Microsoft from "@assets/home/Microsoft.svg";

interface HallProps {}

const images = [Careem, Paypal, IBM, Microsoft, Twitter, Google, Uber];

const Hall: FC<HallProps> = () => {
  return (
    <>
      <HomeForm ttl="Hall of Fames">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-24">
          <div className="max-w-[471px]">
            <p className="text-main mb-2 lg:text-[36px] md:text-[30px] sm:text-[25px] text-[20px] py-6">
              “Our Exceptional Team Recognized by Industry Leaders for Enhancing
              Security"
            </p>

            <Button text="View more">
              <img className="mt-1" src={Arrow_Right} alt="" />
            </Button>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-3 gap-4">
            {images?.map((e, i) => (
              <img
                key={i}
                src={e}
                className="w-full h-full py-5 border border-slate-200 px-3 hover:bg-white cursor-pointer rounded-xl img_effect"
              />
            ))}
          </div>
        </div>
      </HomeForm>
    </>
  );
};

export default Hall;
