import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div className="bg-gray-600 text-center p-4">
      <h2 className="text-white font-large">Login</h2>
      <input
        type="text"
        placeholder="userName"
        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        className="ms-3 w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="ms-3 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
      >
        {" "}
        Submit
      </button>
    </div>
  );
};

export default Login;
