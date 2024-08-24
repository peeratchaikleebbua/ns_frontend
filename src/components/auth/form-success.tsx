import { Chip } from "@mui/material";
import React from "react";

function FormSuccess() {
  return (
    <Chip
      sx={{ width: "100%", marginTop: 2 }}
      color="success"
      label="Welcome to Todo App"
    />
  );
}

export default FormSuccess;
