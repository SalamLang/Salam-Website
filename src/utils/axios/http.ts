import axios from "axios";

const baseURL = "https://auth.salamlang.ir/api/mobile";

const instance = axios.create({
  baseURL,
});

// instance.defaults.timeout = 2500;

export default instance;
