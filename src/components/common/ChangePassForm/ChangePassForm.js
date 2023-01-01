import React from "react";
import { Button, Form, notification } from "antd";
import Input from "antd/es/input/Input";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { changePass } from "redux/user";

const ChangePassForm = (props) => {
  const dispatch = useDispatch();
  const onFinish = (value) => {
    console.log(value);
    dispatch(changePass(value))
      .unwrap()
      .then((result) => {
        notification.success({
          message: result,
          placement: "top",
        });      });
  };
  const onFinishFailed = (err) => {
    console.log(err);
  };
  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Please input your new password!" },
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
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Change password
      </Button>
    </Form>
  );
};

export default ChangePassForm;
