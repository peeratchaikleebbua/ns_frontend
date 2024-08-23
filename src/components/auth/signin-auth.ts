"use server";

import { signIn } from "@/auth";
import { SignInAuthType } from "@/types/authType/login";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

async function SignInAuth({ values }: SignInAuthType) {
  try {
    await signIn("credentials", {
      redirect: false,
      username: values.username,
      password: values.password,
    });

  } catch (error) {
    const signInError = error as CredentialsSignin;
    console.error("Sign-in error:", signInError);
    return signInError.message
  }

  redirect('/todo')
}

export default SignInAuth;
