import { Avatar, Chip, CircularProgress } from "@mui/material";
import React from "react";

function UserChip({ username }: { username: string | undefined }) {
  return (
    <Chip
      color="success"
      avatar={<Avatar>{username?.charAt(0)}</Avatar>}
      label={
        username ? username : <CircularProgress size={15} color="inherit" />
      }
    />
  );
}

export default UserChip;
