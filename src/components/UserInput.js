import { useState } from 'react';

export default function UserInput(props) {
  // setting state variables
  console.log('The property is: ' + props);
  // user input states
  const [userData, setUserData] = useState({ firstName: '', lastName: '' });

  const [disableButton, setDisableButton] = useState(true);

  function handleSubmit(event) {
    console.log('submitted' + userData);
    console.log('firstName: ' + userData.firstName);
    console.log('lastName: ' + userData.lastName);
    event.preventDefault();

    setUserData({ firstName: '', lastName: '' });
    setDisableButton(true);
  }

  function handleUserInputChange(event) {
    setUserData({
      ...userData,
      [event.currentTarget.name]: event.currentTarget.value,
    });

    setDisableButton(false);
  }

  console.log(userData);

  return (
    <div>
      <h1>Hello from the GuestInput</h1>

      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            required
            value={userData.firstName}
            onChange={handleUserInputChange}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            required
            value={userData.lastName}
            onChange={handleUserInputChange}
          />
        </label>
        <input type="submit" value="Submit" disabled={disableButton} />
      </form>
    </div>
  );
}
