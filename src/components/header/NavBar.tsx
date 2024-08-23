import { auth } from "@/auth";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
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
import UserChip from "../ui/user/userChip";

async function NavBar() {
  const session = await auth();
  const user = session?.user;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={"secondary"} position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Test Todo App
          </Typography>
          {user && (
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <UserChip username={user.username}/>
              <CustomSignOut />
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
