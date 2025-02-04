import axios from "axios";

const baseURL = "https://api.salamlang.ir/api/v1";

const instance = axios.create({
  baseURL,
});

instance.defaults.timeout = 2500;

export default instance;
