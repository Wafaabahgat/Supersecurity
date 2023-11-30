import { FC } from "react";

interface CommentCardProps {}

const CommentCard: FC<CommentCardProps> = ({
  children,
  personImage,
  ttl,
  subTtl,
  disc,
  className,
}) => {
  return (
    <>
        <div className="flex items-center gap-4">
          <div className="lg:w-[141px] md:[120px] w-[90px]">
            <img src={personImage} alt="w-full" />
          </div>
          <div className="">
            <h2 className="lg:text-[36px] text-[25px] text-white">{ttl}</h2>
            <h5 className="lg:text-[24px] text-[15px] text-white">{subTtl} </h5>
          </div>
        </div>
        <p className="text-white lg:text-[28px] text-[18px] lg:w-[85%] w-[95%] mx-auto lg:my-10 my-7 text-center">
          {disc}
        </p>
    
    </>
  );
};

export default CommentCard;
