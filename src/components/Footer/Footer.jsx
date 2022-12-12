import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="row mt-5 menu-footer">
        <div className="col-md-4">
          <h4>GET HELP</h4>
          <div>
            <a href="...">Home</a>
            <a href="...">Adidas</a>
            <a href="...">Nike</a>
            <a href="...">Contact</a>
          </div>
        </div>
        <div className="col-md-4">
          <h4>SUPPORT</h4>
          <div className="text-left">
            <a href="...">About</a>
            <a href="...">Contact</a>
            <a href="...">Help</a>
            <a href="...">Phone</a>
          </div>
        </div>
        <div className="col-md-4">
          <h4>REGISTER</h4>
          <div>
            <a href="...">Register</a>
            <a href="...">Login</a>
          </div>
        </div>
      </div>
      <div className="row text-dark copyright">
        <p className="text-center">© 2022 Cybersoft All Rights Reserved | Design Theme by Vũ Trần Hoàng - Nguyễn Thị Ngọc Diệp.</p>
      </div>
    </div>
  );
};

export default Footer;
