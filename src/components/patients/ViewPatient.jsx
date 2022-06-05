import React, { useEffect, useState } from "react";
import {
  bedUrl,
  doctorsUrl,
  nursesUrl,
  patientsUrl,
  roomUrl,
  url,
} from "../../util/url";
import { errNotify, succNotify } from "../../util/Notification";

import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import axios from "axios";
import styled from "styled-components";
import { useForm } from "react-hook-form";

// import { patieents } from "../../util/patientsData";

export default function ViewPatient() {
  const [rooms, setRooms] = useState([]);
  const [defaultBeds, setDefaultBeds] = useState([]);
  const [refreshBeds, setRefreshBeds] = useState(true);
  const [beds, setBeds] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [nurses, setNurses] = useState([]);
  const [refreshUrl, setRefreshUrl] = useState(true);

  const [patients, setPatients] = useState([]);

  const [patientSearch, setPatientSearch] = useState([]);

  const [filteredPatients, setFilterPatients] = useState(patients);

  const [activePatient, setActivePatient] = useState(0);

  const patientIndex = patients.findIndex(
    (patient) => patient.id === activePatient
  );

  useEffect(() => {
    axios
      .get(patientsUrl)
      .then((response) => {
        console.log(response.data);
        setPatients(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(roomUrl)
      .then((response) => {
        setRooms(response.data.data);
      })
      .catch((error) => {});

    axios
      .get(doctorsUrl)
      .then((response) => {
        setDoctors(response.data.data);
      })
      .catch((error) => {});
    axios
      .get(nursesUrl)
      .then((response) => {
        setNurses(response.data.data);
      })
      .catch((error) => {});
    axios
      .get(bedUrl)
      .then((response) => {
        setDefaultBeds(response.data.data);
        setBeds(response.data.data);
      })
      .catch((error) => {});
  }, [refreshUrl]);

  useEffect(() => {
    // console.log(rooms);
    console.log(beds);
    // console.log(doctors);
    // console.log(nurses);
    // console.log(patients);
  }, [rooms, beds, doctors, nurses, patients]);

  useEffect(() => {
    setBeds(defaultBeds)
  }, [refreshBeds]);
  
  useEffect(() => {
    const patientsFilterd = patients.filter((patient) => {
      return patient.Name.toLocaleLowerCase().includes(patientSearch);
    });
    setFilterPatients(patientsFilterd);
  }, [patients, patientSearch]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      patient: {
        id: null,
        Img: null,
        Name: "",
        MedicalID: null,
        Room: "",
        Bed: "",
        Status: "",
        Condition: "",
        Age: null,
        Gender: "",
        RegisterDate: "",
        Branch: "",
        Nurse: "",
        Doctor: "",
        Disease: null,
        History: "",
        OtherDiseases: "",
        Diabeyic: false,
        Smoker: false,
      },
    },
  });

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .put(patientsUrl + `${activePatient}`, {
        Name: data.patient.Name,
        Status: data.patient.Status,
        Condition: data.patient.Condition,
        Age: data.patient.Age,
        Gender: data.patient.Gender,
        RegisterDate: data.patient.RegisterDate,
        Branch: data.patient.Branch,
        Disease: data.patient.Disease,
        History: data.patient.History,
        OtherDiseases: data.patient.OtherDiseases,
        Diabeyic: data.patient.Diabeyic,
        Smoker: data.patient.Smoker,
        Bed: data.patient.Bed,
        Nurse: data.patient.Nurse,
        Doctor: data.patient.Doctor,
      })
      .then(function (response) {
        // console.log(response);
        const bed = beds.find((bed) => bed.id == response.data.data.Bed);
        // console.log(bed);
        const room = rooms.find((room) => room.id == bed.RoomID);
        // console.log(room);

        const doctor = doctors.find(
          (doctor) => doctor.id == response.data.data.Doctor
        );
        const nurse = nurses.find(
          (nurse) => nurse.id == response.data.data.Nurse
        );
        const Patients = [...patients];

        Patients[patientIndex] = {
          id: response.data.data.id,
          Name: data.patient.Name,
          Status: data.patient.Status,
          Condition: data.patient.Condition,
          Age: data.patient.Age,
          Gender: data.patient.Gender,
          RegisterDate: data.patient.RegisterDate,
          Branch: data.patient.Branch,
          Disease: data.patient.Disease,
          History: data.patient.History,
          OtherDiseases: data.patient.OtherDiseases,
          Diabeyic: data.patient.Diabeyic,
          Smoker: data.patient.Smoker,
          Bed: {
            id: data.patient.Bed,
            RoomID: {
              id: room.id,
              Name: room.Name,
            },
          },
          Nurse: {
            id: nurse.id,
            Name: nurse.Name,
            Age: nurse.Age,
            Gender: nurse.Gender,
            Email: nurse.Email,
            Status: nurse.Status,
          },
          Doctor: {
            id: doctor.id,
            Name: doctor.Name,
            Age: doctor.Age,
            Gender: doctor.Gender,
            Email: doctor.Email,
            Status: doctor.Status,
          },
        };

        setValue("patient", {
          id: response.data.data.id,
          Img: response.data.data.Img,
          Name: data.patient.Name,
          MedicalID: null,
          Room: room.id,
          Bed: data.patient.Bed,
          Status: data.patient.Status,
          Condition: data.patient.Condition,
          Age: data.patient.Age,
          Gender: data.patient.Gender,
          RegisterDate: data.patient.RegisterDate,
          Branch: data.patient.Branch,
          Nurse: nurse.id,
          Doctor: doctor.id,
          Disease: data.patient.Disease,
          History: data.patient.History,
          OtherDiseases: data.patient.OtherDiseases,
          Diabeyic: data.patient.Diabeyic,
          Smoker: data.patient.Smoker,
        });
        // console.log(Patients);
        setPatients(Patients);
        setRefreshUrl(!refreshUrl);
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
      .delete(patientsUrl + `${activePatient}`)
      .then((response) => {
        // console.log(response);
        const Patients = [...patients];
        Patients.splice(patientIndex, 1);

        setPatients(Patients);

        setValue("patient", {
          id: null,
          Name: "",
          MedicalID: null,
          Room: "",
          Bed: "",
          Status: "",
          Condition: "",
          Age: null,
          Gender: "",
          RegisterDate: "",
          Branch: "",
          Nurse: "",
          Doctor: "",
          Disease: null,
          History: "",
          OtherDiseases: "",
          Diabeyic: false,
          Smoker: false,
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
                  setBeds(defaultBeds);
                  // console.log(beds)
                  // console.log(patient);
                  setActivePatient(patient.id);
                  setValue("patient", {
                    id: patient.id,
                    Img: patient.Img,
                    Name: patient.Name,
                    MedicalID: patient.id,
                    Room: patient.Bed.RoomID.id,
                    Bed: patient.Bed.id,
                    Status: patient.Status,
                    Condition: patient.Condition,
                    Age: patient.Age,
                    Gender: patient.Gender,
                    RegisterDate: patient.RegisterDate,
                    Branch: patient.Branch,
                    Nurse: patient.Nurse.id,
                    Doctor: patient.Doctor.id,
                    Disease: patient.Disease,
                    History: patient.History,
                    OtherDiseases: patient.OtherDiseases,
                    Diabeyic: patient.Diabeyic,
                    Smoker: patient.Smoker,
                  });
                  console.log(patient.Img);
                }}
              >
                <h3>{patient.Name}</h3>
                <h6>Patient ID: {patient.id}</h6>
                {patient.Bed.id != null ? (
                  <p>Room: {patient.Bed.RoomID.Name}</p>
                ) : (
                  <p>Room: undefine</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="patientProfile">
            <img
              src={`${
                getValues("patient.Img") != null
                  ? url + getValues("patient.Img")
                  : "assets/Patient.png"
              }`}
              alt="patient"
            />
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
                <select
                  id="room"
                  type="text"
                  placeholder=""
                  // disabled={true}
                  onClick={(event) => {
                    // setBeds(
                    //   rooms.find((room) => room.id == event.target.value).Beds
                    // );
                    setRefreshBeds(!refreshBeds)
                    
                  }}
                  {...register("patient.Room", {
                    required: true,
                  })}
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
                <select
                  id="bed"
                  type="text"
                  placeholder=""
                  {...register("patient.Bed", { required: true })}
                >
                  <option value="none" style={{ display: "none" }}></option>
                  {beds.map((bed) => {
                    return (
                      <option
                        key={bed.id}
                        value={bed.id}
                        hidden={bed.RoomID != getValues("patient.Room")}
                        disabled={
                          bed.Patient != null &&
                          bed.Patient.id != getValues("patient.id")
                        }
                      >
                        {bed.id}
                      </option>
                    );
                  })}
                </select>
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
                <label
                  className={getValues("patient.Condition")}
                  htmlFor="condition"
                >
                  Condition
                </label>
                <select
                  id="condition"
                  type="text"
                  placeholder=""
                  {...register("patient.Condition", {})}
                >
                  <option value="Stable">Stable</option>
                  <option value="Dangerous">Dangerous</option>
                  <option value="UnderControl">Under Control</option>
                </select>
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
                    {...register("patient.Age", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" {...register("patient.Gender", {})}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="inputAlign">
                  <label htmlFor="name">Register Date</label>
                  <input
                    type="date"
                    placeholder=""
                    {...register("patient.RegisterDate", {})}
                  />
                </div>
              </div>
              <div className="rightInfo">
                <div className="inputAlign">
                  <label htmlFor="branch">Branch</label>
                  <select {...register("patient.Branch", {})}>
                    <option value="Aswan Sail">Aswan Sail</option>
                  </select>
                </div>
                <div className="inputAlign">
                  <label htmlFor="nurse">Nurse</label>
                  <select
                    type="text"
                    placeholder=""
                    {...register("patient.Nurse", {})}
                  >
                    <option value="none" style={{ display: "none" }}></option>
                    {nurses.map((nurse) => {
                      return (
                        <option key={nurse.id} value={nurse.id}>
                          {nurse.Name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="inputAlign">
                  <label htmlFor="doctor">Doctor</label>
                  <select
                    type="text"
                    placeholder=""
                    {...register("patient.Doctor", {})}
                  >
                    <option value="none" style={{ display: "none" }}></option>
                    {doctors.map((doctor) => {
                      return (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.Name}
                        </option>
                      );
                    })}
                  </select>
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
                    {...register("patient.Disease", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="history">History</label>
                  <input
                    type="date"
                    placeholder=""
                    {...register("patient.History", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="otherDiseases">Other Diseases</label>
                  <input
                    type="text"
                    placeholder=""
                    {...register("patient.OtherDiseases", {})}
                  />
                </div>
              </div>
              <div className="rightInfo">
                <div className="inputAlign">
                  <label htmlFor="diabeyic">Diabeyic</label>
                  <input
                    type="checkbox"
                    placeholder=""
                    {...register("patient.Diabeyic", {})}
                  />
                </div>
                <div className="inputAlign">
                  <label htmlFor="smoker">Smoker</label>
                  <input
                    type="checkbox"
                    placeholder=""
                    {...register("patient.Smoker", {})}
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
          width: -webkit-fill-available;
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
        width: 25vh;
        height: 25vh;
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
        margin: 0.25rem auto;
        cursor: pointer;
        color: #fff;
        text-align: center;
        background-color: #0d6efd;
        border-color: #0d6efd;
        font-size: 1rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        border: none;
        border-radius: 0.5rem;
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
      gap: 1rem;

      .Stable {
        color: green;
      }
      .Dangerous {
        color: red;
      }
      .UnderControl {
        color: #00c49f;
      }
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
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    flex-direction: column;
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
    .left {
      .result {
        height: 50vh;
      }
    }

    .right {
      width: 100%;
      .patientProfile {
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        gap: 2rem;
        img {
          width: 30vh;
          height: 30vh;
        }
        .profile {
          width: 100%;
        }
      }
      .patientInfo {
        padding: 1rem;

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
      /* .submit {
        input,
        button {
          border-radius: 0.5rem !important; 
        }
      } */
      .other {
        padding: 1rem;
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
