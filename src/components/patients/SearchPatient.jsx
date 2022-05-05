import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";

// import { patieents } from "../../util/patientsData";

import axios from "axios";

import { patientsUrl } from "../../util/url";

import { succNotify, errNotify } from "../../util/Notification";

export default function SearchPatient() {
  const [patients, setPatients] = useState([]);

  const [patientSearch, setPatientSearch] = useState([]);

  const [filteredPatients, setFilterPatients] = useState(patients);

  const [activePatient, setActivePatient] = useState(0);

  const patientIndex = patients.findIndex(
    (patient) => patient.id === activePatient
  );

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
      .put(patientsUrl + `/${activePatient}`, {
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
        const Patients = [...patients];
        Patients[patientIndex] = data.patient;
        setPatients(Patients);
        succNotify("Edit Patient Successfull");
      })
      .catch(function (error) {
        console.log(error);
        errNotify("Error !");
      });
  };
  // console.log(errors);

  const handleRemove = () => {
    axios
      .delete(patientsUrl + `/${activePatient}`)
      .then((response) => {
        console.log(response);
        const Patients = [...patients];
        Patients.splice(patientIndex, 1);

        setPatients(Patients);

        setValue("patient", {
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
        errNotify("Patient Removed");
      })
      .catch((error) => {
        console.log(error);
        errNotify("Error on Removed");
      });
  };

  const handleSearch = (event) => {
    const patientName = event.target.value.toLocaleLowerCase();
    setPatientSearch(patientName);
  };

  useEffect(() => {
    axios
      .get(patientsUrl)
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const patientsFilterd = patients.filter((patient) => {
      return patient.Name.toLocaleLowerCase().includes(patientSearch);
    });
    setFilterPatients(patientsFilterd);
  }, [patients, patientSearch]);

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
              autoComplete="off"
              onChange={handleSearch}
            />
          </div>
          <label htmlFor="patient">Sort patient by Patient ID</label>
        </div>
        <div className="result">
          {filteredPatients.map((patient) => (
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
                  setValue("patient", {
                    id: patient.id,
                    Name: patient.Name,
                    MedicalID: patient.MedicalID,
                    Room: patient.Room,
                    Status: patient.Status,
                    Condition: patient.Condition,
                    Patientinfo: {
                      Age: patient.Patientinfo.Age,
                      Gender: patient.Patientinfo.Gender,
                      RegisterDate: patient.Patientinfo.RegisterDate,
                      Branch: patient.Patientinfo.Branch,
                      Nurse: patient.Patientinfo.Nurse,
                      Doctor: patient.Patientinfo.Doctor,
                    },
                    MedicalConditon: {
                      Disease: patient.MedicalConditon.Disease,
                      History: patient.MedicalConditon.History,
                      OtherDiseases: patient.MedicalConditon.OtherDiseases,
                      Diabeyic: patient.MedicalConditon.Diabeyic,
                      Smoker: patient.MedicalConditon.Smoker,
                    },
                  });
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
                  {...register("patient.Name", {})}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="room">Room</label>
                <input
                  id="room"
                  type="text"
                  placeholder=""
                  {...register("patient.Room", {})}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="status">Status</label>
                <input
                  id="status"
                  type="text"
                  placeholder=""
                  {...register("patient.Status", {})}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="condition">Condition</label>
                <input
                  id="condition"
                  type="text"
                  placeholder=""
                  {...register("patient.Condition", {})}
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
                    {...register("patient.Patientinfo.Age", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    {...register("patient.Patientinfo.Gender", {})}
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
                    {...register("patient.Patientinfo.RegisterDate", {})}
                  />
                </div>
              </div>
              <div className="rightInfo">
                <div className="inputAlign">
                  <label htmlFor="branch">Branch</label>
                  <select {...register("patient.Patientinfo.Branch", {})}>
                    <option value="Aswan Sail">Aswan Sail</option>
                  </select>
                </div>
                <div className="inputAlign">
                  <label htmlFor="nurse">Nurse</label>
                  <input
                    type="text"
                    placeholder=""
                    {...register("patient.Patientinfo.Nurse", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="doctor">Doctor</label>
                  <input
                    type="text"
                    placeholder=""
                    {...register("patient.Patientinfo.Doctor", {})}
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
                    {...register("patient.MedicalConditon.Disease", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="history">History</label>
                  <input
                    type="datetime"
                    placeholder=""
                    {...register("patient.MedicalConditon.History", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="otherDiseases">Other Diseases</label>
                  <input
                    type="text"
                    placeholder=""
                    {...register("patient.MedicalConditon.OtherDiseases", {})}
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
          </div>
        </form>
        <div className="submit">
          <button id="remove" className="remove" onClick={() => handleRemove()}>
            Remove
          </button>
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
          color: var(--white);
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
          width: 10px;
          height: 10px;
          background-color: blue;
          border-radius: 50%;
        }
        .nonActive {
          margin: 0.4rem;
          width: 10px;
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
      padding: 0rem 3rem;
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
      flex-direction: row;
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
      .submit {
        input,
        button {
          border-radius: 0.5rem;
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
