import Articals from "@/components/blog/Articals";
import Hero from "@/components/globals/Hero";
import { FC } from "react";

interface BlogProps {}

const Blog: FC<BlogProps> = () => {
  return (
    <>
      <div className="main_img">
        <Hero
          className="lg:text-[99px] md:text-[60px] sm:text-[50px] text-[30px] whitespace-nowrap "
          ttl="Welcome to our Blog"
          disc="Discover the most up-to-date information on cyber risks and how to
            mitigate them."
        />
        <Articals />
      </div>
    </>
  );
};

export default Blog;
