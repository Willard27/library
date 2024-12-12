import axios from "axios";
import ee from "./event";

const instance = axios.create({
  baseURL: "https://localhost:8080",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      if (response.data.code === 401) {
        ee.emit("global_not_login", response.data.msg);
        return Promise.reject("未登录");
      } else {
        // 全局错误
      }
    }
    return response;
  },
  function (error) {
    ee.emit("global_error_tip", error.response.data.msg);
    return Promise.reject(error);
  }
);

export default instance;
