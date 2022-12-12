import React from "react";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const HomeTemplate = () => {
  return (
    <>
      <div className="container">
        <HeaderHome className="bg-dark text-white text-center p-3">
          Header
        </HeaderHome>
        <div style={{ minHeight: "85vh" }}>
          <Outlet />
        </div>
        <footer className="container">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default HomeTemplate;
