import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-full h-full flex-1 flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
