import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const { setuser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
