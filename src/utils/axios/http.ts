import axios from "axios";

const baseURL = "http://api.test.com/v1/";

const instance = axios.create({
  baseURL,
});

// instance.defaults.timeout = 2500;

export default instance;
