import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import { registerUrl } from "../../util/url";

import { errNotify } from "../../util/Notification";

import styled from "styled-components";

import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState(false);

  const {
    register,
    handleSubmit,
    // setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      },
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(registerUrl, {
        first_name: data.user.firstName,
        last_name: data.user.lastName,
        username: data.user.username,
        email: data.user.email,
        password: data.user.password,
        is_superuser: true,
        is_staff: true,
        is_active: true,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/patients");
        }
      })
      .catch(function (error) {
        console.log(error);
        setSignupError(true)
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="first name"
        {...register("user.firstName", {})}
      />
      <input
        type="text"
        placeholder="last name"
        {...register("user.lastName", {})}
      />
      <input
        type="text"
        placeholder="username"
        {...register("user.username", {})}
      />
      <input
        type="email"
        placeholder="email"
        {...register("user.email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="password"
        {...register("user.password", {})}
      />
      <input type="submit" className="submit" value="Sign Up" />
      <div className="links">
        <LoginNotification
          style={{ display: `${signupError ? "block" : "none"}` }}
        >
          This username is already exist.
        </LoginNotification>
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
const LoginNotification = styled.div`
  background-color: var(--red);
  border-radius: 4px;
  padding: 0.5rem;
  color: white;
  width: 100%;
  font-size: 1rem;
  text-align: center;
`;
