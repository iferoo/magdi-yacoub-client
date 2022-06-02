import React from "react";
import {Outlet } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignPage() {
  // const navigate = useNavigate();

  return (
    <Section>
      <div className="left">
        {/* <img src="/assets/Surgery.jpg" alt="Magdi Yaqoub" /> */}
      </div>

      <div className="right">
        <img src="/assets/magdi-yacoub-logo.png" alt="Magdi Yaqoub" />
        <Outlet />
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  .left {
    width: 60%;
    height: inherit;
    background-image: url("/assets/Surgery2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .right {
    width: 40%;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px #888888;

    img {
      width: 20vh;
    }
    form {
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;

      input {
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        appearance: none;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        width: 100%;
      }
      .submit {
        cursor: pointer;
        color: #fff;
        text-align: center;
        background-color: #0d6efd;
        border-color: #0d6efd;
        font-size: 1rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        border: none;
        border-radius: 0.2rem;
        padding: 0.5rem;
        &:hover {
          color: #fff;
          background-color: #0b5ed7;
          border-color: #0a58ca;
        }
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 1rem;
      gap: 0.5rem;
      .or {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        div {
          width: 40%;
          border-bottom: 1px solid black;
        }
        p {
          width: 10%;
          text-align: center;
        }
      }
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .left {
      display: none;
    }
    .right {
      width: 100%;
      form {
        width: 80%;
      }
    }
  }
`;
