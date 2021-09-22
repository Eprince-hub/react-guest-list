import { useState } from 'react';
import Guests from './Guests';

export default function UserInput() {
  // setting state variables
  // user input states
  const [userData, setUserData] = useState({ firstName: '', lastName: '' });

  const [disableButton, setDisableButton] = useState(true);

  const [guestLists, setGuestLists] = useState([]);

  // Function that handles For Submission
  function handleSubmit(event) {
    console.log('firstName: ' + userData.firstName);
    console.log('lastName: ' + userData.lastName);
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

  // Function that concats the user information to the user lists array
  function handleGuestUpdate() {
    setGuestLists(guestLists.concat(userData));
  }

  console.log(guestLists);

  return (
    <div>
      <h1>Hello from the GuestInput</h1>

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
        />
      </form>

      {/* The Guest Component */}

      <Guests
        user={{
          firstName: [userData.firstName],
          lastName: [userData.lastName],
        }}
      />
    </div>
  );
}
