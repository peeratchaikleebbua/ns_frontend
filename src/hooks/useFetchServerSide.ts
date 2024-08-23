import { FetchMethod, UseFetchType } from "@/types/hookType/useFetchType";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "@/constants/service.contant";
import { auth } from "@/auth";

const fetchServerData = async <T>(
  url: string,
  method: FetchMethod = "GET",
  body: any = null
): Promise<T> => {
  const session = await auth();
  
  const options: AxiosRequestConfig = {
    method,
    url: `${BASE_URL}/${url}`,
    headers: {
      Authorization: `Bearer ${session?.user.access_token}`,
    },
    data: body,
  };

  const response: AxiosResponse<T> = await axios(options);
  return response.data;
};

export const getServerFetch = async <T>(url: string) => {
  return await fetchServerData<T>(url, "GET", null);
};

export const postServerFetch = async <T>(url: string, body: any) => {
  return await fetchServerData<T>(url, "POST", body);
};

export const putServerFetch = async <T>(url: string, body: any) => {
  return await fetchServerData<T>(url, "PUT", body);
};

export const patchServerFetch = async <T>(url: string, body: any) => {
  return await fetchServerData<T>(url, "PATCH", body);
};

export const deleteFetch = async <T>(url: string) => {
  return await fetchServerData<T>(url, "DELETE", null);
};
