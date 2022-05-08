import React from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import { succNotify, errNotify } from "../../util/Notification";

import { roomUrl } from "../../util/url";

import axios from "axios";

export default function AddRooms() {
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      room: {
        roomName: "",
      },
    },
  });

  const onSubmit = (data) => {
    axios
      .post(roomUrl, {
        roomName: data.room.roomName,
        beds: [],
      })
      .then(function (response) {
        // console.log(response);
        setValue("room", {
          roomName: "",
        });
        succNotify("Room Add Successfully");
      })
      .catch(function (error) {
        console.log(error);
        errNotify("error!");
      });
  };
  // console.log(errors);

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profile">
          <div className="inputAlign">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder=""
              {...register("room.roomName", { required: true })}
            />
          </div>
        </div>
        <div className="line"></div>
        <div className="submit">
          <input type="submit" value="Add" />
        </div>
      </form>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  box-shadow: 0px 0px 1px 1px #888888;
  .line {
    width: 80%;
    margin: 0 auto;
    border: 0.3px solid #b9b9b9;
    border-radius: 1rem;
  }

  input,
  select {
    padding: 0.5rem;

    &::placeholder {
    }
    &:focus {
    }
  }
  .profile {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    .inputAlign {
      display: flex;
      align-items: center;
      label {
        width: 40%;
      }
      input {
        width: 60%;
      }
      select {
        width: 60%;
      }
    }
  }

  .submit {
    padding: 1rem 3rem;
    input {
      width: 100%;
      margin: 0.5rem auto;
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

  @media screen and (min-width: 720px) and (max-width: 1080px) {
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
  }
`;
