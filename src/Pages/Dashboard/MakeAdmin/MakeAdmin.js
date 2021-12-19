import { Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleAdminSubmit = (e) => {
    const user = { email };

    fetch("https://stark-reaches-58520.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);

          setSuccess(true);
          setEmail("");
        }
      });

    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="text-center">
      <img
        width="30%"
        className="img-fluid"
        src="https://i.ibb.co/xMHRdGt/admin-removebg-preview.png"
        alt=""
      />

      <h2>make an admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "40%", m: 1 }}
          id="standard-basic"
          label="email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <br />

        <Button type="submit" variant="contained">
          {" "}
          Make Admin{" "}
        </Button>
      </form>
      {success && <Alert severity="success">Made admin successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;
