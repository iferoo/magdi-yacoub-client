import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImProfile } from "react-icons/im";
import { FaBed } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { BsFillChatTextFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector('html');
  html.addEventListener('click', () => setNavbarState(false))

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <span>
              <img src="/assets/magdi-yacoub-logo.png" alt="logo" />
            </span>
          </div>
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
          <div className="links">
            <ul>
              <li
                onClick={() => setCurrentLink(1)}
                className={currentLink === 1 ? "active" : ""}
              >
                <Link to="/">
                  <ImProfile />
                  <span> Patient</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(2)}
                className={currentLink === 2 ? "active" : ""}
              >
                <Link to="/rooms">
                  <FaBed />
                  <span> Rooms</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(3)}
                className={currentLink === 3 ? "active" : ""}
              >
                <Link to="/staff">
                  <MdEngineering />
                  <span> Staff</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(4)}
                className={currentLink === 4 ? "active" : ""}
              >
                <Link to="/analytics">
                  <BsFillChatTextFill />
                  <span> Analytics</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <Link to="/login">
            <BiLogOut />
            <span> Logout</span>
          </Link>
        </div>
        <ResponsiveNav state={navbarState} className={navbarState ? 'show' : ''}>
          <div className="responsive__links">
            <ul>
              <li
                onClick={() => setCurrentLink(1)}
                className={currentLink === 1 ? "active" : ""}
              >
                <a href="#e">
                  <ImProfile />
                  <span> Patient</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(2)}
                className={currentLink === 2 ? "active" : ""}
              >
                <a href="#e">
                  <FaBed />
                  <span> Rooms</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(3)}
                className={currentLink === 3 ? "active" : ""}
              >
                <a href="#e">
                  <MdEngineering />
                  <span> Staff</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(4)}
                className={currentLink === 4 ? "active" : ""}
              >
                <a href="#e">
                  <BsFillChatTextFill />
                  <span> Analytics</span>
                </a>
              </li>
            </ul>
          </div>

        </ResponsiveNav>
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
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 5px #888888;
      padding: 0.6rem 1rem;
      border-top-right-radius: 3rem;
      border-bottom-right-radius: 3rem;
      background-color: #fff;

      span img {
        width: 100px;
      }
    }
    .links {
      display: flex;
      justify-content: flex-start;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 1rem 1rem;
          border-top-right-radius: 0.6rem;
          border-bottom-right-radius: 0.6rem;
          &:hover {
            background-color: var(--black);
            a {
              color: var(--white);
            }
          }
          a {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: var(--black);
          }
        }
        .active {
          background-color: var(--black);
          a {
            color: var(--white);
          }
        }
      }
    }
  }
  .logout {
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
      display: flex;
      gap: 0.5rem;
      color: var(--black);
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px){
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: var(--black);
        z-index: 10;
        svg{
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top >.links,.logout{
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  top: 10vw;
  z-index: 20;
  background-color: var(--white);
  height: 100vh;
  width: 100%;
  transition: 0.4s ease-in-out;
  padding: 1rem;
  opacity: 0;
  visibility: hidden;
  .responsive__links{
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 1rem 1rem;
          border-top-left-radius: 0.6rem;
          border-bottom-left-radius: 0.6rem;
          &:hover {
            background-color: var(--black);
            a {
              color: var(--white);
            }
          }
          a {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: var(--black);
          }
        }
        .active {
          background-color: var(--black);
          a {
            color: var(--white);
          }
        }
      }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px){
    
  }
`