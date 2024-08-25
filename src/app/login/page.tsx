import { auth } from "@/auth";
import { SignInForm } from "@/components/auth/signin-form";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await auth()
  const user = session?.user;
  if (user) redirect("/todo")

  return <SignInForm />
};

export default Login