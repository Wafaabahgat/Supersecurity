import { FC } from "react";
import Image from "@assets/blog/Image.svg";
import Arrow from "@assets/blog/Arrow.svg";
import Avatar from "@assets/blog/Avatar.svg";

interface BlogCardProps {}

const BlogCard: FC<BlogCardProps> = () => {
  return (
    <>
      <div className="p-4 element">
        <div className="flex flex-col items-center justify-center">
          <img src={Image} className=" " alt="" />
          <div className="mt-8 ">
            <h2 className="text-[24px] text-main font-semibold mb-2">
              Lorem ipsum dolor amet consectetur.
            </h2>
            <p className="text-[16px] text-text-gray mb-4">
              Linear helps streamline software projects, sprints, tasks, and bug
              tracking. Here’s how to get started.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="text-main-light font-semibold text-[18px]">
                Read more
              </span>
              <img src={Arrow} className=" " alt="" />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img src={Avatar} className="w-[40px] h-[40px]" alt="" />
                <div className="text-[16px]">
                  <h3 className="text-main font-semibold">Mohamed Baker</h3>
                  <h5 className="text-text-gray ">Team Leader</h5>
                </div>
              </div>
              <div className="text-[16px]">
                <h3 className="text-main font-semibold">Published:</h3>
                <h5 className="text-text-gray ">19 Jan 2022</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
