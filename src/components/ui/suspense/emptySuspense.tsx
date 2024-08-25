import { Box, Container, Typography } from "@mui/material";
import React from "react";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import UserChip from "../user/userChip";

export default function EmptySuspense({ username }: { username: string | undefined }) {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <WavingHandIcon />
        <Typography>มาเริ่มจัดระเบียบ Todo กันเถอะ</Typography>
        <UserChip username={username} />
      </Box>
    </Container>
  );
}
