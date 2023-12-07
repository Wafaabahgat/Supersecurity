import { FC } from "react";
import Wrapper from "./Wrapper";
// import Collaborate from "./Collaborate";
import Container from "../ui/Container";
import Collaborate2 from "./Collaborate";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <Container className="my-20">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-12">
        <Collaborate2 />
        <Wrapper />
      </div>
    </Container>
  );
};

export default Contact;
