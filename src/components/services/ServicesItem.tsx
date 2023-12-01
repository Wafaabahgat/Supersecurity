import { FC } from "react";
import Sborder from "@globals/S_border";
import Icon1 from "@assets/services/icon1.svg";
import Icon2 from "@assets/services/icon2.svg";
import Icon3 from "@assets/services/icon3.svg";
import Icon4 from "@assets/services/icon4.svg";
import Icon5 from "@assets/services/icon5.svg";
import Icon6 from "@assets/services/icon6.svg";
import Icon7 from "@assets/services/icon7.svg";
import Icon8 from "@assets/services/icon8.svg";
import Icon9 from "@assets/services/icon9.svg";
import Icon10 from "@assets/services/icon10.svg";
import Container from "@ui/Container";

interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  return (
    <div className="mt-32">
      <Container >
        <div className="grid 2xl:grid-cols-4 grid-cols-plog gap-8 w-full ">
          <Sborder
            src={Icon1}
            ttl="Mobile applications penetration testing"
            disc=" Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor
              ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <Sborder
            src={Icon2}
            ttl="Web Application penetration testing"
            disc=" Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor
              ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <Sborder
            src={Icon3}
            ttl="Network Penetration Testing"
            disc=" Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor
              ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <Sborder
            src={Icon4}
            ttl="source code review"
            disc=" Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor
              ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <Sborder
            src={Icon5}
            ttl="Configuration review"
            disc=" Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor
              ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <Sborder
            src={Icon6}
            ttl="Cloud penetration testing"
            disc=" Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor
              ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <Sborder
            src={Icon7}
            ttl="red team engagements"
            disc=" Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor
              ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <Sborder
            src={Icon8}
            ttl="social engineering"
            disc=" Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor
              ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <Sborder
            src={Icon9}
            ttl="Security Consultancy"
            disc=" Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor
              ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
          <Sborder
            src={Icon10}
            ttl="Information Security Awareness"
            disc=" Lorem ipsum dolor sit amet consectetur. Tristique et vitae tempor
              ipsum facilisi adipiscing. Sit eget ut diam iaculis eu."
          />
        </div>
      </Container>
    </div>
  );
};

export default Services;

