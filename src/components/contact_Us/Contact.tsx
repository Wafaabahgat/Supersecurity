import { FC } from "react";
import Wrapper from "./Wrapper";
import Collaborate from "./Collaborate";
import Container from "../ui/Container";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <Container className="md:mt-28 mt-6">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <Collaborate />
        <Wrapper />
      </div>
    </Container>
  );
};

export default Contact;
