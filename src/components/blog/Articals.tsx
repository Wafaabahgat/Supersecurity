import { FC } from "react";
import BlogCard from "./BlogCard";
import Container from "@ui/Container";

interface ArticalsProps {}

const Articals: FC<ArticalsProps> = () => {
  return (
    <div className="mt-32">
      <Container>
        <div className="grid grid-cols-plog gap-8 w-full ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </div>
  );
};

export default Articals;
