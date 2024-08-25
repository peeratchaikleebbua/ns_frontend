import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    redirect("/login");
  } else {
    redirect("/todo");
  }
  return <div></div>;
}
