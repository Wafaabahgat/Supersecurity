import { FC } from "react";
import HomeForm from "@globals/HomeForm";
import Services_bg from "@assets/home/Services_bg.png";
import { cn } from "@/utils";

interface ServicesProps {}

const data = [
  {
    ttl: "Mobile applications penetration testing",
    disc: "Lorem ipsum dolor sit amet consectetur. Et sit morbi nisi mauris nibh. Dui porta velit.",
  },
  {
    ttl: "Mobile applications penetration testing",
    disc: "Lorem ipsum dolor sit amet consectetur. Et sit morbi nisi mauris nibh. Dui porta velit.",
  },
  {
    ttl: "Mobile applications penetration testing",
    disc: "Lorem ipsum dolor sit amet consectetur. Et sit morbi nisi mauris nibh. Dui porta velit.",
  },
  {
    ttl: "Mobile applications penetration testing",
    disc: "Lorem ipsum dolor sit amet consectetur. Et sit morbi nisi mauris nibh. Dui porta velit.",
  },
];

const Services: FC<ServicesProps> = () => {
  return (
    <>
      <HomeForm ttl="Our Services">
        <p className="text-main text-center lg:text-[36px] md:text-[30px] sm:text-[25px] text-[20px] px-5 lg:py-20 md:py-16 sm:py-10 py-6">
          All The Services You need In One Place
        </p>
        <div className="flex items-center">
          <div className="grid xl:grid-cols-1 sm:grid-cols-2 xl:gap-4 sm:gap-5 gap-y-4">

            {data?.map((e, i) => (
              <div
                key={i}
                className={cn(
                  i === 0 ? "xl:ml-14" : i === 3 ? "xl:ml-20" : "",
                  "services_bg"
                )}
              >
                <h4 className="text-main-light mb-2 text-[15px] px-6 font-medium">
                  {e?.ttl}
                </h4>
                <p className="text-main-dark text-[12px] px-6">{e?.disc}</p>
              </div>
            ))}
          </div>
          <div className="xl:block hidden w-full xl:col-span-3 xl:scale-110 xl:z-[1]">
            <img src={Services_bg} />
          </div>
        </div>
      </HomeForm>
    </>
  );
};

export default Services;
