import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth/authService";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    navigate("/students");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 col-md-4 mx-auto">
        <h3 className="text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" placeholder="Username"
            value={username} onChange={e => setUsername(e.target.value)} />
          <input className="form-control mb-3" type="password" placeholder="Password"
            value={password} onChange={e => setPassword(e.target.value)} />
          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
