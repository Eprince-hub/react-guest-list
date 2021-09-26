/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PostingGuests from './PostingGuests';

const guestStyle = css`
  width: 100%;
  /*  min-height: 100vh; */

  div.guestDisplay {
    margin: 1.5rem auto;
    width: 60vw;
    border-radius: 10px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    box-shadow: 3px 5px 4px 2px grey;
    padding-bottom: 1.5rem;

    h2 {
      font-size: 1.7rem;
      margin-bottom: 1rem;
    }

    div {
      background-color: white;
      margin: auto;
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #efefef;
      box-shadow:
     /* The top layer shadow */ 0 1px 1px rgba(0, 0, 0, 0.15),
        /* The second layer */ 0 10px 0 -5px #eee,
        /* The second layer shadow */ 0 10px 1px -4px rgba(0, 0, 0, 0.15),
        /* The third layer */ 0 20px 0 -10px #eee,
        /* The third layer shadow */ 0 20px 1px -9px rgba(0, 0, 0, 0.15);
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

        span {
          font-size: 1.1rem;
          font-weight: bold;
          background: red;
          position: absolute;
          right: 1rem;
          border-radius: 10px;

          + span {
            right: 4rem;
          }
        }
      }
    }
  }

  .guestDisplayCard {
    /* + button {
      background: purple;
      color: white;
      padding: 1rem 1.5rem;
      margin-top: 1rem;
      border: none;
      border-radius: 10px;
      font-size: 1.2rem;
      cursor: pointer;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;

      :hover {
        background: lightcyan;
        color: black;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
    } */
  }

  label {
    display: block;
    font-size: 1.5rem;
    height: 4rem;

    input {
      width: 60%;
      height: 2.5rem;
      border: none;
      border-radius: 10px;
      margin: 0.5rem 0.5rem 0rem 0.8rem;
      padding: 0 0.5rem;
      font-size: 1.2rem;
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
