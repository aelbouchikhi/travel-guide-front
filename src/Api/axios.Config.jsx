import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "Application/json",
  },
});

export async function register(user) {
  return await Api.post("/api/users/register", user);
}

export function login(user) {
  console.log(user);
  return Api.post("/api/users/login", user);
}
