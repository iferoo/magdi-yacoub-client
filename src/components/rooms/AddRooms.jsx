import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import { succNotify, errNotify } from "../../util/Notification";

import { bedUrl, roomUrl } from "../../util/url";

import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

import axios from "axios";

export default function AddRooms() {
  const [rooms, setRooms] = useState([]);

  const roomToggle = (id) => {
    document.querySelectorAll(`#${id}`).forEach((element) => {
      element.classList.toggle("hide");
    });
  };

  useEffect(() => {
    axios
      .get(roomUrl)
      .then((response) => {
        console.log(response.data.data);
        setRooms(response.data.data);
      })
      .catch((error) => {});
  }, []);

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

  const {
    register: bedRegister,
    handleSubmit: bedHandleSubmit,
    // setValue: bedSetValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      bed: {
        RoomID: 0,
      },
    },
  });

  const onSubmitRoom = (data) => {
    axios
      .post(roomUrl, {
        Name: data.room.roomName,
      })
      .then(function (response) {
        console.log(response);
        setValue("room", {
          roomName: "",
        });
        setRooms([...rooms, response.data.data]);
        succNotify("Room Add Successfully");
      })
      .catch(function (error) {
        console.log(error);
        errNotify("error!");
      });
  };
  // console.log(errolors);
  const onSubmitBed = (data) => {
    console.log(data.bed.RoomID);
    axios
      .post(bedUrl, {
        Patient: null,
        RoomID: data.bed.RoomID,
      })
      .then(function (response) {
        console.log(response);
        succNotify("Bed Add Successfully");
      })
      .catch(function (error) {
        console.log(error);
        errNotify("error!");
      });
  };
  // console.log(errolors);

  return (
    <Section>
      <div className="rooms">
        <div className="address">
          <h3 className="name">Room</h3>
          <IoMdArrowDropright
            id="addRoom"
            onClick={() => {
              roomToggle("addRoom");
            }}
          />
          <IoMdArrowDropdown
            id="addRoom"
            className="hide"
            onClick={() => {
              roomToggle("addRoom");
            }}
          />
        </div>
        <div id={"addRoom"} className={`roomInfo hide`}>
          <form onSubmit={handleSubmit(onSubmitRoom)}>
            <div className="profile">
              <div className="inputAlign">
                <label htmlFor="roomName">Name</label>
                <input
                  id="roomName"
                  type="text"
                  placeholder="enter room name"
                  {...register("room.roomName", { required: true })}
                />
              </div>
            </div>
            <div className="line"></div>
            <div className="submit">
              <input type="submit" value="Add Room" />
            </div>
          </form>
        </div>
      </div>

      <div className="rooms">
        <div className="address">
          <h3 className="name">Bed</h3>
          <IoMdArrowDropdown
            id="addBed"
            className="hide"
            onClick={() => {
              roomToggle("addBed");
            }}
          />
          <IoMdArrowDropright
            id="addBed"
            onClick={() => {
              roomToggle("addBed");
            }}
          />
        </div>
        <div id={"addBed"} className={`roomInfo hide`}>
          <form onSubmit={bedHandleSubmit(onSubmitBed)}>
            <div className="profile">
              <div className="inputAlign">
                <label htmlFor="bed">Room</label>
                <select id="bed" {...bedRegister("bed.RoomID", {})}>
                  <option value="none" style={{ display: "none" }}></option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="line"></div>
            <div className="submit">
              <input type="submit" value="Add Bed" />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 0.5rem;
  width: 100%;
  .line {
    width: 80%;
    margin: 0 auto;
    border: 0.3px solid #b9b9b9;
    border-radius: 1rem;
  }
  .hide {
    display: none;
  }
  .address {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      font-size: 2rem;
    }
  }
  form {
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
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    form {
      .profile {
        padding: 1rem;
        gap: 1rem;
      }
      .submit {
        padding: 0 1rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    form {
      .profile {
        padding: 1rem;
        gap: 1rem;
      }
      .submit {
        padding: 0 1rem;
      }
    }
  }
`;
