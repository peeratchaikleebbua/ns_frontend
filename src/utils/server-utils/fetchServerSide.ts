import "server-only"; // ensure that these server-util is only used on server

import { FetchMethod } from "@/types/hookType/useFetchType";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "@/constants/service.contant";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

const fetchServerData = async <T>(
  url: string,
  method: FetchMethod = "GET",
  body: any = null,
  headers: Record<string, string> | null
): Promise<T> => {
  try {
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
  } catch (error) {
    // If error is related to authorization, handle it here
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      // Redirect to the login page if unauthorized
      await signOut({ redirect: false });
      redirect("/login");
    }

    throw error;
  }
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
