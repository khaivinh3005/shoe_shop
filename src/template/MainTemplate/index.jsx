import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/common/Header";
import Footer from "components/common/Footer";

const MainTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainTemplate;
