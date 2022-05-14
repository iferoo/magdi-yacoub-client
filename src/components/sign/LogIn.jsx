import React from "react";
import { useForm } from "react-hook-form";

import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

export default function LogIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    sessionStorage.setItem("isLogin", true);

    if (data.email == "admin@admin.com" && data.password == "admin") {
      sessionStorage.setItem("isLogin", true);
      navigate("/patients");
    }
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="password"
        {...register("password", {})}
      />

      <input type="submit" className="submit" value="login" />

      <div className="links">
        <div className="or">
          <div />
          <p>OR</p>
          <div />
        </div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/forgetpassword">Forget Password!</Link>
      </div>
    </form>
  );
}
