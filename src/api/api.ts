import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthModel } from "./models/authModel";
import { SchoolFormItem } from "./models/forms/SchoolFormItem";
import { ResultResponse } from "./models/resultResponse";
import { Schools } from "./models/schools/schools";
import { School } from "./models/school/school";

const ADMIN_BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:7064/"
    : process.env.API_URL;

const API_BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:7150"
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

export const changeUserPassword = async (
  token: string,
  currentPassword: string,
  newPassword: string
): Promise<AxiosResponse<ResultResponse>> =>
  await axios
    .request<ResultResponse>({
      ...adminConfig,
      url: "/admin/ChangePassword",
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        currentPassword,
        newPassword,
      },
    })
    .catch((err) => err);

export const getSchoolForm = async (
  token: string,
  formId: string
): Promise<AxiosResponse<SchoolFormItem>> =>
  await axios.request<SchoolFormItem>({
    ...apiConfig,
    url: "/form/GetSchoolForm",
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: {
      formId,
    },
  });

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

export const approveSchoolForm = async (
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

export const refuseSchoolForm = async (
  token: string,
  formId: string
): Promise<AxiosResponse> =>
  await axios
    .request({
      ...apiConfig,
      url: "/form/RefuseSchoolForm",
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        formId,
      },
    })
    .catch((err) => err);

export const addSchool = async (
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

export const getSchool = async (
  schoolId: string
): Promise<AxiosResponse<School>> =>
  await axios.request<School>({
    ...apiConfig,
    url: "/school/GetSchool",
    method: "GET",
    params: {
      schoolId,
    },
  });

export const getSchools = async (
  token: string,
  page: number
): Promise<AxiosResponse<Schools>> =>
  await axios
    .request<Schools>({
      ...apiConfig,
      url: "/school/Schools",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        page,
      },
    })
    .catch((err) => err);

export const updateSchool = async (
  token: string,
  id: string,
  name: string,
  schoolUrl: string,
  timetableUrl: string
): Promise<AxiosResponse<ResultResponse>> =>
  await axios
    .request<ResultResponse>({
      ...apiConfig,
      url: "/school/UpdateSchool",
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        id,
        name,
        schoolUrl,
        timetableUrl,
      },
    })
    .catch((err) => err);
