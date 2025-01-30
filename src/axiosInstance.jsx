import axios from "axios";

const instance = axios.create({
  baseURL: "https://server-sneakers.ridhoamr.my.id",
});

export default instance;
