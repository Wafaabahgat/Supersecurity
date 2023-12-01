import { FC, useState } from "react";
import HomeForm from "@globals/HomeForm";
import TtlHome from "@globals/Ttl_Home";
import personImage from "@assets/home/personImage.png";
import activeCircle from "@assets/home/activeCircle.svg";
import circle from "@assets/home/circle.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import CommentCard from "./CommentCard";

interface TestimonialProps {}

const comments = [
  {
    id: 1,
    img: personImage,
    ttl: " Cedric de Saint Leger 1",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
  {
    id: 2,
    img: personImage,
    ttl: " Cedric de Saint Leger 2",
    subTtl: "CTO at impak Analytics",

    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
  {
    id: 3,
    img: personImage,
    ttl: " Cedric de Saint Leger 3",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
  {
    id: 4,
    img: personImage,
    ttl: " Cedric de Saint Leger 4",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
];

const Testimonial: FC<TestimonialProps> = () => {
  const [current, setcurrent] = useState(1);

  const handleNext = () => {
    if (comments?.length === current) {
      setcurrent(1);
    } else {
      setcurrent(current + 1);
    }
  };
  const handlePrev = () => {
    if (current > 1) {
      setcurrent(current - 1);
    } else {
      setcurrent(comments?.length);
    }
  };
  return (
    <HomeForm ttl="Testimonial">
      <TtlHome ttl="What our clients say" />
      <div className="w-full relative rounded-3xl bg-gradient-to-b from-main-light to-[#0062ff7f] p-6">
        <div>
          {comments?.map((e, i) => {
            return i + 1 === current ? (
              <CommentCard
                key={e.id}
                personImage={e.img}
                disc={e.disc}
                ttl={e.ttl}
                subTtl={e.subTtl}
              />
            ) : (
              ""
            );
          })}
        </div>
        <div className="flex gap-2 items-center justify-center">
          <img
            className="active:scale-90 cursor-pointer"
            onClick={() => setcurrent(1)}
            src={current == 1 ? activeCircle : circle}
            alt=""
          />
          <img
            className="active:scale-90 cursor-pointer"
            onClick={() => setcurrent(2)}
            src={current == 2 ? activeCircle : circle}
            alt=""
          />
          <img
            className="active:scale-90 cursor-pointer"
            onClick={() => setcurrent(3)}
            src={current == 3 ? activeCircle : circle}
            alt=""
          />
          <img
            className="active:scale-90 cursor-pointer"
            onClick={() => setcurrent(4)}
            src={current == 4 ? activeCircle : circle}
            alt=""
          />
        </div>
       
          <button
            className="absolute right-16 bottom-5 flex justify-center items-center"
            onClick={handlePrev}
          >
            <FaArrowLeft className="text-4xl p-1 text-slate-50 bg-main-dark rounded-full" />
          </button>
          <button
            className="absolute right-5 bottom-5 flex justify-center items-center"
            onClick={handleNext}
          >
            <FaArrowRight className="text-4xl p-1 text-slate-50 bg-main-dark rounded-full" />
          </button>
       
      </div>
    </HomeForm>
  );
};

export default Testimonial;
