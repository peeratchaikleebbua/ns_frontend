"use server";

import { auth } from "@/auth";
import {
  TodoDeleteResponseType,
  todoIdParamsSchema,
  TodoPatchBodyRequestType,
  TodoPostBodyRequestType,
  TodoPostResponseType,
  TodoPutBodyRequestType,
  todoSchema,
} from "@/types/todoType/todo.d";
import {
  deleteServerFetch,
  patchServerFetch,
  postServerFetch,
} from "@/utils/server-utils/fetchServerSide";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as yup from "yup";

// server action for todo
// utilizable on both client and server side

export async function createTodo(body: TodoPostBodyRequestType) {
  try {
    // authenticate user since server action will expose endpoint
    // redirect to loging if fail to authenticate
    const session = await auth();
    if (!session?.user) {
      redirect("/login");
    }

    // validate input schema
    await todoSchema.validate(body);

    await postServerFetch<TodoPostResponseType>("todo", body, null);

    // refresh data on todo page
    revalidatePath("/todo", "page");
  } catch (error) {
    console.error("Error creating todo:", error);
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation Error: ${error.message}`);
    } else {
      throw new Error("Failed to create todo. Please try again.");
    }
  }
}

export async function deleteTodo(id: string) {
  try {
    // authenticate user since server action will expose endpoint
    // redirect to loging if fail to authenticate
    const session = await auth();
    if (!session?.user) {
      redirect("/login");
    }
    // validate input schema
    await todoIdParamsSchema.validate(id);

    await deleteServerFetch<TodoDeleteResponseType>(`todo/${id}`, null);

    // refresh data on todo page
    revalidatePath("/todo", "page");
  } catch (error) {
    console.error("Error deleting todo:", error);
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation Error: ${error.message}`);
    } else {
      throw new Error("Failed to delete todo. Please try again.");
    }
  }
}

export async function patchTodo(id: string, body: TodoPatchBodyRequestType) {
  try {
    // authenticate user since server action will expose endpoint
    // redirect to loging if fail to authenticate
    const session = await auth();
    if (!session?.user) {
      redirect("/login");
    }

    // validate input schema
    await todoIdParamsSchema.validate(id);
    await todoSchema.validate(body);

    await patchServerFetch(`todo/${id}`, body, null);

    // refresh data on todo page
    revalidatePath("/todo", "page");
  } catch (error) {
    console.error("Error patching todo:", error);
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation Error: ${error.message}`);
    } else {
      throw new Error("Failed to update todo. Please try again.");
    }
  }
}
