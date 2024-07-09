import React from "react";
import Header from "./header/Header";
import LeftBar from "./left-bar/LeftBar";
import RightBar from "./right-bar/RightBar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <LeftBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <RightBar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;
