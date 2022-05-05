import React from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import { succNotify, errNotify } from "../../util/Notification";

import { patientsUrl } from "../../util/url";

import axios from "axios";

export default function AddPatient() {
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      patient: {
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
      },
    },
  });

  const onSubmit = (data) => {
    axios
      .post(patientsUrl, {
        Name: data.patient.Name,
        Room: data.patient.Room,
        Status: data.patient.Status,
        Condition: data.patient.Condition,
        Patientinfo: {
          Age: data.patient.Patientinfo.Age,
          Gender: data.patient.Patientinfo.Gender,
          RegisterDate: data.patient.Patientinfo.RegisterDate,
          Branch: data.patient.Patientinfo.Branch,
          Nurse: data.patient.Patientinfo.Nurse,
          Doctor: data.patient.Patientinfo.Doctor,
        },
        MedicalConditon: {
          Disease: data.patient.MedicalConditon.Disease,
          History: data.patient.MedicalConditon.History,
          OtherDiseases: data.patient.MedicalConditon.OtherDiseases,
          Diabeyic: data.patient.MedicalConditon.Diabeyic,
          Smoker: data.patient.MedicalConditon.Smoker,
        },
      })
      .then(function (response) {
        // console.log(response);
        setValue("patient", {
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
        succNotify("Patient Add Successfully");
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
        <div className="patientProfile">
          <img src="/assets/Patient.png" alt="patient" />
          <div className="profile">
            <div className="inputAlign">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder=""
                {...register("patient.Name", { required: true })}
              />
            </div>
            <div className="inputAlign">
              <label htmlFor="room">Room</label>
              <input
                id="room"
                type="text"
                placeholder=""
                {...register("patient.Room", { required: true })}
              />
            </div>
            <div className="inputAlign">
              <label htmlFor="status">Status</label>
              <input
                id="status"
                type="text"
                placeholder=""
                {...register("patient.Status", { required: true })}
              />
            </div>
            <div className="inputAlign">
              <label htmlFor="condition">Condition</label>
              <input
                id="condition"
                type="text"
                placeholder=""
                {...register("patient.Condition", { required: true })}
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
                  {...register("patient.Patientinfo.Age", { required: true })}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  {...register("patient.Patientinfo.Gender", {
                    required: true,
                  })}
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
                  {...register("patient.Patientinfo.RegisterDate", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <div className="rightInfo">
              <div className="inputAlign">
                <label htmlFor="branch">Branch</label>
                <select
                  {...register("patient.Patientinfo.Branch", {
                    required: true,
                  })}
                >
                  <option value="Aswan Sail">Aswan Sail</option>
                </select>
              </div>
              <div className="inputAlign">
                <label htmlFor="nurse">Nurse</label>
                <input
                  type="text"
                  placeholder=""
                  {...register("patient.Patientinfo.Nurse", { required: true })}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="doctor">Doctor</label>
                <input
                  type="text"
                  placeholder=""
                  {...register("patient.Patientinfo.Doctor", {
                    required: true,
                  })}
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
                  {...register("patient.MedicalConditon.Disease", {
                    required: true,
                  })}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="history">History</label>
                <input
                  type="datetime"
                  placeholder=""
                  {...register("patient.MedicalConditon.History", {
                    required: true,
                  })}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="otherDiseases">Other Diseases</label>
                <input
                  type="text"
                  placeholder=""
                  {...register("patient.MedicalConditon.OtherDiseases", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <div className="rightInfo">
              <div className="inputAlign">
                <label htmlFor="diabeyic">Diabeyic</label>
                <input
                  type="checkbox"
                  placeholder=""
                  {...register("patient.MedicalConditon.Diabeyic", {})}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="smoker">Smoker</label>
                <input
                  type="checkbox"
                  placeholder=""
                  {...register("patient.MedicalConditon.Smoker", {})}
                />
              </div>
            </div>
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
      width: 40%;
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
      width: 40%;
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
  }
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

  @media screen and (min-width: 720px) and (max-width: 1080px) {
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
  }
`;
