import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import styled from "styled-components";

import { ImProfile } from "react-icons/im";
import { FaBed } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { BsFillChatTextFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  const { pathname } = useLocation();

  const [navbarState, setNavbarState] = useState(false);

  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  return (
    <>
      <Section>
        <div className="top">
          <div className="responsive">
            <Link className="brand" to="/">
              <span>
                <img src="/assets/magdi-yacoub-logo.png" alt="logo" />
              </span>
            </Link>
            <div className="toggle">
              {navbarState ? (
                <VscChromeClose onClick={() => setNavbarState(false)} />
              ) : (
                <GiHamburgerMenu
                  onClick={(e) => {
                    e.stopPropagation();
                    setNavbarState(true);
                  }}
                />
              )}
            </div>
          </div>

          <div className={`links ${navbarState ? "showLinks" : ""}`}>
            <NavLink to="/">
              <BsFillChatTextFill />
              <span> Analytics</span>
            </NavLink>
            <NavLink
              to="/patients"
              className={`${
                pathname === "/edit-patient" || pathname === "/add-patient"
                  ? "active"
                  : ""
              }`}
            >
              <ImProfile />
              <span> Patient</span>
            </NavLink>
            <NavLink to="/rooms">
              <FaBed />
              <span> Rooms</span>
            </NavLink>
            <NavLink to="/staff">
              <MdEngineering />
              <span> Staff</span>
            </NavLink>
          </div>
        </div>

        <div className={`logout ${navbarState ? "showLogout" : ""}`}>
          <Link to="/login">
            <BiLogOut />
            <span> Logout</span>
          </Link>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  box-shadow: 1px 1px 5px #888888;
  position: fixed;
  left: 0;
  background-color: var(--white);
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 5px #888888;
      padding: 0.6rem 1rem;
      border-top-right-radius: 3rem;
      border-bottom-right-radius: 3rem;
      background-color: #fff;

      span img {
        width: 80px;
      }
    }

    .links {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1rem;
      a {
        padding: 1rem 1rem;
        border-top-right-radius: 0.6rem;
        border-bottom-right-radius: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        display: flex;
        gap: 1rem;
        color: var(--black);
      }
      .active {
        background-color: var(--black);
        color: var(--white);
      }
    }
  }
  .logout {
    margin: 1rem 0;
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: var(--red);
      a {
        color: var(--white);
      }
    }
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      gap: 0.5rem;
      color: var(--black);
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 0;
    .top {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;

      .responsive {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .toggle {
          width: 10%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--black);
          z-index: 10;
          svg {
            font-size: 1.4rem;
          }
        }
        .brand {
          gap: 1rem;
          width: 30%;
          justify-content: center;
        }
      }

      .links {
        position: fixed;
        top: -20rem;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        a {
          width: 50%;
          margin: 0 auto;
          border-radius: 0.6rem;
          display: flex;
          justify-content: center;
        }
      }
      .showLinks {
        position: static;
      }
    }

    .logout {
      position: fixed;
      top: -15rem;
      margin: 1rem 0;
      background-color: var(--red);
      a {
        color: var(--white);
      }
    }
    .showLogout {
      position: static;
      top: 0rem;
    }
  }
`;
