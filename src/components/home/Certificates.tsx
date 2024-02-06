import { FC } from "react";
import HomeForm from "../globals/HomeForm";
import TtlHome from "../globals/Ttl_Home";

interface CertificatesProps {}

const Certificates: FC<CertificatesProps> = () => {
  return (
    <HomeForm ttl="Certificates">
      <TtlHome  ttl="Our team holds a diverse range of industry-certifications, reinforcing
        our expertise in cybersecurity."/>
    </HomeForm>
  );
};

export default Certificates;
