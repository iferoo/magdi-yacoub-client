import React from "react";

import styled from "styled-components";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { BiBed } from "react-icons/bi";


export default function Rooms() {

  return (
    <Section>
      <div className="container">

        <div className="top">
          <h2>Rooms</h2>
        </div>

        <div className="down">
          <div className="rooms">
            <div className="address">
              <h3 className="name">A - Third floor </h3>
              <IoMdArrowDropdown />
            </div>

            <div className="roomInfo">
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds free">
                <p>301</p>
                <BiBed />
                <p>free</p>
              </div>
              <div className="beds free">
                <p>301</p>
                <BiBed />
                <p>free</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds close">
                <p>301</p>
                <BiBed />
                <p>Close</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds free">
                <p>301</p>
                <BiBed />
                <p>free</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds free">
                <p>301</p>
                <BiBed />
                <p>free</p>
              </div>
              <div className="beds">
                <p>301</p>
                <BiBed />
                <p>full</p>
              </div>

            </div>
            <div className="line"></div>
          </div>


          <div className="rooms">
            <div className="address">
              <h3 className="name">A - Forth floor </h3>
              <IoMdArrowDropright />
            </div>

            <div className="roomInfo">
            </div>
            <div className="line"></div>
          </div>

          <div className="rooms">
            <div className="address">
              <h3 className="name">B - First floor </h3>
              <IoMdArrowDropdown />
            </div>

            <div className="roomInfo">
              <div className="beds free">
                <p>101</p>
                <BiBed />
                <p>free</p>
              </div>
              <div className="beds free">
                <p>101</p>
                <BiBed />
                <p>free</p>
              </div>
              <div className="beds">
                <p>101</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>101</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds close">
                <p>101</p>
                <BiBed />
                <p>close</p>
              </div>
              <div className="beds">
                <p>101</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds free">
                <p>101</p>
                <BiBed />
                <p>free</p>
              </div>
              <div className="beds">
                <p>101</p>
                <BiBed />
                <p>full</p>
              </div>
              <div className="beds">
                <p>101</p>
                <BiBed />
                <p>full</p>
              </div>

            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </Section>

  )
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;

  .container{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 5px #888888;
    padding: 1rem;
    h2{
      font-weight: 400;
    }
  }
  .line{
    width: 90%;
    margin: 1rem auto;
    border: 0.3px solid #b9b9b9;
    border-radius: 1rem;
  }
  .top{
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #888888;
  }

  .down{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .rooms{
      .address{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0;
        svg{
          font-size: 2rem;
        }
      }
      .roomInfo{
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin: 0 auto;
        .beds{
            color: #888888;
            display: flex;
            flex-direction: column;
            align-items: center;
            svg{
            font-size: 4rem;
          }
        }
        .free{
          color: green;
        }
        .close{
          color: var(--red);
        }
  
      }
    }
  }
  

  


  @media screen and (min-width: 280px) and (max-width: 1080px){
    margin-left: 0;
    .down{
    .rooms{
        .roomInfo{
          justify-content: center;

        }
      }
    }
  }
`;