import axios, { AxiosResponse } from "axios";
import { Login } from "./responses/login";
import LocalConfig from "../configuration/local.json";

export default {
  login: async (
    email: string,
    password: string
  ): Promise<AxiosResponse<string>> => {
    return await axios
      .request<Login>({
        baseURL: LocalConfig.baseUrl,
        url: "/user/Login",
        method: "POST",
        data: {
          email: email,
          password: password,
        },
        validateStatus: (status) => {
          return status < 500;
        },
      })
      .catch((err) => {
        return err.toJSON();
      });
  },
  register: async (
    email: string,
    password: string
  ): Promise<AxiosResponse<string>> => {
    return await axios.request({
      baseURL: LocalConfig.baseUrl,
      url: "/user/Register",
      method: "POST",
      data: {
        email: email,
        password: password,
      },
      validateStatus: (status) => {
        return status < 500;
      },
    });
  },
};
