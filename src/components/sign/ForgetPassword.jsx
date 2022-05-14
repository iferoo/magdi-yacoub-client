import React from "react";
import { useForm } from "react-hook-form";

// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  // const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input type="submit" className="submit" value="Reset Password" />
    </form>
  );
}
