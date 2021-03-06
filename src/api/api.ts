import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthModel } from "./models/authModel";
import { SchoolFormItem } from "./models/forms/schoolFormItem";
import { ResultResponse } from "./models/resultResponse";
import { Schools } from "./models/schools/schools";
import { School } from "./models/school/school";
import { SchoolForms } from "./models/forms/schoolForms";

const ADMIN_BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:7064/"
    : process.env.ADMIN_API_URL;

const API_BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:6012"
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
      url: "/auth/login",
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
      url: "/admin/changePassword",
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
    url: "/form",
    headers: {
      authorization: `Bearer ${token}`,
    },
    params: {
      formId,
    },
  });

export const getSchoolForms = async (
  token: string,
  page: number
): Promise<AxiosResponse<SchoolForms>> =>
  await axios
    .request<SchoolForms>({
      ...apiConfig,
      url: "/form/forms",
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
      url: "/form/approve",
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
      url: "/form/refuse",
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
      url: "/school/add",
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
    url: "/school",
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
      url: "/school/schools",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        page,
      },
    })
    .catch((err) => err);

export const getSchoolsWithPagination = async (
  token: string,
  input: string,
  page: number
): Promise<AxiosResponse<Schools>> =>
  await axios
    .request<Schools>({
      ...apiConfig,
      url: "/school/findWithPagination",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        input,
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
      url: "/school/update",
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

export const deleteSchool = async (
  token: string,
  id: string
): Promise<AxiosResponse<ResultResponse>> =>
  axios
    .request<ResultResponse>({
      ...apiConfig,
      url: "/school/delete",
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        schoolId: id,
      },
    })
    .catch((err) => err);
