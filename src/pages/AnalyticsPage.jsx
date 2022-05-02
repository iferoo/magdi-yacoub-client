import React from "react";
import styled from "styled-components";

import { PieChart, Pie, Cell } from "recharts";

const rooms = [
  { name: "Closed", value: 101 },
  { name: "Occupied", value: 635 },
  { name: "Free", value: 262 },
];

const patients = [
  { name: "Dangerous", value: 95 },
  { name: "Under Control", value: 390 },
  { name: "Stable", value: 510 },
];
const RCOLORS = ["#ff2828", "#0088FE", "#00C49F"];
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

export default function AnalyticsPage() {
  return (
    <Section>
      <div className="container">
        <div className="top">
          <h2>Analytics</h2>
        </div>
        <div className="date">
          <div className="today active">Today</div>
          <div className="week">This week</div>
          <div className="month">This month</div>
          <div className="year">This year</div>
        </div>
        <div className="down">
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
              <div>
                <span className={rooms[2].name}></span>
                <p>{rooms[2].name}</p>
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
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;

  .container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 5px #888888;
    padding: 2rem;
    h2 {
      font-weight: 400;
    }
  }
  .top {
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #888888;
  }

  .date {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    .today,
    .week,
    .month,
    .year {
      border: 1px black solid;
      border-radius: 3rem;
      padding: 0.5rem 2rem;
    }
    .active {
      color: white;
      background-color: black;
    }
  }
  .down {
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
          .Closed,
          .Dangerous {
            background-color: #ff2828;
          }
          .Occupied {
            background-color: #0088fe;
          }
          .Free,
          .Stable {
            background-color: #00c49f;
          }
          .Under {
            background-color: #a1df3f;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .down {
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }
  }
`;