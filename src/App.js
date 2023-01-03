import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeTemplate from "./templates/MainTemplate/HomeTemplate.jsx";
import Test from "./pages/Test/Test";
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Detail from "./pages/Detail/Detail";
import Carts from "./pages/Carts/Carts";
import Home from "./pages/Home/Home";
import { createBrowserHistory } from "history";
import ModalHOC from "./HOC/ModalHOC";
import PrivateRoute from "PrivateRoute";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          {/* <Route path="test" element={<Test />} /> */}
          <Route path="register" element={<Register />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="login" element={<Login />}></Route>

          <Route element={<PrivateRoute />}>
            <Route path="carts" element={<Carts />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>

          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </HistoryRouter>
  );
}

export default App;
