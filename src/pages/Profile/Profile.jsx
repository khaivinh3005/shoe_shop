import { Button, Form, Input, notification, Popover, Radio } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { CustomFormItem } from "pages/Login/style";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser, updateUser } from "redux/user";
import userAPI from "service/userAPI";
import reactLocalStorage from "utils/reactLocalStorage";
import * as S from "./style";
import { useForm } from "antd/es/form/Form";
import { unwrapResult } from "@reduxjs/toolkit";
import ChangePassForm from "components/common/ChangePassForm/ChangePassForm";

const Profile = () => {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [form] = useForm();
  const accessToken = reactLocalStorage.get("shoeToken");
  useEffect(() => {
    if (!user) {
      dispatch(getUser());
      return;
    }
  }, []);

  useEffect(() => {
    if (user) {
      onFill();
    }
  }, [user]);

  const onFinish = (value) => {
    dispatch(updateUser(value))
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        // handle result here
        notification.success({
          message: originalPromiseResult,
          placement: "top",
        });
      })
      .catch((rejectedValueOrSerializedError) => {
        // handle error here
        console.log(rejectedValueOrSerializedError);
      });
  };
  const onFinishFailed = (err) => {
    console.log(err);
  };
  const onFill = () => {
    if (!user) return;

    const tmpUser = {
      email: user.email,
      name: user.name,
      phone: user.phone,
      gender: user.gender,
    };
    form.setFieldsValue(tmpUser);
  };

  if (!user) return;
  return (
    <div className="container">
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <h1>Profile</h1>
        <S.ProfileContainer>
          <div className="avatar-wrap">
            <img src={user?.avatar} alt="" />
          </div>
          <div className="info-wrap">
            <label htmlFor="email">
              Email
              <CustomFormItem
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
              </CustomFormItem>
            </label>

            <label htmlFor="phone">
              Phone
              <CustomFormItem
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
              </CustomFormItem>{" "}
            </label>

            <Popover
              showArrow={false}
              placement="bottom"
              title="New password"
              trigger="click"
              content={<ChangePassForm />}
            >
              <Button style={{ marginTop: 24 }}>Change password</Button>
            </Popover>
          </div>
          <div className="info-wrap">
            <label htmlFor="name">
              Name
              <CustomFormItem
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
              </CustomFormItem>
            </label>
            <div className="gender-wrap">
              Gender
              <CustomFormItem
                name="gender"
                rules={[{ required: true, message: "Please choose one!" }]}
              >
                <Radio.Group
                  // onChange={onChange}
                  //  value={radioValue}
                  id="gender"
                >
                  <Radio value={true}>Male</Radio>
                  <Radio value={false}>Female</Radio>
                </Radio.Group>
              </CustomFormItem>
            </div>

            <Button style={{ marginTop: 24 }} type="primary" htmlType="submit">
              Update
            </Button>
          </div>
        </S.ProfileContainer>
      </Form>
    </div>
  );
};

export default Profile;
