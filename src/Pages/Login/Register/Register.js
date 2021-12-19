import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import "./Register.css"
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("password did not matched");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container className="backlogin">
      <Grid container sx={{ m: 2 }} spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
              />

              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                name="password"
                onBlur={handleOnBlur}
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="confirm password"
                name="password2"
                onBlur={handleOnBlur}
                type="password"
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 3 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">
                  Already Registered? Please Logins
                </Button>
              </NavLink>
            </form>
          )}
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

export default Register;
