import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  createBrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import MainTemplate from "./template/MainTemplate";
import Test from "./page/Test";
import Search from "page/Search";
import Register from "page/Register";
import Login from "page/Login";
import Profile from "page/Profile";
import Detail from "page/Detail";
import Carts from "page/Carts";
import Home from "page/Home";
import ModalHOC from "./HOC/ModalHOC";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="" element={<MainTemplate />}>
          <Route path="test" element={<Test />} />
          <Route path="register" element={<Register />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="detail" element={<Detail />} />
          <Route path="carts" element={<Carts />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ModalHOC />
      {/* </BrowserRouter> */}
    </HistoryRouter>
  );
}

export default App;
