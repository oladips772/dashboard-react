/** @format */
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const verifiedAccount = {
    email: "oladips200@gmail.com",
    password: "123456",
  };

  function handleSubmit(e) {
    if (
      email !== verifiedAccount.email ||
      password !== verifiedAccount.password
    ) {
      toast.error("wrong email or password");
    } else {
      toast.success("logged in succesfully");
      navigate("/home");
    }
  }

  return (
    <div className="form_div">
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default LoginPage;
