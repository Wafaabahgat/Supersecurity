import { FC } from "react";
import HomeForm from "@globals/HomeForm";
import Google from "@assets/home/Google.svg";
import Facebook from "@assets/home/Facebook.svg";
import YouTube from "@assets/home/YouTube.svg";
import Pinterest from "@assets/home/Pinterest.png";
import Twitch from "@assets/home/Twitch.svg";
import Webflow from "@assets/home/Webflow.svg";
import TtlHome from "@globals/Ttl_Home";

interface ClientsProps {}
const images = [Google, Facebook, YouTube, Pinterest, Twitch, Webflow];

const Clients: FC<ClientsProps> = () => {
  return (
    <>
      <HomeForm ttl="Our Client">
        <TtlHome
          ttl=" “SecureCrowd enables companies of all sizes to create secure defenses
          against hackers.“"
        />
        <div className="flex gap-5 flex-wrap items-center justify-evenly ">
          {images?.map((e, i) => (
            <img
              key={i}
              className="p-4 rounded-lg cursor-pointer img_effect"
              src={e}
              alt=""
            />
          ))}
        </div>
      </HomeForm>
    </>
  );
};

export default Clients;
