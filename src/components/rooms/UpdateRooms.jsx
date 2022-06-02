import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import { succNotify, errNotify } from "../../util/Notification";

import { bedUrl, roomUrl } from "../../util/url";

import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

import axios from "axios";

export default function UpdateRooms() {
  const [rooms, setRooms] = useState([]);

  const [beds, setBeds] = useState([]);

  const [activeRoomID, setActiveRoomID] = useState(0);

  const roomToggle = (id) => {
    document.querySelectorAll(`#${id}`).forEach((element) => {
      element.classList.toggle("hide");
    });
  };

  useEffect(() => {
    axios
      .get(roomUrl)
      .then((response) => {
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
        id: "",
        name: "",
        bed: "",
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
        BedID: 0,
      },
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    axios
      .put(roomUrl + `${data.room.id}`, {
        Name: data.room.name,
      })
      .then(function (response) {
        console.log(response);
        const newRooms = rooms.map((room) => {
          if (room.id == data.room.id) {
            return { ...room, Name: data.room.name };
          }
          return { ...room };
        });
        setRooms(newRooms);
        succNotify("Room Update Successfully");
      })
      .catch(function (error) {
        console.log(error);
        errNotify("error!");
      });
  };
  // console.log(errors);

  const handleRemoveRoom = () => {
    if (window.confirm("all bed in this room will be deleted")) {
      axios
        .delete(roomUrl + `${activeRoomID}`)
        .then((response) => {
          console.log(response);
          const newRooms = rooms.filter((room) => room.id != activeRoomID);
          setRooms(newRooms);
          setValue("room", {
            name: "",
            bed: "",
          });
          errNotify("Room Removed");
        })
        .catch((error) => {
          console.log(error);
          errNotify("Error on Removed");
        });
    }
  };

  const onSubmitBed = (data) => {
    if (window.confirm(`Bed ${data.bed.BedID} will be Delete`)) {
      axios
        .delete(bedUrl + `${data.bed.BedID}`)
        .then((response) => {
          console.log(response);
          const newBeds = beds.filter((bed) => bed.id != data.bed.BedID);
          setBeds(newBeds);
          errNotify("Bed Removed");
        })
        .catch((error) => {
          console.log(error);
          errNotify("Error on Removed");
        });
    }
  };
  // console.log(errors);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="profile">
              <div className="inputAlign">
                <label htmlFor="roomID">Name</label>
                <select
                  onClick={(event) => {
                    if (event.target.value != "none") {
                      setActiveRoomID(event.target.value);
                      setValue("room", {
                        bed: rooms.find((room) => room.id == event.target.value)
                          .Beds.length,
                      });
                    }
                  }}
                  {...register("room.id", {})}
                >
                  <option value="none" style={{ display: "none" }}></option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputAlign">
                <label htmlFor="roomName">New Name</label>
                <input
                  id="roomName"
                  type="text"
                  placeholder="enter new name"
                  {...register("room.name", { required: true })}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="bed">Number Of Bed</label>
                <input
                  id="bed"
                  type="text"
                  placeholder=""
                  {...register("room.bed", { required: true, disabled: true })}
                />
              </div>
            </div>
            <div className="line"></div>
            <div className="submit">
              <input type="submit" value="Update" />
            </div>
          </form>
          <div className="submit">
            <button
              id="remove"
              className="submit"
              onClick={() => handleRemoveRoom()}
            >
              Remove
            </button>
          </div>
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
                <select
                  id="bed"
                  onClick={(event) => {
                    if (event.target.value != "none") {
                      setBeds(
                        rooms.find((room) => room.id == event.target.value).Beds
                      );
                    }
                  }}
                  {...bedRegister("bed.RoomID", {})}
                >
                  <option value="none" style={{ display: "none" }}></option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputAlign">
                <label htmlFor="bed">Bed</label>
                <select id="bed" {...bedRegister("bed.BedID", {})}>
                  <option value="none" style={{ display: "none" }}></option>
                  {beds.map((bed) => (
                    <option key={bed.id} value={bed.id}>
                      {bed.id}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="line"></div>
            <div className="submit">
              <button
                id="remove"
                className="submit"
                onClick={() => onSubmitBed()}
              >
                Remove
              </button>
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
  input,
  select,
  button {
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
    padding: 0 3rem;
    input,
    button {
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
    #remove {
      background-color: var(--red);
    }
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
  }
`;
