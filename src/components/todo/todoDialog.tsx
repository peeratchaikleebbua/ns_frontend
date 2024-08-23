"use client";

import {
  TodoDialogType,
  TodoPutResponseType,
  todoSchema,
} from "@/types/todoType/todo.d";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import TodoFormError from "./todoFormError";

function TodoDialog({
  open,
  handleClose,
  todoData,
  onSave,
  onCreate,
  isEdit,
}: TodoDialogType) {
  const todoFormik = useFormik({
    initialValues: {
      title: todoData?.title ? todoData?.title : "",
      description: todoData?.description ? todoData?.description : "",
    },
    onSubmit: async (values) => {
      console.log("values", values);

      if (isEdit) {
        console.log("edit save");
        await onSave(values);
      } else {
        console.log("create save");
        await onCreate(values);
      }
    },
    validationSchema: todoSchema,
  });

  console.log("todoFormik", todoFormik.isValid);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{isEdit ? "แก้ไข Todo" : "สร้าง Todo"}</DialogTitle>
      <form onSubmit={todoFormik.handleSubmit}>
        <DialogContent>
          <DialogContentText>
            กรุณาแก้ไขรายการ Todo ดังรายการข้างล่าง
          </DialogContentText>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="title"
            name="title"
            value={todoFormik.values.title}
            // onFocus={handleResetMessage}
            onChange={todoFormik.handleChange}
            onBlur={todoFormik.handleBlur}
            error={todoFormik.touched.title && Boolean(todoFormik.errors.title)}
            helperText={todoFormik.touched.title && todoFormik.errors.title}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="description"
            name="description"
            value={todoFormik.values.description}
            // onFocus={handleResetMessage}
            onChange={todoFormik.handleChange}
            onBlur={todoFormik.handleBlur}
            error={
              todoFormik.touched.description &&
              Boolean(todoFormik.errors.description)
            }
            helperText={
              todoFormik.touched.description && todoFormik.errors.description
            }
          />
        </DialogContent>
        <DialogActions>
          <TodoFormError isValid={todoFormik.isValid} />
          <Button onClick={handleClose}>ยกเลิก</Button>
          <Button disabled={!todoFormik.isValid} type="submit">
            {isEdit ? "แก้ไข" : "สร้าง"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default TodoDialog;
