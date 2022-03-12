import axios from "axios";

let baseUrl =
  process.env.NODE_ENV === "production" ? "/" : "http://localhost:8080/";

export default axios.create({
  baseURL: baseUrl,
});
