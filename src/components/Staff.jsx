import React from 'react'
import styled from "styled-components";

export default function Staff() {
  return (
    <Section>
      <div className="container">

        <div className="top">
          <h2>Staff</h2>
        </div>

        <div className="down">
          <div>
            <div className="staffType">
              <h3>Doctors</h3>
            </div>
            <div className="staffInfo">
              <table>
                <tr>
                  <th className="duty">On duty</th>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
              </table>

              <table>
                <tr>
                  <th className='shift'>Next Shift</th>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>

                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>

              </table>

              <table>
                <tr>
                  <th className='vacation'>Vacation</th>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
              </table>
            </div>
          </div>

          <div>
            <div className="staffType">
              <h3>Nurses</h3>
            </div>
            <div className="staffInfo">
              <table>
                <tr>
                  <th className="duty">On duty</th>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
              </table>

              <table>
                <tr>
                  <th className='shift'>Next Shift</th>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>

                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>

              </table>

              <table>
                <tr>
                  <th className='vacation'>Vacation</th>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>

              </table>
            </div>
          </div>
          <div>
            <div className="staffType">
              <h3>Staff</h3>
            </div>
            <div className="staffInfo">
              <table>
                <tr>
                  <th className="duty">On duty</th>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
              </table>

              <table>
                <tr>
                  <th className='shift'>Next Shift</th>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>

                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>

              </table>

              <table>
                <tr>
                  <th className='vacation'>Vacation</th>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
                <tr>
                  <td>Fatma Saeed Ahmed</td>
                </tr>
              </table>
            </div>
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
    .top{
    padding: 1rem;
    border-bottom: 1px solid #888888;
  }
  .down{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .staffType{
      margin: 1rem 0;
      h3{
        font-size: 1.5rem;
        font-weight: 200;
      }
    }
    .staffInfo{
      display: flex;
      justify-content: space-between;
    table {
      border-collapse: collapse;
      width: 30%;
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }   
      }    
        .duty{
          background-color: green;
          color: white;
        }
        .shift{
          background-color: yellowgreen;
          color: white;
        }
        .vacation{
          background-color: burlywood;
          color: white;
        }
    }
  }
  }

  
  @media screen and (min-width: 280px) and (max-width: 1080px){
    margin-left: 0;

  .container{ 
  .down{
    .staffInfo{
      flex-direction: column;
      gap: 1rem;
      table {
      width: 100%; 
      }   
      }
    }
  }
    
  }
`;