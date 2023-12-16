import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

interface AuthenticationData {
  username: string;
  password: string;
}

interface AuthenticationResponse {
  authentication: string;
  userType: string;
}

function sendAuthenticationRequest(
  data: AuthenticationData
): Promise<AuthenticationResponse | undefined> {
  return fetch(
    "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/auth/authenticate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: data.username,
        password: data.password,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Authentication response:", data);
      return data as AuthenticationResponse;
    })
    .catch((error) => {
      console.error("Error sending authentication request:", error);
      return undefined;
    });
}

export default function LoginPage() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.username) {
        errors.username = "Required";
      } else if (!/^[A-Za-z0-9_]{3,20}$/i.test(values.username)) {
        errors.username = "Invalid username";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be at least 4 characters long";
      }

      return errors;
    },
    onSubmit: async (values) => {
      const response = await sendAuthenticationRequest(values);
      console.log(response);
      if (response) {
        sessionStorage.setItem("token", response.authentication);
        if (response.userType === "Admin") {
          navigate("/admin");
        } else if (response.userType === "User") {
          navigate("/home");
        } else {
          enqueueSnackbar("Wrong username or password", { variant: "error" });
        }
      }
    },
  });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(/imgs/hotel.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgs/logo.png" alt="Logo" />
          <Typography component="h1" variant="h5">
            Welcome to Travel Buddy
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#FF5403" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 5 }}
            >
              {"Copyright © "}
              <Link color="inherit" href="http://localhost:3000/">
                Travel Buddy
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
