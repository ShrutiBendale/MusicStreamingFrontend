import axios from "axios";

export default axios.create({
  baseURL: "https://qyws0h1ale.execute-api.us-east-1.amazonaws.com/Prod/songs",
});