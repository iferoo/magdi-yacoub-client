import axios from "axios";
import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { staff } from "../../util/staffData";

import { doctorsUrl, nursesUrl } from "../../util/url";

export default function ViewStaff() {
  const [doctorsFilterd, setDoctorsFilterd] = useState({
    onDuty: [],
    nextShift: [],
    vacation: [],
  });

  const [nursesFiltered, setNursesFiltered] = useState({
    onDuty: [],
    nextShift: [],
    vacation: [],
  });

  useEffect(() => {
    axios
      .get(doctorsUrl)
      .then((response) => {
        const doctors = response.data.data;
        setDoctorsFilterd({
          onDuty: doctors.filter((doctor) => doctor.Status === "onDuty"),
          nextShift: doctors.filter((doctor) => doctor.Status === "nextShift"),
          vacation: doctors.filter((doctor) => doctor.Status === "vacation"),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(nursesUrl)
      .then((response) => {
        // console.log(response.data);
        const nurses = response.data.data;
        setNursesFiltered({
          onDuty: nurses.filter((Nurse) => Nurse.Status === "onDuty"),
          nextShift: nurses.filter((Nurse) => Nurse.Status === "nextShift"),
          vacation: nurses.filter((Nurse) => Nurse.Status === "vacation"),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Section>
      <div>
        <div className="staffType">
          <h3>Doctors</h3>
        </div>
        <div className="staffInfo">
          <table>
            <thead>
              <tr>
                <th className="duty">On duty</th>
              </tr>
            </thead>
            <tbody>
              {doctorsFilterd.onDuty.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className="shift">Next Shift</th>
              </tr>
            </thead>
            <tbody>
              {doctorsFilterd.nextShift.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className="vacation">Vacation</th>
              </tr>
            </thead>
            <tbody>
              {doctorsFilterd.vacation.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="staffType">
          <h3>Nurses</h3>
        </div>
        <div className="staffInfo">
          <table>
            <thead>
              <tr>
                <th className="duty">On duty</th>
              </tr>
            </thead>
            <tbody>
              {nursesFiltered.onDuty.map((nurse) => (
                <tr key={nurse.id}>
                  <td>{nurse.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className="shift">Next Shift</th>
              </tr>
            </thead>
            <tbody>
              {nursesFiltered.nextShift.map((nurse) => (
                <tr key={nurse.id}>
                  <td>{nurse.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className="vacation">Vacation</th>
              </tr>
            </thead>
            <tbody>
              {nursesFiltered.vacation.map((nurse) => (
                <tr key={nurse.id}>
                  <td>{nurse.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .staffType {
    margin-bottom: 1rem;
    h3 {
      font-size: 1.5rem;
      font-weight: 200;
    }
  }
  .staffInfo {
    display: flex;
    justify-content: space-between;
    table {
      border-collapse: collapse;
      width: 30%;
      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
    }
    .duty {
      background-color: green;
      color: white;
    }
    .shift {
      background-color: yellowgreen;
      color: white;
    }
    .vacation {
      background-color: burlywood;
      color: white;
    }
  }

  .line {
    width: 80%;
    margin: 0 auto;
    border: 0.3px solid #b9b9b9;
    border-radius: 1rem;
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
  }
`;
