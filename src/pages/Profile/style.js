import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  .avatar-wrap {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .info-wrap {
    label {
      display: flex;
      flex-direction: column;
      #gender {
        flex-direction: row;
      }
    }
  }
  .gender-wrap {
    .ant-radio-group {
      display: flex !important;
    }
  }
`;
