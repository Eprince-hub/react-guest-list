/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import Guests from './Guests';

const guestStyle = css`
  width: 80%auto;
  /*  min-height: 100vh; */

  .todoList {
    background-color: white;
    margin: auto;
    width: 30%;
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

    p {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 30px 20px 0;
      width: 70%;
      border-bottom: 1px solid #cecece;
      font-family: Roboto, sans-serif;
      font-weight: 500;
      font-size: 1.3rem;
      color: #333333;
    }

    + button {
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
    }
  }

  form {
    width: 100%;

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
      }
    }

    .submit {
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
    }
  }
`;

const baseUrl = 'http://localhost:5000';

export default function UserInput() {
  let uniqueId = 0;
  // setting state variables
  // user input states
  const [userData, setUserData] = useState({ firstName: '', lastName: '' });

  const [disableButton, setDisableButton] = useState(true);

  const [guestLists, setGuestLists] = useState([]);

  // ###########################################

  /* const [guestFirstName, setGuestFirstName] = useState([]);
  const [guestLastName, setGuestLastName] = useState([]);

  async function postGuests() {
    const response = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: guestFirstName,
        lastName: guestLastName,
      }),
    });
    const createdGuest = await response.json();
    console.log('Created Guests are');
    console.log(createdGuest);
  } */

  // Function that handles For Submission
  function handleSubmit(event) {
    /*  console.log('firstName: ' + userData.firstName);
    console.log('lastName: ' + userData.lastName); */
    event.preventDefault();

    setUserData({ firstName: '', lastName: '' });
    setDisableButton(true);
  }

  // Function that handles changes on user Inputs
  function handleUserInputChange(event) {
    setUserData({
      ...userData,
      [event.currentTarget.name]: event.currentTarget.value,
    });

    setDisableButton(false);
  }

  // Function that concat the user information to the user lists array
  function handleGuestUpdate() {
    setGuestLists(guestLists.concat(userData));
  }

  // console.log('Another new test starts here');

  // function handleClearGuestList() {
  //   setInterval(() => {
  //     guestLists.firstName.pop();
  //     guestLists.lastName.pop();
  //   }, 1000);
  //   console.log('I am being clicked!');
  // }

  /* console.log(guestLists); */

  return (
    <div css={guestStyle}>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            name="firstName"
            required
            value={userData.firstName}
            onChange={handleUserInputChange}
          />
        </label>

        <label>
          Last Name:
          <input
            name="lastName"
            required
            value={userData.lastName}
            onChange={handleUserInputChange}
          />
        </label>
        <input
          onClick={handleGuestUpdate}
          type="submit"
          value="Submit"
          disabled={disableButton}
          className={!disableButton ? 'submit' : ''}
        />
      </form>

      <div>
        <h2>Guests</h2>
        {guestLists.map((guest) => {
          /* console.log(guest.firstName);
          console.log(guest.lastName); */
          /* setGuestFirstName(guest.firstName);
          setGuestLastName(guest.lastName); */

          uniqueId++;
          return (
            <div key={uniqueId} className="todoList">
              <p>First Name: {guest.firstName}</p>
              <p>Last Name: {guest.lastName}</p>
            </div>
          );
        })}
        <button>Clear Guest List</button>
      </div>

      {/* The Guest Component */}

      {/* <Guests
        user={{
          firstName: [userData.firstName],
          lastName: [userData.lastName],
        }}
      /> */}
    </div>
  );
}

/*

function handleClearGuestList() {
    while (guestLists.length > 0) {
      setInterval(() => {
        firstName.pop();
        lastName.pop();
      }, 1000);
    }
    console.log('I am being clicked!');
  }

*/

// https://react-guests-lists.herokuapp.com/
