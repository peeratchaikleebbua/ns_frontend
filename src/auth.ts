import NextAuth, { CredentialsSignin, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {
  LoginResponseType,
  signInSchema,
  LoginBodyRequestType,
  User,
} from "@/types/authType/login.d";
import { postLogin } from "@/service/login/login.service";
import { BASE_AUTH } from "@/constants/service.contant";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "please enter username",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "please enter password",
        },
      },
      authorize: async (credentials) => {
        try {
          const username = credentials.username as string;
          const password = credentials.password as string;

          if (!username || !password) {
            throw new CredentialsSignin(
              "Please provide both username and password"
            );
          }

          const login = await postLogin({ username, password });
          if (!login.isValid) {
            
            throw new Error("User not found.");
          }

          return login;
        } catch (error) {
          if (error instanceof Error) {
            if (error.name === "ValidationError") {
              return null;
            }
            console.error("Error during authorization:", error.message);
          }
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  basePath: BASE_AUTH,
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.access_token) {
        session.user.username = token.username as string;
        session.user.access_token = token.access_token as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.access_token = user.access_token;
      }
      return token;
    },
  },
});
