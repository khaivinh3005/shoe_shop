import { Form } from "antd";
import styled from "styled-components";

export const FormLayout = styled.div`
  max-width: 370px;
  margin: 0 auto;
  .btn-google {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin-left: 12px;
      font-family: "Inter-Regular";
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      color: black;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: black;
    text-align: center;
    margin-bottom: 35px;
  }
  .loginNow {
    text-align: center;
    margin-top: 32px;
    span {
      font-family: "Poppins-Regular";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 21px;
      color: black;
      a {
        text-decoration: underline;
        font-weight: 600;
        color: black;
        line-height: 21px;
        &:hover {
          color: blacks;
        }
      }
    }

    @media (max-width: 992px) {
      margin-top: 20px;
    }
    @media (max-width: 768px) {
      margin-top: 14px;
    }
  }
`;
export const BreakLine = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: black;
  text-align: center;
  margin: 32px auto;
  display: flex;
  gap: 4px;
  &:before,
  &:after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid #d5d4dc;
    margin: auto;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 20px auto;
  }
`;

export const FormSignUpEmailWrapper = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  .input-form-signup {
    height: 48px;
    font-family: "Poppins-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    background: #fff;
    border: 1px solid #d5d4dc;
    border-radius: 4px;
    &:hover {
      border-color: #4096ff;
    }
  }

  input {
    font-family: "Poppins-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
  }
  &::placeholder {
    font-family: "Poppins-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    color: #aaaab9;
  }

  @media (max-width: 992px) {
    .input-form-signup {
      height: 48px;
      &::placeholder {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 12px;
    .input-form-signup {
      height: 40px;
      &::placeholder {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }

  .btn-sign-up {
    margin-top: 8px;
    width: 100%;
    height: 48px;
    background: black;
    color: #fff;
    border-radius: 4px;
    @media (max-width: 992px) {
      height: 42px;
      margin-top: 28px;
    }
    @media (max-width: 768px) {
      margin-top: 20px;
      height: 36px;
      span {
        font-size: 12px;
      }
    }
    &:hover {
      background-color: #52517c;
      color: #fff;
      border-color: initial;
    }
  }

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: black;
  }
`;

export const CustomFormItem = styled(Form.Item)`
  .ant-form-item-explain-error {
    font-size: 14px;
    margin-top: 4px;
    &:first-child {
      display: block;
    }
  }
  .ant-form-item-feedback-icon-success,
  .ant-form-item-feedback-icon-error {
    position: absolute;
    right: -5%;
  }
  .ant-input-affix-wrapper-status-success,
  .ant-input-status-success {
    border-color: #08ceac;
  }
`;
export const Notification = styled.div`
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #403f6d;
`;
