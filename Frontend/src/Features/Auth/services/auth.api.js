import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  withCredentials: true,
});

export async function register({ username,email,password }){
  const res = await api.post("/auth/register", { username,email,password });
  return res.data;
}

export async function login({ username, email,password }){
  const res = await api.post("/auth/login", { username,email,password });
  return res.data;
}

export async function profile(){
  const res = await api.get("/auth/profile");
  return res.data;
}

export async function logout(){
  const res = await api.get("/auth/logout");
  return res.data;
}