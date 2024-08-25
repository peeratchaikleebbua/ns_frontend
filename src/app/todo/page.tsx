import React from "react";
import TodoView from "@/components/todo/todoView";

import {
  TodoGetAllResponseType,
  TodoPutBodyRequestType,
} from "@/types/todoType/todo";
import { redirect } from "next/navigation";
import { getSession } from "@/hooks/getSession";
import { getServerFetch } from "@/utils/server-utils/fetchServerSide";

async function Todo() {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/login");
  const getTodo = await getServerFetch<TodoGetAllResponseType>("todo", null);

  return <TodoView todoList={getTodo.data} username={user.username} />;
}

export default Todo;
