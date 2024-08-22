
import { auth } from "@/auth";
import { getSession } from "@/hooks/getSession";
import { redirect } from "next/navigation";
import React from "react";

async function Todo() {
  const session = await getSession();
  const user = session?.user;
  console.log('user', user)
  if (!user) redirect("/login")

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}

export default Todo;
