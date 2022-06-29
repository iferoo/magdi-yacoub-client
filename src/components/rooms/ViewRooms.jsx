import React, { useEffect, useState } from 'react';

import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
import { BiBed } from 'react-icons/bi';
import { IoMdAddCircle } from 'react-icons/io';
import styled from 'styled-components';

import { roomUrl, bedUrl } from '../../util/url';

import { succNotify, errNotify } from '../../util/Notification';

import axios from 'axios';

export default function ViewRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(roomUrl)
      .then(response => {
        console.log(response.data.data);
        setRooms(response.data.data);
      })
      .catch(error => {});
  }, []);

  const roomToggle = id => {
    document.querySelectorAll(`#${id}`).forEach(element => {
      element.classList.toggle('hide');
    });
  };

  const onSubmitBed = roomID => {
    console.log(roomID);
    axios
      .post(bedUrl, {
        Patient: null,
        RoomID: roomID,
      })
      .then(function (response) {
        console.log(response);
        const selectedRoom = rooms.find(room => room.id == roomID);
        selectedRoom.Beds = [...selectedRoom.Beds, response.data.data];

        const roomIndex = rooms.findIndex(room => room.id == roomID);
        const newRoom = rooms;
        newRoom[roomIndex] = selectedRoom;
        console.log(newRoom);
        setRooms([...newRoom]);
        succNotify('Bed Add Successfully');
      })
      .catch(function (error) {
        console.log(error);
        errNotify('error!');
      });
  };
  return (
    <Section>
      {rooms.map(room => (
        <div className="rooms" key={room.id}>
          <div className="address">
            <h3 className="name">{room.Name}</h3>
            <IoMdArrowDropdown
              id={'R' + room.id}
              className="hide"
              onClick={() => {
                roomToggle('R' + room.id);
              }}
            />
            <IoMdArrowDropright
              id={'R' + room.id}
              onClick={() => {
                roomToggle('R' + room.id);
              }}
            />
          </div>
          <div id={'R' + room.id} className={`roomInfo hide`} key={room.id}>
            {room.Beds.map(bed => (
              <div
                key={bed.id}
                className={`beds ${bed.Patient == null ? 'free' : 'full'}`}
              >
                <p>{bed.Patient ? bed.Patient.Name : '--'}</p>
                <BiBed />
                <p>{bed.Patient == null ? 'free' : 'full'}</p>
              </div>
            ))}
            <IoMdAddCircle id="add" onClick={() => onSubmitBed(room.id)} />
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
      align-items: center;
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
      #add {
        font-size: 2rem;
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
