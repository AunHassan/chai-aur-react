import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>welcome {user.userName}</h1>
    </div>
  );
};
export default Profile;
