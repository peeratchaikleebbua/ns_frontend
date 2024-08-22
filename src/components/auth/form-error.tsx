import { FormErrorType } from "@/types/authType/login";
import { Box, Chip } from "@mui/material";
import React from "react";

function FormError({ message }: FormErrorType) {
  if (!message) return null;

  return (
    <Chip
      sx={{ width: "100%", marginTop: 2 }}
      color="error"
      label="Invalid Credential"
    />
  );
}

export default FormError;
