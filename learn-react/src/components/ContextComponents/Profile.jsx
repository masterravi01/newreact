import React, { useState, useContext } from "react";
import UserContext from "../../Contexts/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div> Plz Login !</div>;
  return <div> Welcome {user.userName}</div>;
};

export default Profile;
