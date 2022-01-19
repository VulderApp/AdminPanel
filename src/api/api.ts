import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthModel } from "./models/authModel";
import { SchoolFormItem } from "./models/forms/SchoolFormItem";

const ADMIN_BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:7064/"
    : process.env.API_URL;

const API_BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:7039"
    : process.env.API_URL;

const adminConfig = <AxiosRequestConfig>{
  baseURL: ADMIN_BASE_URL,
};

const apiConfig = <AxiosRequestConfig>{
  baseURL: API_BASE_URL,
  maxRedirects: 1,
};

export const loginUser = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthModel>> =>
  await axios
    .request<AuthModel>({
      ...adminConfig,
      url: "/auth/Login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
    .catch((err) => err);

export const GetSchoolForms = async (
  token: string,
  page: number
): Promise<AxiosResponse<Array<SchoolFormItem>>> =>
  await axios
    .request<Array<SchoolFormItem>>({
      ...apiConfig,
      url: "/form/GetSchoolForms",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        page,
      },
    })
    .catch((err) => err);

export const ApproveSchoolForm = async (
  token: string,
  formId: string
): Promise<AxiosResponse> =>
  await axios
    .request({
      ...apiConfig,
      url: "/form/ApproveSchoolForm",
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        formId,
      },
    })
    .catch((err) => err);

export const AddSchool = async (
  token: string,
  name: string,
  schoolUrl: string,
  timetableUrl: string
): Promise<AxiosResponse> =>
  await axios
    .request({
      ...apiConfig,
      url: "/school/AddSchool",
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        name,
        schoolUrl,
        timetableUrl,
      },
    })
    .catch((err) => err);
