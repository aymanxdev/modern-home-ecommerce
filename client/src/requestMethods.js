import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
let TOKEN;

if (localStorage.getItem("persist:root") === null) {
  console.log("no token");
} else {
  const objectInLocal = JSON.parse(localStorage.getItem("persist:root")).user;
  const accessToken = JSON.parse(objectInLocal).currentUser.accessToken;
  TOKEN = accessToken;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
