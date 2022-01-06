import axios, { AxiosResponse } from "axios";
import { AuthModel } from "./models/authModel";

const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:7064/"
    : process.env.API_URL;

export const loginUser = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthModel>> =>
  await axios
    .request<AuthModel>({
      baseURL: BASE_URL,
      url: "/auth/Login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
    .catch((err) => err);
