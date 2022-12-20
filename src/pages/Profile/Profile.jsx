import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userAPI from "service/userAPI";
import reactLocalStorage from "utils/reactLocalStorage";

const Profile = () => {
  const [user, setUser] = useState(null);

  const accessToken = reactLocalStorage.get("shoeToken");
  console.log(accessToken);

  useEffect(() => {
    userAPI.getUserDetail().then(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return <div className="container">Profile</div>;
};

export default Profile;
