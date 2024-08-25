import { Backdrop, CircularProgress } from "@mui/material";

export default function loading() {
  return (
    <Backdrop
      sx={{ color: "#fff"}}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
