import { useSession } from "next-auth/react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_LOCAL_URL, BASE_URL } from "@/constants/service.contant";
import { FetchMethod } from "@/types/hookType/useFetchType";

// another way to handle api besides server action
// use Nextjs Server route to handle NeverSitup api and avoid cors issue on client side

const useClientFetch = () => {
  const { data: session, status } = useSession();

  const fetchData = async <T>(
    url: string,
    method: FetchMethod = "GET",
    body: any = null
  ): Promise<T> => {
    if (status === "loading") {
      return new Promise(() => {});
    }

    const options: AxiosRequestConfig = {
      method,
      url: `${BASE_LOCAL_URL}/${url}`,
      headers: {
        Authorization: `Bearer ${session?.user.access_token}`,
      },
      data: body,
    };

    const response: AxiosResponse<T> = await axios(options);
    return response.data;
  };

  return {
    get: <T>(url: string) => fetchData<T>(url, "GET"),
    post: <T>(url: string, body: any) => fetchData<T>(url, "POST", body),
    put: <T>(url: string, body: any) => fetchData<T>(url, "PUT", body),
    patch: <T>(url: string, body: any) => fetchData<T>(url, "PATCH", body),
    deleteClient: <T>(url: string) => fetchData<T>(url, "DELETE"),
  };
};

export default useClientFetch;
