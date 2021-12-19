import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import "./Login.css";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const Login = () => {
  const [loginData, setLoginData] = useState([]);
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container className="backlogin">
      <Grid container sx={{ m: 2 }} spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            style={{ fontSize: "40px", color: "white" }}
            variant="body1"
            gutterBottom
          >
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              name="password"
              onBlur={handleOnChange}
              type="password"
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 3 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
          </form>
          <p>------------------------------------</p>
          <Button
            onClick={handleGoogleSignIn}
            sx={{ width: "75%", m: 3 }}
            type="submit"
            variant="contained"
          >
            Google Sign In
          </Button>

          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User created successfully</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        {/* <Grid item xs={12} sm={6} md={6}>
          <img src="https://i.ibb.co/BGwNhpM/login.png" alt="" />
        </Grid> */}
      </Grid>

      <center>
        <NavLink to="/">
          <Button variant="contained">Go Home Page</Button>
        </NavLink>
      </center>
    </Container>
  );
};

export default Login;
