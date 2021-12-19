import { Button, Input } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://stark-reaches-58520.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className=" add-service, ">
      <div className="container">
        <h2>Add Product</h2>
        <form className="mt-5 itemform" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-3 m-3"
            {...register("name", { required: true })}
            placeholder="Product Name"
          />

          <input
            className="p-3 m-3"
            {...register("price", { required: true })}
            placeholder="Price"
          />

          <input
            type="number"
            className="p-3 m-3"
            {...register("rating", { required: true })}
            placeholder="Rating number"
          />
          <input
            className="p-3 m-3"
            {...register("brand", { required: true })}
            placeholder="Brand"
          />

          <input
            className="p-3 m-3"
            {...register("img", { required: true })}
            placeholder="image url"
          />

          <textarea
            className="p-3 m-3"
            {...register("description, { required: true }")}
            placeholder="Description"
          />
          {/* <Input accept="image/*" type="file" /> */}

          <Button className="button-29 w-25 mx-auto">
            <input type="submit" value="Submit" />
          </Button>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
