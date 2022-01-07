import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const objectInLocal = JSON.parse(localStorage.getItem("persist:root")).user;
const accessToken = JSON.parse(objectInLocal).currentUser.accessToken;
const TOKEN = accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
