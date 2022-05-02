import React, { useState } from "react";
import styled from "styled-components";

import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";

export default function SearchPatient() {
  const [activePatient, setActivePatient] = useState(1);

  return (
    <Section>
      <div className="left">
        <div className="search">
          <div className="search-input">
            <BiSearch />
            <input
              type="text"
              name="patient"
              id="patient"
              placeholder="Search by patient name"
            />
          </div>
          <label htmlFor="patient">Sort patient by Patient ID</label>
        </div>
        <div className="result">
          <div className="patient">
            <div className={activePatient === 1 ? "active" : "nonActive"}></div>
            <div
              className="info"
              onClick={() => {
                setActivePatient(1);
                console.log(activePatient);
              }}
            >
              <h3>Momen mekki</h3>
              <h6>Patient ID: 2016021283</h6>
              <p>Room: A-430</p>
            </div>
          </div>
          <div className="patient">
            <div className={activePatient === 2 ? "active" : "nonActive"}></div>
            <div
              className="info"
              onClick={() => {
                setActivePatient(2);
                console.log(activePatient);
              }}
            >
              <h3>Desha</h3>
              <h6>Patient ID: 2016021283</h6>
              <p>Room: A-430</p>
            </div>
          </div>
          <div
            className="patient"
            onClick={() => {
              setActivePatient(3);
              console.log(activePatient);
            }}
          >
            <div className={activePatient === 3 ? "active" : "nonActive"}></div>
            <div className="info">
              <h3>Motaz Samy</h3>
              <h6>Patient ID: 2016021283</h6>
              <p>Room: A-430</p>
            </div>
          </div>
          <div className="patient">
            <div className={activePatient === 4 ? "active" : "nonActive"}></div>
            <div
              className="info"
              onClick={() => {
                setActivePatient(4);
                console.log(activePatient);
              }}
            >
              <h3>Momen Mekki</h3>
              <h6>Patient ID: 2016021283</h6>
              <p>Room: A-430</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="patientProfile">
          <img src="/assets/ProfilePic.JPG" alt="patient" />
          <div className="profile">
            <h3 className="name">Momen Mekki</h3>
            <p className="room">Room: A-430</p>
            <h6 className="status">Status: under medical supervision</h6>
            <p className="condition">Condition: ide</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="patientInfo">
          <h3 className="name">Patient info</h3>
          <div className="Info">
            <div className="leftInfo">
              <p>
                Age: <span>23</span>
              </p>
              <p>
                Gender: <span>Male</span>
              </p>
              <p>
                Register Date: <span>2016-06-12</span>
              </p>
            </div>
            <div className="rightInfo">
              <p>
                Branch: <span>Aswan Sail branch</span>
              </p>
              <p>
                Nurse: <span>Mona Mohamed</span>
              </p>
              <p>
                Doctor: <span>Sara Ahmed Hassan</span>
              </p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="patientInfo">
          <h3 className="name">Medical Conditon</h3>
          <div className="Info">
            <div className="leftInfo">
              <p>
                Disease: <span>Heart valve disease</span>
              </p>
              <p>
                History: <span>2020-02-01</span>
              </p>
              <p>
                Other Diseases:{" "}
                <span>Strep throat, high blood presure, insomia</span>
              </p>
            </div>
            <div className="rightInfo">
              <p>
                Diabeyic: <span>false</span>
              </p>
              <p>
                Smoker: <span>false</span>
              </p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="other">
          <div className="info">
            <IoMdArrowDropright />
            <p>Post examination results</p>
          </div>
          <div className="info">
            <IoMdArrowDropright />
            <p>Documents</p>
          </div>
          <div className="info">
            <IoMdArrowDropright />
            <p>Patient history</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;

  .left {
    width: 30%;
    .search {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      .search-input {
        width: 100%;
        background-color: #b9b9b9;
        border-radius: 1rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;

        svg {
          width: 20%;
          font-size: 1.5rem;
          color: #888888;
        }
        input {
          width: 80%;
          background-color: transparent;
          border: none;
          &::placeholder {
            color: var(--white);
          }
          &:focus {
            outline: none;
          }
        }
      }
      label {
        padding-left: 1rem;
        font-size: 0.8rem;
      }
    }
    .result {
      .patient {
        cursor: pointer;
        display: flex;
        padding: 0.5rem;
        .active {
          margin: 0.4rem;
          width: 8px;
          height: 8px;
          background-color: blue;
          border-radius: 50%;
        }
        .nonActive {
          margin: 0.4rem;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          h6 {
            font-weight: 200;
          }
          p {
            color: green;
            font-size: 0.8rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  .right {
    width: 65%;
    box-shadow: 0px 0px 1px 1px #888888;
    .patientProfile {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        padding: 1rem;
        width: 30%;
        border-radius: 50%;
      }
      .profile {
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        .name {
          font-weight: 600;
        }
        .room {
          font-weight: 400;
          font-size: 0.8rem;
        }
        .status {
          font-weight: 400;
          font-size: 0.8rem;
        }
        .condition {
          font-weight: 400;
          font-size: 0.8rem;
          color: green;
        }
      }
    }
    .patientInfo {
      padding: 1rem 3rem;
      .Info {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
      }
      .leftInfo {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        p {
          font-size: 1rem;
          span {
            font-weight: bold;
          }
        }
      }
      .rightInfo {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        p {
          font-size: 1rem;
          span {
            font-weight: bold;
          }
        }
      }
    }
    .other {
      padding: 1rem 3rem;
      .info {
        display: flex;
        align-items: center;
        svg {
          font-size: 1.5rem;
        }
        p {
          font-weight: 600;
        }
      }
    }

    .line {
      width: 80%;
      margin: 0 auto;
      border: 0.3px solid #b9b9b9;
      border-radius: 1rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 2rem;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    flex-direction: column;
    gap: 2rem;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;

      .patientInfo {
        padding: 1rem 3rem;
        .Info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          justify-content: space-between;
          margin-top: 1rem;
          .leftInfo {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            p {
              font-size: 1rem;
              span {
                font-weight: bold;
              }
            }
          }
          .rightInfo {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            p {
              font-size: 1rem;
              span {
                font-weight: bold;
              }
            }
          }
        }
      }
      .other {
        padding: 1rem 3rem;
        .info {
          display: flex;
          align-items: center;
          svg {
            font-size: 1.5rem;
          }
          p {
            font-weight: 600;
          }
        }
      }
    }
  }
`;
