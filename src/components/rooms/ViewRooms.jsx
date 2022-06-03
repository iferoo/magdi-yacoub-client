import React, { useEffect, useState } from "react";

import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { BiBed } from "react-icons/bi";

import styled from "styled-components";

import { roomUrl } from "../../util/url";

import axios from "axios";

export default function ViewRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(roomUrl)
      .then((response) => {
        console.log(response.data.data);
        setRooms(response.data.data);
      })
      .catch((error) => {});
  }, []);

  const roomToggle = (id) => {
    document.querySelectorAll(`#${id}`).forEach((element) => {
      element.classList.toggle("hide");
    });
  };

  return (
    <Section>
      {rooms.map((room) => (
        <div className="rooms" key={room.id}>
          <div className="address">
            <h3 className="name">{room.Name} </h3>
            <IoMdArrowDropdown
              id={"R" + room.id}
              className="hide"
              onClick={() => {
                roomToggle("R" + room.id);
              }}
            />
            <IoMdArrowDropright
              id={"R" + room.id}
              onClick={() => {
                roomToggle("R" + room.id);
              }}
            />
          </div>
          <div id={"R" + room.id} className={`roomInfo hide`} key={room.id}>
            {room.Beds.map((bed) => (
              <div
                key={bed.id}
                className={`beds ${bed.Patient == null ? "free" : "full"}`}
              >
                <p>{bed.Patient ? bed.Patient.Name : "--"}</p>
                <BiBed />
                <p>{bed.Patient == null ? "free" : "full"}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  .rooms {
    .address {
      display: flex;
      align-items: center;
      gap: 1rem;
      svg {
        font-size: 2rem;
      }
    }
    .roomInfo {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin: 0 auto;
      .beds {
        color: #888888;
        display: flex;
        flex-direction: column;
        align-items: center;
        svg {
          font-size: 4rem;
        }
      }
      .free {
        color: green;
      }
      .close {
        color: var(--red);
      }
    }
    .hide {
      display: none;
    }
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    gap: 0rem;
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
  }
`;
