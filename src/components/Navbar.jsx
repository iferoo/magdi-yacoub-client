import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Eyad,</h4>
        <h1>
          Welcom to <span>Magdi Yacoub Heart Center</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: var(--black);
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: var(--red);
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: var(--black);
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: var(--white);
    }
    input {
      background-color: transparent;
      border: none;
      color: var(--white);
      letter-spacing: 0.3rem;
      &::placeholder {
        color: var(--white);
      }
      &:focus {
        outline: none;
        
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px){
    flex-direction: column;
    .title{
      span{
        display: block;
        margin: 1rem 0;
      }
    }
  }
`;
