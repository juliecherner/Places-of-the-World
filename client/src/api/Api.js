import axios from "axios";

let baseUrl =
  process.env.NODE_ENV === "production" ? "/" : "http://localhost:8080/";

//development
//client: http://localhost:3000
//server: http://localhost:8080

//production
//client && server : https://someAdddressfromHeroku.herokuapp.come

console.log(baseUrl);

export default axios.create({
  baseURL: baseUrl,
});
