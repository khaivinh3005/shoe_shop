import { Button, Input, notification, Radio } from "antd";
import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import * as S from "./style";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import userAPI from "service/userAPI";
import reactLocalStorage from "utils/reactLocalStorage";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    userAPI.signIn(values).then(
      (response) => {
        reactLocalStorage.set("shoeToken", response.accessToken);
        navigate("/profile");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    notification.open({
      message: "Incorrect email or password!",
      placement: "bottomLeft",
      duration: 3,
    });
  };
  if (reactLocalStorage.get("shoeToken")) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className="container">
      <h3>Login</h3>
      <S.FormLayout>
        <Button className="btn-google" shape="default">
          Log in with <FacebookOutlined />
        </Button>

        <S.BreakLine>or Log in with Email</S.BreakLine>

        <S.FormSignUpEmailWrapper
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="input-wrap">
            <label htmlFor="email">Email</label>
            <S.CustomFormItem
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Please input a valid E-mail!",
                },
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input
                type="text"
                id="email"
                className="input-form-signup"
                placeholder="Email"
              />
            </S.CustomFormItem>
          </div>

          <div className="input-wrap">
            <label htmlFor="password">Password</label>
            <S.CustomFormItem
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                id="password"
                className="input-form-signup"
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? (
                    <EyeOutlined color="#AAAAB9" size={24} />
                  ) : (
                    <EyeInvisibleOutlined color="#AAAAB9" size={24} />
                  )
                }
              />
            </S.CustomFormItem>
          </div>

          <S.CustomFormItem>
            <Button htmlType="submit" className="btn-sign-up">
              Log in
            </Button>
          </S.CustomFormItem>

          <div className="loginNow">
            <span>
              Don&apos;t have an account?{" "}
              <NavLink to="/register">Sign up</NavLink>
            </span>
          </div>
        </S.FormSignUpEmailWrapper>
      </S.FormLayout>
    </div>
  );
};

export default Login;
