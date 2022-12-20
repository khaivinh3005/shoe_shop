import { Button, Input, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import * as S from "../Login/style";
import reactLocalStorage from "utils/reactLocalStorage";
import userAPI from "service/userAPI";
const Register = () => {
  const [radioValue, setRadioValue] = useState(true);
  const navigate = useNavigate();


  const onFinish = (values) => {
    console.log("Success:", values);
    userAPI.signUp(values).then(
      (response) => {
        navigate("/login");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e) => {
    setRadioValue(e.target.value);
  };
  if (reactLocalStorage.get("shoeToken")) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="container">
      <h3>Register</h3>

      <S.FormLayout>
        <Button className="btn-google" shape="default">
          Sign up with <FacebookOutlined />
        </Button>

        <S.BreakLine>or Sign up with Email</S.BreakLine>

        <S.FormSignUpEmailWrapper
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="input-wrap">
            <label htmlFor="name">Name</label>
            <S.CustomFormItem
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                  whitespace: true,
                },
                {
                  pattern: new RegExp(
                    /^[a-zA-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/i
                  ),
                  message: "Do not contain number or special character!",
                },
              ]}
            >
              <Input
                type="text"
                id="name"
                className="input-form-signup"
                placeholder="Name"
              />
            </S.CustomFormItem>
          </div>

          <div className="input-wrap">
            <label htmlFor="email">Email</label>
            <S.CustomFormItem
              name="email"
              rules={[
                { type: "email", message: "Please input a valid E-mail!" },
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
            <label htmlFor="name">Phone</label>
            <S.CustomFormItem
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                  whitespace: true,
                },
                {
                  pattern: "^[0-9-+]{9,15}$",
                  message:
                    "Phone number is valid! Above 9 number, under 15 number!",
                },
              ]}
            >
              <Input
                type="text"
                id="phone"
                className="input-form-signup"
                placeholder="Phone"
              />
            </S.CustomFormItem>
          </div>

          <div className="input-wrap">
            <label htmlFor="password">Password</label>
            <S.CustomFormItem
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  pattern: new RegExp(
                    /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,}).*$/g
                  ),
                  message: "At least 1 number, 1 letter, above 6 characters",
                },
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

          <div className="input-wrap">
            <label htmlFor="confirmPass">Confirm password</label>
            <S.CustomFormItem
              name="confirmPass"
              dependencies={["password"]}
              // hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                id="confirmPass"
                className="input-form-signup"
                placeholder="Confirm Password"
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
          <div className="input-wrap">
            <S.CustomFormItem
              name="gender"
              rules={[{ required: true, message: "Please choose one!" }]}
            >
              <Radio.Group onChange={onChange} value={radioValue} id="gender">
                <Radio value={true}>Male</Radio>
                <Radio value={false}>Female</Radio>
              </Radio.Group>
            </S.CustomFormItem>
          </div>
          <Button htmlType="submit" className="btn-sign-up">
            Sign up
          </Button>
        </S.FormSignUpEmailWrapper>

        <div className="loginNow">
          <span>
            Have an account? <NavLink to="/login">Login now</NavLink>
          </span>
        </div>
      </S.FormLayout>
    </div>
  );
};

export default Register;
