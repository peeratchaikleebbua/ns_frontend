import { Avatar, Chip } from "@mui/material";
import React from "react";

function UserChip({ username }: { username: string | undefined }) {
  return (
    <Chip
      color="success"
      avatar={<Avatar>{username?.charAt(0)}</Avatar>}
      label={username ? username : "Anonymous"}
    />
  );
}

export default UserChip;
