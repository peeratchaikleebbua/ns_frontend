import { SignInForm } from "@/components/auth/signin-form";
import { getSession } from "@/hooks/getSession";
import { redirect } from "next/navigation";


const Login = async () => {
  const session = await getSession()
  const user = session?.user;
  if (user) redirect("/todo")

  return <SignInForm />
};

export default Login