"use client";

import {
  TodoGetAllResponseType,
  TodoPostBodyRequestType,
  TodoPutBodyRequestType,
  TodoType,
  TodoViewType,
} from "@/types/todoType/todo";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import TodoCard from "./todoCard";
import TodoDialog from "./todoDialog";
import useClientFetch from "@/hooks/useFetchClientSide";
import TodoCreateButton from "./todoCreateButton"
import { useSession } from "next-auth/react";

function TodoView({ todoList }: TodoViewType) {
  const [todos, setTodos] = useState<TodoType[]>(todoList ? todoList : []);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  const { data: session, status } = useSession({
    required: true,
  });
  const { get, post, patch, deleteClient } = useClientFetch();

  const fetchTodo = async () => {
    try {
      const getTodos = await get<TodoGetAllResponseType>("todo");
      setTodos(getTodos.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleOpenEditDialog = (todo: TodoType) => {
    setIsEdit(true);
    setOpenDialog(true);
    setSelectedTodo(todo);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleOpenCreateDialog = () => {
    setIsEdit(false);
    setOpenDialog(true);
    setSelectedTodo(null);
  };

  const handleCreateTodo = async (
    createdTodoValues: TodoPostBodyRequestType
  ) => {
    try {
      console.log("here cra", createdTodoValues);
      await post(`todo`, createdTodoValues);
      handleClose();
      setIsEdit(false);
      await fetchTodo();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleSave = async (updatedTodoValues: TodoPutBodyRequestType) => {
    if (selectedTodo) {
      try {
        await patch(`todo/${selectedTodo.id}`, updatedTodoValues);
        handleClose();
        setIsEdit(false);
        await fetchTodo();
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteClient(`todo/${id}`);
      await fetchTodo();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  console.log("session", session);
  console.log("status", status);

  useEffect(() => {
    if (status === "authenticated") {
      fetchTodo();
    }
  }, [status]);

  return (
    <React.Fragment>
      <Grid container>
        {todos.map((todo) => (
          <Grid item xs={12} key={todo.id}>
            <TodoCard
              id={todo.id}
              title={todo.title}
              description={todo.description}
              created_by={todo.created_by}
              created_at={todo.created_at}
              updated_at={todo.updated_at}
              handleOpenDialog={handleOpenEditDialog}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
      {openDialog && (
        <TodoDialog
          open={openDialog}
          handleClose={handleClose}
          isEdit={isEdit}
          todoData={selectedTodo}
          onSave={handleSave}
          onCreate={handleCreateTodo}
        />
      )}
      <TodoCreateButton handleCreate={handleOpenCreateDialog} />
    </React.Fragment>
  );
}

export default TodoView;
