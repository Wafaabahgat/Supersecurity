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
      <div>
        <Stay />
        <Container className="footer_border py-12 px-3 ">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-14">
            <div className="flex flex-col justify-between gap-4 max-w-[350px] md:mx-10 mr-2">
              <img className="max-w-[300px]" src={Logo} alt="" />
              <p className=" text-gray-500">
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

            {/*  */}
            <div className="grid grid-cols-3 col-span-2">
              <ul className="flex flex-col justify-between gap-4">
                <li className="text-main-light font-semibold">Company</li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer text-gray-500">
                  About
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer text-gray-500">
                  Features
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer text-gray-500">
                  Works
                </li>
                <li className="hover:ml-2 transition-all hover:text-main cursor-pointer text-gray-500">
                  Career
                </li>
              </ul>
              <ul className="flex flex-col justify-between gap-4 text-gray-500">
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
              <ul className="flex flex-col justify-between gap-4 text-gray-500 ">
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
          <div className="mt-10 border-slate-200 border-t">
            <p className="text-center mt-4 text-gray-500 text-[14px]">
              © Copyright 2022, All Rights Reserved by Securecrowd
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
