import React from "react";
import TodoView from "@/components/todo/todoView";

import { TodoGetAllResponseType, TodoPutBodyRequestType } from "@/types/todoType/todo";
import { getServerFetch } from "@/hooks/useFetchServerSide";
import { getSession } from "@/hooks/getSession";
import { redirect } from "next/navigation";

async function Todo() {
  const session = await getSession()
  const user = session?.user;
  if (!user) redirect("/login")
  const getTodo = await getServerFetch<TodoGetAllResponseType>("todo")

  return <TodoView todoList={getTodo?.data}/>;
}

export default Todo;
