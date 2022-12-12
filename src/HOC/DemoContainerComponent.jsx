import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalComponent, setModalContent } from "../app/slice/modalSlice";
import ModalHOC from "./ModalHOC";
import Login from "page/Login/";
import Register from "page/Register/";

const DemoContainerComponent = () => {
  //   const [component, setComponent] = useState(<div>default</div>);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <button
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={() => {
          dispatch(setModalContent(<Login />));
        }}
      >
        Login
      </button>
      <button
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={() => {
          dispatch(setModalComponent(<Register />));
        }}
      >
        Register
      </button>
    </div>
  );
};

export default DemoContainerComponent;
