import { FC } from "react";
import Container from "@ui/Container";
import Line from "./Line";

interface HomeFormProps {
  ttl?: string;
  children?: string;
}

const HomeForm: FC<HomeFormProps> = ({ ttl, children }) => {
  return (
    <>
      <div className="mt-32">
        <Container>
          <Line ttl={ttl} />
          <div>{children}</div>
        </Container>
      </div>
    </>
  );
};

export default HomeForm;
