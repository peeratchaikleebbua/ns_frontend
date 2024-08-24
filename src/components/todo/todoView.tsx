"use client";

import {
  TodoType,
  TodoViewType,
} from "@/types/todoType/todo";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import TodoCard from "./todoCard";
import TodoDialog from "./todoDialog";
import TodoCreateButton from "./todoCreateButton"

function TodoView({ todoList, username }: TodoViewType) {
  const [openDialog, setOpenDialog] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  // const user = useSession({ required: true }); // in case we need user data on client side

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

  return (
    <React.Fragment>
      <Grid container>
        {todoList.map((todo) => (
          <Grid item xs={12} key={todo.id}>
            <TodoCard
              id={todo.id}
              title={todo.title}
              description={todo.description}
              created_by={todo.created_by}
              created_at={todo.created_at}
              updated_at={todo.updated_at}
              username={username}
              handleOpenDialog={handleOpenEditDialog}
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
        />
      )}
      <TodoCreateButton handleCreate={handleOpenCreateDialog} />
    </React.Fragment>
  );
}

export default TodoView;
