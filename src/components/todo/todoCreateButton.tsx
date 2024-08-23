import { Fab } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { TodoCreateButtonType } from "@/types/todoType/todo";

function TodoCreateButton({ handleCreate }: TodoCreateButtonType) {
  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
      }}
      onClick={handleCreate}
    >
      <AddIcon />
    </Fab>
  );
}

export default TodoCreateButton;
