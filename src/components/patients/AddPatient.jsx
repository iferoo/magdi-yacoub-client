import React from "react";
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { toast } from 'react-toastify';


export default function AddPatient() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const sucnotify = () => toast.success("Patient add success", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000
  });;

  const errnotify = () => toast.error("there is an error", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1000 
  });;
  const onSubmit = data => {

    axios.post('http://localhost:3004/patients', {
      Name: data.Name,
      Room: 'Momen',
      Status: "under medical supervision",
      Condition: "ide",
      Patientinfo: [
        {
          Age: 23,
          Gender: "Male",
          RegisterDate: "Male",
          Branch: "Male",
          Nurse: "Male",
          Doctor: "Male"
        }
      ],
      MedicalConditon: [
        {
          Disease: 23,
          History: "Male",
          OtherDiseases: "Male",
          Diabeyic: "Male",
          Smoker: "Male"
        }
      ]
    })
      .then(function (response) {
        console.log(response);
        sucnotify()
      })
      .catch(function (error) {
        console.log(error);
        errnotify()
      });

  };
  console.log(errors);

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="patientProfile">
          <img src="/assets/ProfilePic.JPG" alt="patient" />
          <div className="profile">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Name" {...register("Name", {})} />
            <label htmlFor="room">Room</label>
            <input id="room" type="text" placeholder="Room" {...register("Room", {})} />
            <label htmlFor="status">Status</label>
            <input id="status" type="text" placeholder="Status" {...register("Status", {})} />
            <label htmlFor="condition">Condition</label>
            <input id="condition" type="text" placeholder="Condition" {...register("Condition", {})} />
          </div>
        </div>
        <div className="line"></div>
        <div className="patientInfo">
          <h3 className="name">Patient info</h3>
          <div className="Info">
            <div className="leftInfo">
              <label htmlFor="age">Age</label>
              <input id="age" type="number" placeholder="Age" {...register("Age", {})} />
              <label htmlFor="gender">Gender</label>
              <select id="gender" {...register("Gender", {})}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label htmlFor="name">Register Date</label>
              <input type="datetime" placeholder="Register Date" {...register("Register Date", {})} />
            </div>
            <div className="rightInfo">
              <label htmlFor="branch">Branch</label>
              <select {...register("Branch", {})}>
                <option value="Aswan Sail">Aswan Sail</option>
              </select>
              <label htmlFor="nurse">Nurse</label>
              <input type="text" placeholder="Nurse" {...register("Nurse", {})} />
              <label htmlFor="doctor">Doctor</label>
              <input type="text" placeholder="Doctor" {...register("Doctor", {})} />
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="patientInfo">
          <h3 className="name">Medical Conditon</h3>
          <div className="Info">
            <div className="leftInfo">
              <label htmlFor="disease">Disease</label>
              <input type="text" placeholder="Disease" {...register("Disease", {})} />
              <label htmlFor="history">History</label>
              <input type="datetime" placeholder="History" {...register("History", {})} />
              <label htmlFor="otherDiseases">Other Diseases</label>
              <input type="text" placeholder="Other Diseases" {...register("Other Diseases", {})} />
            </div>
            <div className="rightInfo">
              <label htmlFor="diabeyic">Diabeyic</label>
              <input type="checkbox" placeholder="Diabeyic" {...register("Diabeyic", {})} />
              <label htmlFor="smoker">Smoker</label>
              <input type="checkbox" placeholder="Smoker" {...register("Smoker", {})} />
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="submit"><input type="submit" value="Add" /></div>
      </form>
    </Section>
  )
}

const Section = styled.section`
    width: 100%;
    box-shadow: 0px 0px 1px 1px #888888;
    .line{
      width: 80%;
      margin: 0 auto;
      border: 0.3px solid #b9b9b9;
      border-radius: 1rem;
    }    
    
    input, select{
          width: 80%;
          padding: 0.5rem;
          
          &::placeholder {
          }
          &:focus {
            outline: none;
            
            }
          }
    .patientProfile{
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        padding: 1rem;
        width: 30%;
        border-radius: 50%;
      }
      .profile{
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        .name{
          font-weight: 600;
        }
        .room{
          font-weight: 400;
          font-size: 0.8rem;
        }
        .status{
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
    .patientInfo{
      padding: 1rem 3rem;
      .Info{
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
      }
      .leftInfo{
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        p{
          font-size: 1rem;
          span{
            font-weight: bold;
          }
        }
      }
      .rightInfo{
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        p{
          font-size: 1rem;
          span{
            font-weight: bold;
          }
        }
      }
    }
    .submit{    
        width: 90%;
        margin: 0 auto;
        input {
        width: 100%;
        margin: 0.5rem auto ;
        cursor: pointer;
        color: #fff;
        text-align: center;
        background-color: #0d6efd;
        border-color: #0d6efd;
        font-size: 1rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        border: none;
        border-radius: 0.2rem;
        padding: 0.5rem;
        &:hover{
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
      }
    }
}
   
    @media screen and (min-width: 280px) and (max-width: 1080px){
      flex-direction: column;
      gap: 2rem;
      .left{
        width: 100%;
      }
      .right{
        width: 100%;
      }
  }

  @media screen and (min-width: 280px) and (max-width: 720px){
      flex-direction: column;
      gap: 2rem;
      .left{
        width: 100%;
      }
      .right{
        width: 100%;
           
        .patientInfo{
          padding: 1rem 3rem;
          .Info{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            justify-content: space-between;
            margin-top: 1rem;
            .leftInfo{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            p{
              font-size: 1rem;
              span{
                font-weight: bold;
              }
            }
          }
          .rightInfo{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            p{
              font-size: 1rem;
              span{
                font-weight: bold;
              }
            }
          } 
        }
      }
  .other{
    padding: 1rem 3rem;
    .info{
      display: flex;
      align-items: center;
        svg{
          font-size: 1.5rem;
        }
      p{
        font-weight: 600;
      }
      }
    }
   }
}
`
