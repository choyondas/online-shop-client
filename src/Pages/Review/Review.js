import React from "react";
import axios from "axios";
import "./Review.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Button } from "@mui/material";
const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/review", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className=" add-service, back">
      <div className="container">
        <h2>Review page</h2>
        <form className="mt-5 itemform" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-3 m-3"
            {...register("username")}
            defaultValue={user.displayName}
          />

          <input
            className="p-3 m-3"
            {...register("email")}
            defaultValue={user.email}
          />

          <input
            type="number"
            className="p-3 m-3"
            {...register("rating")}
            placeholder="Rating number"
          />

          <input
            className="p-3 m-3"
            {...register("image")}
            placeholder="image url"
          />

          <textarea
            className="p-3 m-3"
            {...register("suggestion")}
            placeholder="Suggestion"
          />

          <Button className="button-29 w-25 mx-auto">
            <input type="submit" value="Submit" />
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Review;
