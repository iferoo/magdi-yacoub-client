import React from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

export default function SignUp() {
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
      <input type="text" placeholder="name" {...register("name", {})} />
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

      <input type="submit" className="submit" value="Sign Up" />
      <div className="links">
        <div className="or">
          <div />
          <p>OR</p>
          <div />
        </div>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
}
