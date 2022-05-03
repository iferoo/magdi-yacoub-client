import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

export default function NotFoundPage() {
  return (
    <div>
      <Sidebar />
      <Section>
        <div className="container">
          <div className="top">
            <h2>Error 404</h2>
          </div>

          <div className="down">
            <img src="/assets/magdi-yacoub-icon.png" alt="Not Found" />
            <p>Page Not Found</p>
          </div>
        </div>
      </Section>
    </div>
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
      color: var(--red);
    }
  }
  .line {
    width: 90%;
    margin: 1rem auto;
    border: 0.3px solid #b9b9b9;
    border-radius: 1rem;
  }
  .top {
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #888888;
  }

  .down {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    img {
      width: 50vh;
    }
    p {
      font-size: 2rem;
      font-weight: 200;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .down {
      
      img {
        width: 100vh;
      }
      p {
        font-size: 2rem;
        font-weight: 200;
      }
    }
  }
`;
