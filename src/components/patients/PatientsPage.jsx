import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import styled from "styled-components";

export default function PatientsPage() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(1);

  useEffect(() => {
    const handleActiveLink = () => {
      pathname === "/patients/add" ? setActiveLink(2) : setActiveLink(1);
    };

    handleActiveLink();
  }, [pathname]);

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
              View
            </Link>
            <Link
              to="add"
              className={`${activeLink === 2 && "active"}`}
              onClick={() => setActiveLink(2)}
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
    .down {
      padding: 1rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    padding: 1rem;
    .container {
      .down {
        padding: 1rem 0 0 0;
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
  }
`;
