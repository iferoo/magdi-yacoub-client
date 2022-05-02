import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import { toast } from "react-toastify";

import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";

import { patients } from "../../patientsData";

import axios from "axios";

export default function SearchPatient() {
  const [activePatient, setActivePatient] = useState(0);

  const [patientCard, setPatientCard] = useState({
    id: null,
    Name: "",
    MedicalID: null,
    Room: "",
    Status: "",
    Condition: "",
    Patientinfo: {
      Age: null,
      Gender: "",
      RegisterDate: "",
      Branch: "",
      Nurse: "",
      Doctor: "",
    },
    MedicalConditon: {
      Disease: null,
      History: "",
      OtherDiseases: "",
      Diabeyic: false,
      Smoker: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("#", {
        Name: data.Name,
        Room: "Momen",
        Status: "under medical supervision",
        Condition: "ide",
        Patientinfo: [
          {
            Age: 23,
            Gender: "Male",
            RegisterDate: "Male",
            Branch: "Male",
            Nurse: "Male",
            Doctor: "Male",
          },
        ],
        MedicalConditon: [
          {
            Disease: 23,
            History: "Male",
            OtherDiseases: "Male",
            Diabeyic: false,
            Smoker: false,
          },
        ],
      })
      .then(function (response) {
        // console.log(response);
        // const patientIndex = patients.findIndex(
        //   (patient) => patient.id == patientCard.id
        // );
        // console.log(patientIndex);
        // patients[patientIndex] = patientCard;
        sucnotify();
      })
      .catch(function (error) {
        // console.log(error);
        // const patientIndex = patients.findIndex(
        //   (patient) => patient.id ===patientCard.id
        // );
        // patients[patientIndex] = patientCard;
        console.log(data);
        // console.log(patientCard);
        errnotify();
      });
  };
  console.log(errors);

  const sucnotify = () =>
    toast.success("Patient add success", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });

  const errnotify = () =>
    toast.error("there is an error", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000,
    });

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
          {patients.map((patient) => (
            <div className="patient" key={patient.id}>
              <div
                className={
                  activePatient === patient.id ? "active" : "nonActive"
                }
              ></div>
              <div
                className="info"
                onClick={() => {
                  setActivePatient(patient.id);
                  setPatientCard(patient);
                  console.log(patient);
                }}
              >
                <h3>{patient.Name}</h3>
                <h6>Patient ID: {patient.MedicalID}</h6>
                <p>Room: {patient.Room}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="patientProfile">
            <img src="/assets/Patient.png" alt="patient" />
            <div className="profile">
              <div className="inputAlign">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder=""
                  defaultValue={patientCard.Name}
                  {...register("Name", {})}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="room">Room</label>
                <input
                  id="room"
                  type="text"
                  placeholder=""
                  defaultValue={patientCard.Room}
                  {...register("Room", {})}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="status">Status</label>
                <input
                  id="status"
                  type="text"
                  placeholder=""
                  defaultValue={patientCard.Status}
                  {...register("Status", {})}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="condition">Condition</label>
                <input
                  id="condition"
                  type="text"
                  placeholder=""
                  defaultValue={patientCard.Condition}
                  {...register("Condition", {})}
                />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="patientInfo">
            <h3 className="name">Patient info</h3>
            <div className="Info">
              <div className="leftInfo">
                <div className="inputAlign">
                  <label htmlFor="age">Age</label>
                  <input
                    id="age"
                    type="number"
                    placeholder=""
                    defaultValue={patientCard.Patientinfo.Age}
                    {...register("Age", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    defaultValue={"patientCard.Patientinfo.Gender"}
                    {...register("Gender", {})}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="inputAlign">
                  <label htmlFor="name">Register Date</label>
                  <input
                    type="datetime"
                    placeholder=""
                    defaultValue={patientCard.Patientinfo.RegisterDate}
                    {...register("Register Date", {})}
                  />
                </div>
              </div>
              <div className="rightInfo">
                <div className="inputAlign">
                  <label htmlFor="branch">Branch</label>
                  <select
                    defaultValue={patientCard.Patientinfo.Branch}
                    {...register("Branch", {})}
                  >
                    <option value="Aswan Sail">Aswan Sail</option>
                  </select>
                </div>
                <div className="inputAlign">
                  <label htmlFor="nurse">Nurse</label>
                  <input
                    type="text"
                    placeholder=""
                    defaultValue={patientCard.Patientinfo.Nurse}
                    {...register("Nurse", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="doctor">Doctor</label>
                  <input
                    type="text"
                    placeholder=""
                    defaultValue={patientCard.Patientinfo.Doctor}
                    {...register("Doctor", {})}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="patientInfo">
            <h3 className="name">Medical Conditon</h3>
            <div className="Info">
              <div className="leftInfo">
                <div className="inputAlign">
                  <label htmlFor="disease">Disease</label>
                  <input
                    type="text"
                    placeholder=""
                    defaultValue={patientCard.MedicalConditon.Disease}
                    {...register("Disease", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="history">History</label>
                  <input
                    type="datetime"
                    placeholder=""
                    defaultValue={patientCard.MedicalConditon.History}
                    {...register("History", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="otherDiseases">Other Diseases</label>
                  <input
                    type="text"
                    placeholder=""
                    defaultValue={patientCard.MedicalConditon.OtherDiseases}
                    {...register("Other Diseases", {})}
                  />
                </div>
              </div>
              <div className="rightInfo">
                <div className="inputAlign">
                  <label htmlFor="diabeyic">Diabeyic</label>
                  <input
                    type="checkbox"
                    placeholder=""
                    checked={patientCard.MedicalConditon.Diabeyic}
                    {...register("Diabeyic", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="smoker">Smoker</label>
                  <input
                    type="checkbox"
                    placeholder=""
                    checked={patientCard.MedicalConditon.Smoker}
                    {...register("Smoker", {})}
                  />
                </div>
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
          <div className="line"></div>

          <div className="submit">
            <input type="submit" value="Save" />
            <input type="submit" value="Remove" id="remove" />
          </div>
        </form>
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
      overflow-y: scroll;
      height: 90vh;
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
    .result::-webkit-scrollbar {
      width: 8px;
    }
    .result::-webkit-scrollbar-thumb {
      background: #888888;
      border-radius: 8px;
    }
    .result::-webkit-scrollbar-track {
      background: #ffffff;
    }
  }
  .right {
    width: 65%;
    box-shadow: 0px 0px 1px 1px #888888;
    input,
    select {
      padding: 0.5rem;

      &::placeholder {
      }
      &:focus {
      }
    }
    .patientProfile {
      padding: 1rem 3rem;
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
        width: 45%;
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
        width: 45%;
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
      #remove {
        background-color: var(--red);
      }
    }
    .inputAlign {
      display: flex;
      align-items: center;
      label {
        width: 30%;
      }
      input {
        width: 70%;
      }
      select {
        width: 70%;
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
      .result {
        height: 50vh;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
      }
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
      .patientProfile {
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        img {
          width: 50%;
        }
        .profile {
          width: 100%;
        }
      }
      .patientInfo {
        .Info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.3rem;
        }
        .leftInfo {
          width: 100%;
          justify-content: center;
        }
        .rightInfo {
          width: 100%;
          justify-content: center;
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
