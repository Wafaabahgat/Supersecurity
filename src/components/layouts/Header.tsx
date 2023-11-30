import { FC } from "react";
import Logo from "@assets/home/Logo.svg";
import Container from "@ui/Container";
import { Link, useLocation } from "react-router-dom";

import { cn } from "@/utils";
import { Button } from "@ui/Button";

interface HeaderProps {}

const links = [
  { link: "/", name: "Home" },
  { link: "/services", name: "Services" },
  { link: "/blog", name: "Blog" },
  { link: "/about", name: "About" },
  //   {
  //     link: "/contact-us",
  //     name: "Contact us",
  //   },
];

const Header: FC<HeaderProps> = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div>
        <Container className="flex items-center justify-between sm:gap-4 py-6">
          <div>
            <img src={Logo} className="min-w-[150px]" alt="Secured Logo" />
          </div>
          <div className="flex items-center gap-9">
            <nav className="md:flex hidden items-center gap-4 border-main-light border px-8 py-3 rounded-full">
              {links.map((e, index) => (
                <Link
                  key={index}
                  to={e.link}
                  className={cn(
                    pathname === e?.link ? "text-main-light" : "text-main",
                    "font-semibold text-[18px]"
                  )}
                >
                  {e.name}
                </Link>
              ))}
            </nav>
            <Button text="Get started" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
