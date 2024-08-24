import { TodoErrorFormType } from "@/types/todoType/todo";
import { Chip } from "@mui/material";
import React from "react";

function TodoFormError({ isValid }: TodoErrorFormType) {
  if (isValid) return null;

  return (
    <Chip
      sx={{ width: "100%", marginTop: 2 }}
      color="error"
      label="โปรดกรอกข้อมูลให้ครบถ้วน"
    />
  );
}

export default TodoFormError;
