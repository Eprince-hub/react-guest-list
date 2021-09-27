/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PostingGuests from './PostingGuests';

const guestStyle = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;

  div.guestDisplay {
    width: 48vw;
    border-radius: 10px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    box-shadow: 3px 5px 4px 2px grey;
    padding-bottom: 1.5rem;

    h2 {
      font-size: 1.7rem;
      margin: 4.5rem 0 1rem 0;
      display: inline-block;
      border-bottom: 5px solid #34495e;
      padding-bottom: 0.5rem;
    }

    div {
      background-color: white;
      margin: auto;
      width: 95%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #efefef;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee,
        0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #eee,
        0 20px 1px -9px rgba(0, 0, 0, 0.15);
      padding: 30px;
      border-bottom: 2px solid #cecece;
      border-radius: 15px;
      position: relative;

      p {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 20px 0;
        width: 80%;
        font-family: Roboto, sans-serif;
        font-weight: 500;
        font-size: 1.3rem;
        color: #333333;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;

        button {
          font-size: 1.1rem;
          font-weight: bold;
          position: absolute;
          right: 1rem;
          border-radius: 10px;
          padding: 0.2rem 0.8rem;
          cursor: pointer;
          border: none;
          background: red;
          color: white;

          + button {
            right: 6rem;
            margin-right: 1rem;
            background: #34495e;
          }
        }

        label {
          width: 40px;
          height: 40px;
          display: inline-flex;
          position: relative;
          left: -5rem;
          padding: 0;
          margin: 0;
          cursor: pointer;

          .checkBox {
            background: red;
            position: absolute;
            width: inherit;
            height: inherit;
            left: 0;
            -webkit-appearance: none;
            -moz-appearance: none;
            -o-appearance: none;
            appearance: none;
            border: 1px solid #34495e;
            border-radius: 4px;
            outline: none;
            background-color: #41b883;
            -o-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            box-shadow: 3px 5px 4px 2px grey;
            cursor: pointer;

            :checked {
              border: 1px solid #41b883;
              background-color: #34495e;
            }
            :active {
              border: 2px solid #34495e;
            }
          }
        }
      }
    }
    /* .cssClassName {
      background: black;
    } */

    .guestAttendingPara {
      background: #34495e;
      width: 24%;
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      border-radius: 10px;
      padding-bottom: 0.5rem;
      margin-bottom: -1rem;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
  }

  .guestInputDisplay {
    width: 40%;
    border-radius: 10px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    box-shadow: 3px 5px 4px 2px grey;
    padding: 5rem 0 0 0;

    label {
      display: inline-block;
      font-size: 1.5rem;
      height: 4rem;
      font-weight: bold;
      margin-bottom: 2rem;

      input {
        width: 20vw;
        height: 2.7rem;
        border: none;
        border-radius: 10px;
        margin: 0.5rem 0.5rem 0rem 0.8rem;
        padding: 0 0.5rem;
        font-size: 1.2rem;
        box-shadow: 3px 5px 4px 2px grey;
        display: flex;
        flex-direction: row;
      }
    }

    h2 {
      margin: 0rem 0 3rem 0;
      padding-bottom: 0.5rem;
      display: inline-block;
      border-bottom: 5px solid #34495e;
    }

    p {
      width: 70%;
      margin: 3rem auto;
      font-size: 1.3rem;
      font-weight: bolder;
      padding: 1.5rem 1rem;
      border-radius: 10px;
      color: #34495e;
      box-shadow: 3px 5px 4px 2px grey;
    }
  }
`;

export default function GuestBookHomePage() {
  return (
    <div>
      <PostingGuests cssStyling={guestStyle} />
    </div>
  );
}
