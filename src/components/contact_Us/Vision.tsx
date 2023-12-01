import { FC } from "react";
import Container from "@ui/Container";
import Title from "@globals/Title";
import S_border from "@globals/S_border";
import shield from "@assets/contact_Us/shield.svg";

interface VisionProps {}

const Vision: FC<VisionProps> = () => {
  return (
    <>
      <Container className="mb-28">
        <Title ttl="Our Vision" />
        <div className="grid 2xl:grid-cols-4 grid-cols-plog gap-8 w-full ">
          <S_border
            className="p-4 sm:mb-9 mb-16"
            src={shield}
            disc="Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <S_border
            className="p-4 sm:mb-9 mb-16"
            src={shield}
            disc="Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <S_border
            className="p-4 sm:mb-9 mb-16"
            src={shield}
            disc="Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <S_border
            className="p-4 sm:mb-9 mb-16"
            src={shield}
            disc="Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor ipsum facilisi adipiscing. Sit eget ut diam iaculis eu"
          />
          <S_border
            className="p-4 sm:mb-9 mb-16"
            src={shield}
            disc="Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <S_border
            className="p-4 sm:mb-9 mb-16"
            src={shield}
            disc="Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
        </div>
      </Container>
    </>
  );
};

export default Vision;
