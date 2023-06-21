import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/profile", {state:username})
  };

  return (
    <div>
      LoginPage
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default LoginPage;
