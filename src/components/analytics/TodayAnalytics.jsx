import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { PieChart, Pie, Cell } from "recharts";

import { bedUrl, patientsUrl } from "../../util/url";

import axios from "axios";

var rooms = [
  { name: "Full", value: 0 },
  { name: "Free", value: 0 },
];

var patients = [
  { name: "Dangerous", value: 0 },
  { name: "Under Control", value: 0 },
  { name: "Stable", value: 0 },
];

const RCOLORS = ["#888888", "green"];
const PCOLORS = ["#ff2828", "#a1df3f", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function TodayAnalytics() {
  const [refreshPage, setRefreshPage] = useState(false);

  useEffect(() => {
    axios
      .get(bedUrl)
      .then((response) => {
        const beds = response.data.data;
        const freeBeds = beds.filter((bed) => bed.Patient === null);
        const busyBeds = beds.filter((bed) => bed.Patient !== null);
        rooms = [
          { name: "Full", value: busyBeds.length },
          { name: "Free", value: freeBeds.length },
        ];
        setTimeout(() => setRefreshPage(true), 2000);
      })
      .catch((error) => {});
    axios
      .get(patientsUrl)
      .then((response) => {
        const patientsList = response.data.data;
        const stablePatients = patientsList.filter(
          (patient) => patient.Condition === "Stable"
        );
        const dangrousPatients = patientsList.filter(
          (patient) => patient.Condition === "Dangerous"
        );
        const underControlPatients = patientsList.filter(
          (patient) => patient.Condition === "UnderControl"
        );

        patients = [
          { name: "Dangerous", value: dangrousPatients.length },
          { name: "Under Control", value: underControlPatients.length },
          { name: "Stable", value: stablePatients.length },
        ];
        setTimeout(() => setRefreshPage(true), 2000);
      })
      .catch((error) => {});
  }, []);

  return (
    <Section>
      <div className="char">
        <div className="charTitle">
          <h1>Rooms</h1>
        </div>
        <div className="charGraph">
          <PieChart width={250} height={250}>
            <Pie
              data={rooms}
              cx={120}
              cy={120}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {rooms.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={RCOLORS[index % RCOLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="charInfo">
          <div>
            <span className={rooms[0].name}></span>
            <p>{rooms[0].name}</p>
          </div>
          <div>
            <span className={rooms[1].name}></span>
            <p>{rooms[1].name}</p>
          </div>
        </div>
      </div>
      <div className="char">
        <div className="charTitle">
          <h1>Patient</h1>
        </div>
        <div className="charGraph">
          <PieChart width={250} height={250}>
            <Pie
              data={patients}
              cx={120}
              cy={120}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {patients.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={PCOLORS[index % PCOLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="charInfo">
          <div>
            <span className={patients[0].name}></span>
            <p>{patients[0].name}</p>
          </div>
          <div>
            <span className={patients[1].name}></span>
            <p>{patients[1].name}</p>
          </div>
          <div>
            <span className={patients[2].name}></span>
            <p>{patients[2].name}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  .char {
    .charTitle {
      padding: 1rem 1rem;
      h1 {
        font-size: 2rem;
        font-weight: 500;
      }
    }

    .charInfo {
      padding: 1rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      div {
        display: flex;
        justify-content: space-around;
        span {
          width: 5%;
        }
        p {
          width: 80%;
        }
        .Dangerous {
          background-color: #ff2828;
        }
        .Stable {
          background-color: #00c49f;
        }
        .Under {
          background-color: #a1df3f;
        }
        .Free {
          background-color: green;
        }
        .Full {
          background-color: #888888;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
