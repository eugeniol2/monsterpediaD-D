import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.open5e.com",
});
