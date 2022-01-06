import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDBlZDBhMGE0Njc0ZTAzNjg2MzllNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTM5NjczNSwiZXhwIjoxNjQxNjU1OTM1fQ.HFV_OMmTHL_YHUFiidrkQ_YrDwNx1zqPxe9HUWnMh_U";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
