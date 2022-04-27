import React, {  useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImProfile } from "react-icons/im";
import { FaBed } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { BsFillChatTextFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector('html');
  html.addEventListener('click', () => setNavbarState(false))
  const navigate = useNavigate();

  return (
    <>
      <Section>
        <div className="top">
          <div className="responsive">
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
          </div>

          <div className={`links ${navbarState ? "showLinks" : ""}`}>
            <ul>
              <li
                onClick={() => {
                  setCurrentLink(1)
                  navigate('/')
                }}
                className={currentLink === 1 ? "active" : ""}
              >
                <Link to="/">
                  <ImProfile />
                  <span> Patient</span>
                </Link>
              </li>
              <li
                onClick={() => {
                  setCurrentLink(2)
                  navigate('/rooms')
                }}
                className={currentLink === 2 ? "active" : ""}
              >
                <Link to="/rooms">
                  <FaBed />
                  <span> Rooms</span>
                </Link>
              </li>
              <li
                onClick={() => {
                  setCurrentLink(3)
                  navigate('/staff')
                }}
                className={currentLink === 3 ? "active" : ""}
              >
                <Link to="/staff">
                  <MdEngineering />
                  <span> Staff</span>
                </Link>
              </li>
              <li
                onClick={() => {
                  setCurrentLink(4)
                  navigate('/analytics')
                }}
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
      display: flex;
      justify-content: flex-start;
      ul {
        width: 70%;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          cursor: pointer;
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
      display: flex;
      gap: 0.5rem;
      color: var(--black);
    }
  }

  
  @media screen and (min-width: 280px) and (max-width: 1080px){
    position: initial;
    width: 100%;
    height: max-content;
    padding: 0;
    .top {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      
      .responsive{
        
        width: 100%;
        display: flex;
        justify-content: space-between;
        .toggle{
          width: 10%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--black);
          z-index: 10;
          svg{
            font-size: 1.4rem;
          }
        }
        .brand {
        gap: 1rem;
        width: 30%;
        justify-content: center;
      }
      }

      .links{
        position: fixed;
        top: -20rem;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        ul{
          width: 50%;
          margin: 0 auto;
          li{
            border-radius: 0.6rem;
            display: flex;
            justify-content: center;
          }
        }
      }  
      .showLinks{
          position: static;
         }
    }
    
    .logout{
      position: fixed;
      top: -15rem;
      margin: 1rem 0;
        
      }
  .showLogout{
    position: static;
    top: 0rem;
    }
  }
  
`;
