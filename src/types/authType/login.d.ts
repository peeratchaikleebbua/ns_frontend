import * as yup from "yup";
import { CredentialsSignin, User as NextAuthUser } from "next-auth";

export const signInSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export type LoginBodyRequestType = {
  username: string;
  password: string;
};

export type LoginPostResponseAType = {
  username: string;
  access_token: string;
};

export type LoginResponseType = {
  isValid: boolean;
  username?: string;
  access_token?: string;
};

export type User = NextAuthUser & {
  username: string;
  access_token: string;
};

export type FormErrorType = {
  message?: string;
};

export type FormSuccessType = {
  message?: string;
};

export type SignInAuthType = {
  values: LoginBodyRequestType,
}