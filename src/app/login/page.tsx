
import { auth } from "@/auth";
import { SignInForm } from "@/components/auth/signin-form";
import { getSession } from "@/hooks/getSession";
import { redirect } from "next/navigation";


const Login = async () => {
  const session = await getSession()
  const user = session?.user;
  if (user) redirect("/todo")
  // const { data: session } = useSession();

  // if (session?.accessToken) {
  //   console.log("Access Token:", session.accessToken);
  //   // Use the access token as needed
  // }

  return <SignInForm />
};

export default Login