import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import styled from "styled-components";

export default function AnalyticsPage() {
  const { pathname } = useLocation();

  const [activeLink, setActiveLink] = useState(1);

  useEffect(() => {
    const handleActiveLink = () => {
      pathname === "/analytics/today"
        ? setActiveLink(1)
        : pathname === "/analytics/week"
        ? setActiveLink(2)
        : pathname === "/analytics/month"
        ? setActiveLink(3)
        : setActiveLink(4);
    };

    handleActiveLink();
  }, [pathname]);

  return (
    <Section>
      <div className="container">
        <div className="top">
          <h2>Analytics</h2>
        </div>
        <div className="date">
          <Link
            to="today"
            className={`today ${activeLink === 1 && "active"}`}
            onClick={() => setActiveLink(1)}
          >
            Today
          </Link>
          <Link
            to="week"
            className={`week ${activeLink === 2 && "active"}`}
            onClick={() => setActiveLink(2)}
          >
            This week
          </Link>
          <Link
            to="month"
            className={`month ${activeLink === 3 && "active"}`}
            onClick={() => setActiveLink(3)}
          >
            This month
          </Link>
          <Link
            to="year"
            className={`year ${activeLink === 4 && "active"}`}
            onClick={() => setActiveLink(4)}
          >
            This year
          </Link>
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
    a {
      text-decoration: none;
      color: #000;
      border: 1px solid black;
      border-radius: 1rem;
      padding: 0.5rem;
    }
    .active {
      color: white;
      background-color: black;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
  }
`;
