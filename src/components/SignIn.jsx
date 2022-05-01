import React from "react";
import { useNavigate } from "react-router-dom";
import style from 'styled-components'


export default function SignIn() {
  const navigate = useNavigate();

  return (
    <Section>
      <img src="/assets/magdi-yacoub-logo.png" alt="Magdi Yaqoub" />
      <div className="SignIn">
        <div className="SignBox ">
          <h5> Staff Login </h5>{" "}
          <form className="container">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Staff ID{" "}
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Staff@example.com"
              />
            </div>{" "}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Password{" "}
              </label>{" "}
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Password"
              />
            </div>{" "}
            <button
              className="btn btn-primary mb-2"
              onClick={() => navigate("/")}
            >
              Login{" "}
            </button>{" "}
            <a href="/"> Sign Up ? </a> <a href="/"> Forget Password </a>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    </Section>

  );
}

const Section = style.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  img{
    width: 80px;
    margin-bottom: 50px;
  }
  .SignIn {
    box-sizing: content-box;
    box-shadow: 1px 1px 5px #888888;
    width: 280px;
    height: 350px;
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 100px;
    h5 {
      text-align: center;
      padding: 10px;
      font-weight: bold;
      font-size: 1.5rem;
    }
    button {
      width: 100%;
      cursor: pointer;
      color: #fff;
      text-align: center;
      background-color: #0d6efd;
      border-color: #0d6efd;
      font-size: 1rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      border: none;
      border-radius: 0.2rem;
      padding: 0.5rem;
      &:hover{
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
      }
    }
    a {
      font-size: small;
      display: block;
      text-decoration: none;
      margin-top: .5rem;

  }
  label {
    font-size: small;
    display: inline-block;
    margin-bottom: .5rem;
}
.form-control{
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;}
.mb-3{
  margin-bottom: 1rem !important;
}
}
@media screen and (min-width: 280px) and (max-width: 1080px){
  .SignIn {
    box-shadow: none;

  }
}
`