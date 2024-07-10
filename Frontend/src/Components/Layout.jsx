import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Container from "../ui/Container";
import { Fragment } from "react";
import SideMenu from "../Components/SideMenu";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Container className="py-10 bg-gray-100">
        <div className="mx-auto flex flex-col md:flex-row gap-7">
          <div className="w-full md:w-8/12 py-2">
            <Outlet />
          </div>
          <SideMenu />
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
