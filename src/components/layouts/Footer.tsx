import { FC } from "react";
import Stay from "@globals/Stay";
import Container from "../ui/Container";
import Logo from "@assets/home/Logo.svg";
import {
  FacebookIcon,
  GithupIcon,
  InstgramIcon,
  TwitterIcon,
} from "@/assets/home/SVGSocial";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <>
      <div >
        <Stay />
        <Container className="footer_border py-10 px-2 ">
          <div className="grid grid-cols-2 gap-14">
            <div className="flex flex-col justify-between gap-4 max-w-[330px] mx-10">
              <img className=" max-w-[300px]" src={Logo} alt="" />
              <p className=" text-slate-500">
                Lorem ipsum dolor sit amet consectetur. Egestas in consequat
                nisl mattis elementum neque.
              </p>
              <div className="flex items-center gap-4">
                <TwitterIcon />
                <FacebookIcon />
                <InstgramIcon />
                <GithupIcon />
              </div>
            </div>

            {/* hi */}
            <div className="grid grid-cols-3 ">
              <ul className="flex flex-col justify-between gap-4">
                <li className="text-main-light font-semibold">Company</li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  About
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  Features
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  Works
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  Career
                </li>
              </ul>
              <ul className="flex flex-col justify-between gap-4">
                <li className="text-main-light font-semibold">Help</li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  Customer Support
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  Delivery Details
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
              <ul className="flex flex-col justify-between gap-4">
                <li className="text-main-light font-semibold">Resources</li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  Free eBooks
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  Development
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  How to - Blog
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer">
                  Youtube Playlist
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
