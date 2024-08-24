import { FetchMethod, UseFetchType } from "@/types/hookType/useFetchType";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "@/constants/service.contant";
import { auth } from "@/auth";

const fetchServerData = async <T>(
  url: string,
  method: FetchMethod = "GET",
  body: any = null,
  headers: Record<string, string> | null
): Promise<T> => {
  const session = await auth();

  const options: AxiosRequestConfig = {
    method,
    url: `${BASE_URL}/${url}`,
    headers: {
      ...headers,
      Authorization: `Bearer ${session?.user.access_token}`,
    },
    data: body,
  };

  const response: AxiosResponse<T> = await axios(options);
  return response.data;
};

export const getServerFetch = async <T>(
  url: string,
  headers: Record<string, string> | null
) => {
  return await fetchServerData<T>(url, "GET", null, headers);
};

export const postServerFetch = async <T>(
  url: string,
  body: any,
  headers: Record<string, string> | null
) => {
  return await fetchServerData<T>(url, "POST", body, headers);
};

export const putServerFetch = async <T>(
  url: string,
  body: any,
  headers: Record<string, string> | null
) => {
  return await fetchServerData<T>(url, "PUT", body, headers);
};

export const patchServerFetch = async <T>(
  url: string,
  body: any,
  headers: Record<string, string> | null
) => {
  return await fetchServerData<T>(url, "PATCH", body, headers);
};

export const deleteServerFetch = async <T>(
  url: string,
  headers: Record<string, string> | null
) => {
  return await fetchServerData<T>(url, "DELETE", null, headers);
};
