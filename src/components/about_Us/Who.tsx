import { FC } from "react";
import Container from "@ui/Container";

interface WhoProps {}

const Who: FC<WhoProps> = () => {
  return (
    <Container className="mb-28">
      <h1 className="text-main-light lg:text-[38px] text-3xl font-semibold mb-4">Who We Are</h1>
      <p className="text-main-dark lg:text-[26px] text-xl">
        Lorem ipsum dolor sit amet consectetur. Tortor lobortis sed eget vitae
        dictumst sed. Proin morbi imperdiet morbi mauris facilisis habitasse. Eu
        interdum vulputate magna est neque sit arcu arcu. Tellus ut hac eleifend
        magna. Ultrices diam tellus ut dignissim turpis ipsum sagittis commodo.
        Elementum in massa purus id suspendisse faucibus duis. Risus cras
        pulvinar pharetra faucibus et sociis accumsan molestie.
      </p>
    </Container>
  );
};

export default Who;
