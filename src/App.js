import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeTemplate from './templates/MainTemplate/HomeTemplate.jsx'
import Test from "./pages/Test/Test";
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Detail from "./pages/Detail/Detail";
import Carts from "./pages/Carts/Carts";
import Home from "./pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          {/* <Route path="test" element={<Test />} /> */}
          <Route path="register" element={<Register />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="detail" element={<Detail />} />
          <Route path="carts" element={<Carts />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
