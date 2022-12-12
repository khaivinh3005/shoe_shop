import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import ModalHOC from "../../HOC/ModalHOC";

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
