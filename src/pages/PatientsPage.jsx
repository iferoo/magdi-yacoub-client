import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import styled from "styled-components";

export default function PatientsPage() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(1);
  const handleActiveLink = () => {
    pathname === "/patients/edit-patient"
      ? setActiveLink(2)
      : pathname === "/patients/add-patient"
      ? setActiveLink(3)
      : setActiveLink(1);
  };
  useEffect(() => {
    handleActiveLink();
  });
  return (
    <Section>
      <div className="container">
        <div className="top">
          <h2>Patients</h2>
          <div>
            <Link
              to=""
              className={`${activeLink === 1 && "active"}`}
              onClick={() => setActiveLink(1)}
            >
              Search
            </Link>
            <Link
              to="edit-patient"
              className={`${activeLink === 2 && "active"}`}
              onClick={() => setActiveLink(2)}
            >
              Edit
            </Link>
            <Link
              to="add-patient"
              className={`${activeLink === 3 && "active"}`}
              onClick={() => setActiveLink(3)}
            >
              Add
            </Link>
          </div>
        </div>
        <div className="down">
          <Outlet />
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
    padding: 1rem;
    h2 {
      font-weight: 400;
    }
    .top {
      padding: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid #888888;
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: space-between;
      div {
        display: flex;
        gap: 1rem;

        a {
          text-decoration: none;
          color: #000;
          border: 1px solid black;
          border-radius: 1rem;
          padding: 0.5rem;
        }
        .active {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .down {
      flex-direction: column;
      gap: 2rem;
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
      }
    }
  }
`;
