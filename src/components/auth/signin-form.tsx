"use client";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";

import { useFormik } from "formik";
import { LoginBodyRequestType, signInSchema } from "@/types/authType/login.d";
import FormError from "./form-error";
import { useState } from "react";
import { redirect } from "next/navigation";
import { SignInAuth } from "@/service/login/login.service";

export function SignInForm() {
  const [messageError, setMessageError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleResetMessage = () => {
    setMessageError("");
  };

  const signInFormik = useFormik<LoginBodyRequestType>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      setLoading(true);

      const inValidSignin = await SignInAuth({ values });
      if (inValidSignin) {
        setMessageError("Invalid Credential");
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={signInFormik.handleSubmit}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              value={signInFormik.values.username}
              onFocus={handleResetMessage}
              onChange={signInFormik.handleChange}
              onBlur={signInFormik.handleBlur}
              error={
                signInFormik.touched.username &&
                Boolean(signInFormik.errors.username)
              }
              helperText={
                signInFormik.touched.username && signInFormik.errors.username
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onFocus={handleResetMessage}
              value={signInFormik.values.password}
              onChange={signInFormik.handleChange}
              onBlur={signInFormik.handleBlur}
              error={
                signInFormik.touched.password &&
                Boolean(signInFormik.errors.password)
              }
              helperText={
                signInFormik.touched.password && signInFormik.errors.password
              }
            />
            <FormError message={messageError} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Sign In"
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </form>
  );
}
