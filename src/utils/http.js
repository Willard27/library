import axios from "axios";
import ee from "./event";

const instance = axios.create({});

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // console.log('axios中间件', response)

    if (response.status === 200 || response.status === 201) {
      if (response.data.code === 401) {
        // 将页面直接跳转到  /login
        // window.location.href = '/login'

        ee.emit("ERRLOGIN", response.data.msg);
        return Promise.reject("未登录");
      }

      // 全局的错误处理
      if (response.data.code !== 0 && response.data.code !== 401) {
        ee.emit("ERROR", response.data.msg);
      }
    } else {
      ee.emit("ERROR", response.data.msg);
    }

    return response;
  },
  function (error) {
    // console.log("发生错误", error);
    ee.emit("ERROR", error.response.data.msg);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default instance;
