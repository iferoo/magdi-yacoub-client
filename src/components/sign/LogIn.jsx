import { React, useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { useNavigate, Link } from "react-router-dom";

import { loginUrl } from "../../util/url";

import styled from "styled-components";

import axios from "axios";

export default function LogIn() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const hasEmailError = () => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        getValues("user.username")
      )
    ) {
      setUsernameError(false);
    } else {
      setUsernameError(true);
    }
  };

  useEffect(() => {
    
    if (localStorage.getItem("token") != null) {
      navigate("/patients");
    }
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
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
        setLoginError(true);
        // errNotify("There is and error in username or password");
      });
  };
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ width: "100%" }}>
        <input
          type="text"
          placeholder="username"
          onChangeCapture={() => hasEmailError()}
          onClick={() => hasEmailError()}
          {...register("user.username", {
            required: true /*pattern: /^\S+@\S+$/i*/,
          })}
        />
        <EmailAlert style={{ display: `${usernameError ? "block" : "none"}` }}>
          Enter a valid username
        </EmailAlert>
      </div>
      <input
        type="password"
        placeholder="password"
        {...register("user.password", {})}
      />

      <input type="submit" className="submit" value="login" />

      <div className="links">
        <LoginNotification
          style={{ display: `${loginError ? "block" : "none"}` }}
        >
          Your username and/or password are incorrect
        </LoginNotification>
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
const LoginNotification = styled.div`
  background-color: var(--red);
  border-radius: 4px;
  padding: 0.5rem;
  color: white;
  width: 100%;
  font-size: 1rem;
  text-align: center;
`;
const EmailAlert = styled.p`
  color: var(--red);
  margin-top: 5px;
  font-size: 1rem;
`;
