import {React, useEffect} from "react";

import { useForm } from "react-hook-form";

import { useNavigate, Link } from "react-router-dom";

import { loginUrl } from "../../util/url";

import { succNotify, errNotify } from "../../util/Notification";

import axios from "axios";

import styled from "styled-components";

export default function LogIn() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/patients");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: {
        username: "",
        password: "",
      },
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(loginUrl, {
        username: data.user.username,
        password: data.user.password,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/patients");
        }
        // setValue("user", {
        //   firstName: "",
        //   lastName:  "",
        //   username: "",
        //   password: "",
        //   email: "",
        // });
      })
      .catch(function (error) {
        console.log(error);
        errNotify("There is and error in username or password");
      });
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="username"
        {...register("user.username", {
          required: true /*pattern: /^\S+@\S+$/i*/,
        })}
      />
      <input
        type="password"
        placeholder="password"
        {...register("user.password", {})}
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
