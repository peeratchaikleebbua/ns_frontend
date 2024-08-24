
import { getSession } from "@/hooks/getSession";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/login");
  } else {
    redirect("/todo");
  }
  return <div></div>;
}
