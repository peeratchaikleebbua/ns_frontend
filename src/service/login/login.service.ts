import { BASE_URL } from "@/constants/service.contant";
import {
  LoginBodyRequestType,
  LoginResponseType,
} from "@/types/authType/login";
import { getSession } from "next-auth/react";

export async function postLogin(
  body: LoginBodyRequestType
): Promise<LoginResponseType> {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const response: LoginResponseType = {
      isValid: false,
    };
    return response;
  }

  const userData = await res.json();

  return {
    isValid: true,
    ...userData,
  };
}

