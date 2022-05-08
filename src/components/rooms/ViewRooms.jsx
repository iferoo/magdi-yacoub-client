import React, { useEffect, useState } from "react";

import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { BiBed } from "react-icons/bi";
import { rooms } from "../../util/roomsData";

import styled from "styled-components";

export default function ViewRooms() {
  // const [rooms, setRooms] = useState([])
  const [bedToggle, setBedToggle] = useState([]);
  const [bedToggleUpdate, setBedToggleUpdate] = useState([]);
  useEffect(() => {
    console.log(bedToggleUpdate);
  }, [bedToggleUpdate]);
  return (
    <Section>
      {rooms.map((room) => (
        <div className="rooms" key={room.id}>
          <div className="address">
            <h3 className="name">{room.floorName} </h3>
            {bedToggle.find((bed) => bed == room.id) ? (
              <IoMdArrowDropdown
                onClick={() => {
                  setBedToggleUpdate(
                    bedToggle.splice(
                      bedToggle.findIndex((bed) => bed == room.id),
                      1
                    )
                  );
                }}
              />
            ) : (
              <IoMdArrowDropright
                onClick={() => {
                  bedToggle.find((bed) => bed == room.id)
                    ? setBedToggle([...bedToggle])
                    : setBedToggle([...bedToggle, room.id]);
                }}
              />
            )}
          </div>
          <div
            className={`roomInfo ${
              bedToggle.find((bed) => bed == room.id) ? "" : "hide"
            }`}
            key={room.id}
          >
            {room.beds.map((bed) => (
              <div key={bed.id} className={`beds ${bed.status}`}>
                <p>{bed.bedNumber}</p>
                <BiBed />
                <p>{bed.status}</p>
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
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
  }
`;
