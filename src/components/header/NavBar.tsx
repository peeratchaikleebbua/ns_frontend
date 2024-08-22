import { auth } from "@/auth";
import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { CustomSignOut } from "../auth/signout-button";
import { SignInButton } from "../auth/signin-button";

async function NavBar() {
  const session = await auth();
  const user = session?.user;
  console.log("session here", session);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Test Todo App
          </Typography>
          {user && (
            <Stack>
              <Typography>{user.username}</Typography>
              <CustomSignOut />
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
