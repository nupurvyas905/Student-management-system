import api from "../api/axios";

export const login = async (username, password) => {
  const res = await api.post("/api/auth/login", { username, password });

  localStorage.setItem(
    "auth",
    JSON.stringify({
      token: res.data, //  backend returns STRING
      username,
    })
  );

  return true;
};

export const logout = () => {
  localStorage.removeItem("auth");
};

export const isAuthenticated = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return !!auth?.token;
};

export default { login, logout, isAuthenticated };
