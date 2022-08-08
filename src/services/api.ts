import axios from "axios";

const apiUrlBase = "http://localhost:3333/api";

export const api = axios.create({
  baseURL: apiUrlBase,
});
