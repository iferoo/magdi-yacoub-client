import React from "react";
import styled from "styled-components";

import { IoMdArrowDropright } from "react-icons/io";
import { useForm } from "react-hook-form";

export default function EditPatient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="patientProfile">
          <img src="/assets/ProfilePic.JPG" alt="patient" />
          <div className="profile">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              {...register("Name", { required: true })}
            />
            <label htmlFor="room">Room</label>
            <input
              id="room"
              type="text"
              placeholder="Room"
              {...register("Room", { required: true })}
            />
            <label htmlFor="status">Status</label>
            <input
              id="status"
              type="text"
              placeholder="Status"
              {...register("Status", { required: true })}
            />
            <label htmlFor="condition">Condition</label>
            <input
              id="condition"
              type="text"
              placeholder="Condition"
              {...register("Condition", { required: true })}
            />
          </div>
        </div>
        <div className="line"></div>
        <div className="patientInfo">
          <h3 className="name">Patient info</h3>
          <div className="Info">
            <div className="leftInfo">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                placeholder="Age"
                {...register("Age", { required: true })}
              />
              <label htmlFor="gender">Gender</label>
              <select id="gender" {...register("Gender", { required: true })}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label htmlFor="name">Register Date</label>
              <input
                type="datetime"
                placeholder="Register Date"
                {...register("Register Date", { required: true })}
              />
            </div>
            <div className="rightInfo">
              <select {...register("Branch", { required: true })}>
                <option value="Aswan Sail">Aswan Sail</option>
              </select>
              <input
                type="text"
                placeholder="Nurse"
                {...register("Nurse", { required: true })}
              />
              <input
                type="text"
                placeholder="Doctor"
                {...register("Doctor", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="patientInfo">
          <h3 className="name">Medical Conditon</h3>
          <div className="Info">
            <div className="leftInfo">
              <input
                type="text"
                placeholder="Disease"
                {...register("Disease", { required: true })}
              />
              <input
                type="datetime"
                placeholder="History"
                {...register("History", {})}
              />
              <input
                type="text"
                placeholder="Other Diseases"
                {...register("Other Diseases", {})}
              />
            </div>
            <div className="rightInfo">
              <input
                type="checkbox"
                placeholder="Diabeyic"
                {...register("Diabeyic", { required: true })}
              />
              <input
                type="checkbox"
                placeholder="Smoker"
                {...register("Smoker", {})}
              />
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
        <div className="submit">
          <input type="submit" value="Save" />
        </div>
      </form>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
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
