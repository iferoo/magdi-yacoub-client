import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import { succNotify, errNotify } from "../../util/Notification";

import { doctorsUrl, nursesUrl } from "../../util/url";

import axios from "axios";

export default function UpdateStaff() {
  const [doctors, setDoctors] = useState([]);
  const [nurses, setNurses] = useState([]);

  const [refreshUrl, setRefreshUrl] = useState(true);

  const [selectedField, setSelectedField] = useState("");

  const [activeStaffID, setActiveStaffID] = useState(0);

  useEffect(() => {
    axios
      .get(doctorsUrl)
      .then((response) => {
        console.log(response.data.data);
        setDoctors(response.data.data);
      })
      .catch((error) => {});

    axios
      .get(nursesUrl)
      .then((response) => {
        setNurses(response.data.data);
      })
      .catch((error) => {});
  }, [refreshUrl]);

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      staff: {
        Type: null,
        id: null,
        Name: null,
        Age: null,
        Gender: "",
        Status: "",
      },
    },
  });

  const onSubmit = (data) => {
    selectedField === "Doctor"
      ? axios
          .put(doctorsUrl + `${activeStaffID}`, {
            Name: data.staff.Name,
            Age: data.staff.Age,
            Gender: data.staff.Gender,
            Status: data.staff.Status,
          })
          .then(function (response) {
            // console.log(response);
            setValue("staff", {
              Type: "",
              id: "",
              Name: "",
              Age: null,
              Gender: "",
              Status: "",
            });
            setRefreshUrl(!refreshUrl);
            succNotify("Doctor Add Successfully");
          })
          .catch(function (error) {
            console.log(error);
            errNotify("error!");
          })
      : selectedField === "Nurse"
      ? axios
          .put(nursesUrl + `${activeStaffID}`, {
            Name: data.staff.Name,
            Age: data.staff.Age,
            Gender: data.staff.Gender,
            Status: data.staff.Status,
          })
          .then(function (response) {
            // console.log(response);
            setValue("staff", {
              Type: "",
              id: "",
              Name: "",
              Age: null,
              Gender: "",
              Status: "",
            });
            setRefreshUrl(!refreshUrl);
            succNotify("Nurse Add Successfully");
          })
          .catch(function (error) {
            // console.log(error);
            errNotify("error!");
          })
      : console.log("error");
  };
  // console.log(errors);

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profile">
          <div className="inputAlign">
            <label htmlFor="type">Type</label>
            <select
              onClick={(event) => {
                setSelectedField(event.target.value);
                setValue("staff", {
                  id: "",
                  Name: "",
                  Age: null,
                  Gender: "",
                  Status: "",
                });
              }}
              {...register("staff.Type", {})}
            >
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
            </select>
          </div>
          <div className="inputAlign">
            <label htmlFor="id">id</label>
            <select
              onClick={(event) => {
                selectedField === "Doctor"
                  ? setValue("staff", {
                      Name: doctors.find(
                        (doctor) => doctor.id == event.target.value
                      ).Name,
                      Age: doctors.find(
                        (doctor) => doctor.id == event.target.value
                      ).Age,
                      Gender: doctors.find(
                        (doctor) => doctor.id == event.target.value
                      ).Gender,
                      Status: doctors.find(
                        (doctor) => doctor.id == event.target.value
                      ).Status,
                    })
                  : setValue("staff", {
                      Name: nurses.find(
                        (nurse) => nurse.id == event.target.value
                      ).Name,
                      Age: nurses.find(
                        (nurse) => nurse.id == event.target.value
                      ).Age,
                      Gender: nurses.find(
                        (nurse) => nurse.id == event.target.value
                      ).Gender,
                      Status: nurses.find(
                        (nurse) => nurse.id == event.target.value
                      ).Status,
                    });

                setActiveStaffID(event.target.value);
              }}
              {...register("staff.id", {})}
            >
              <option value="none" style={{ display: "none" }}></option>
              {selectedField === "Doctor" ? (
                doctors.map((doctor) => (
                  <option value={doctor.id} key={doctor.id}>
                    {doctor.id}
                  </option>
                ))
              ) : selectedField === "Nurse" ? (
                nurses.map((nurse) => (
                  <option value={nurse.id} key={nurse.id}>
                    {nurse.id}
                  </option>
                ))
              ) : (
                <option value="none"></option>
              )}
            </select>
          </div>
          <div className="inputAlign">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder=""
              {...register("staff.Name", { required: true })}
            />
          </div>
          <div className="inputAlign">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              placeholder=""
              {...register("staff.Age", { required: true })}
            />
          </div>
          <div className="inputAlign">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              {...register("staff.Gender", {
                required: true,
                disabled: true,
              })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="inputAlign">
            <label htmlFor="status">Status</label>
            <select
              {...register("staff.Status", {
                required: true,
              })}
            >
              <option value="onDuty">On Duty</option>
              <option value="nextShift">Next Shift</option>
              <option value="vacation">Vacation</option>
            </select>
          </div>
        </div>
        <div className="line"></div>
        <div className="submit">
          <input type="submit" value="Update" />
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
