import { DefaultUser } from "next-auth";

interface CustomUser extends DefaultUser {
  username?: string;
  access_token?: string;
}

declare module "next-auth" {
  interface Session {
    user: CustomUser;
    access_token?: string;
  }
  interface User extends CustomUser {}
}
