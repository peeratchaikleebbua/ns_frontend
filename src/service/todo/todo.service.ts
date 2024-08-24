"use server";

import {
  deleteServerFetch,
  patchServerFetch,
  postServerFetch,
} from "@/hooks/useFetchServerSide";
import {
  TodoDeleteResponseType,
  todoIdParamsSchema,
  TodoPatchBodyRequestType,
  TodoPostBodyRequestType,
  TodoPostResponseType,
  TodoPutBodyRequestType,
  todoSchema,
} from "@/types/todoType/todo.d";
import { revalidatePath } from "next/cache";
import * as yup from "yup";

// server action for todo

export async function createTodo(body: TodoPostBodyRequestType) {
  try {
    await todoSchema.validate(body);
    await postServerFetch<TodoPostResponseType>("todo", body, null);
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
    await todoIdParamsSchema.validate(id);
    await deleteServerFetch<TodoDeleteResponseType>(`todo/${id}`, null);
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
    await todoIdParamsSchema.validate(id);
    await todoSchema.validate(body);

    await patchServerFetch(`todo/${id}`, body, null);
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
