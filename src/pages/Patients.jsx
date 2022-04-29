import React, { useState } from "react";
import styled from "styled-components";

import SearchPatient from '../components/patients/SearchPatient'
import EditPatient from "../components/patients/EditPatient";
import AddPatient from "../components/patients/AddPatient";

export default function Patients() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Section>
      <div className="container">
        <div className="top">
          <h2>Patients</h2>
          <div>
            <div className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>Search</div>
            <div className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>Edit</div>
            <div className={activeTab === 3 ? "active" : ""} onClick={() => setActiveTab(3)}>Add</div>
          </div>
        </div>
        <div className="down">
          {
            activeTab === 1 ? <SearchPatient/>
            :activeTab === 2 ? <EditPatient/>
            :<AddPatient/>
          }
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  
  .container{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 5px #888888;
    padding: 1rem;
    h2{
      font-weight: 400;
    }
  }
  .top{
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #888888;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: space-between;
    div{
      cursor: pointer;
      display: flex;
      gap: 1rem;
      
      div{
        background-color: #fff;
        color: #000;
        border: 1px solid black;
        border-radius: 1rem;
        padding: 0.5rem;
        /* :hover{
          background-color: #000;
          color: #fff;
        } */
      }
      .active{
          background-color: #000;
          color: #fff;
      }
    }
  }
 
  @media screen and (min-width: 280px) and (max-width: 1080px){
    margin-left: 0;
    .down{
      flex-direction: column;
      gap: 2rem;
      .left{
        width: 100%;
      }
      .right{
        width: 100%;
      }
    }
  }
`;
