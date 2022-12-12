import React, { useState } from "react";
import { ModalHOC } from "./ModalHOC";
import Login from "page/Login/";
import Home from 'page/Home/'


const DemoModalHOC = () => {
  const [component, setComponent] = useState(Login);
//   const ModalComponent = ModalHOC(component);

  return (
    <div>
    
    </div>
  );
};

export default DemoModalHOC;
