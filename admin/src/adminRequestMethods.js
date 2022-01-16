import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const objectInLocal = JSON.parse(localStorage.getItem("persist:root")).user;
const accessToken = JSON.parse(objectInLocal).currentUser.accessToken;

const TOKEN = accessToken;

console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const adminRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
