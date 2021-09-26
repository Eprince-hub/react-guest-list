/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import SubmitButton from './SubmitButton';
import UserInput from './UserInput';

// Css Styling for the button

const buttonStyle = css`
  .submit {
    background: purple;
    color: white;
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    box-shadow: 3px 5px 4px 3px grey;

    :hover {
      background: lightcyan;
      color: black;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
  }

  .idleButton {
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border: none;
    border-radius: 10px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    box-shadow: 3px 5px 4px 2px grey;

    :hover {
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
  }
`;

export default function PostingGuests(props) {
  // const [errorMessage, setErrorMessage] = useState(null); // controls for the error message in case there is one
  const [isLoaded, setIsLoaded] = useState(false); // Takes care of the Loading that would show on any delay
  const [disableButton, setDisableButton] = useState(true); // controls the life of the submit button
  const [userData, setUserData] = useState({ firstName: '', lastName: '' }); // User Data collection as an object
  const [guestLists, setGuestLists] = useState([]); // the lists of all the guests including the newly added ones
  // const [guests, setGuests] = useState();

  const baseUrl = 'http://localhost:5000';

  // This function fetches the Guests information from the server
  // problem, anytime i add a dependency then it goes into an infinite loop: Needs a FIX!
  useEffect(() => {
    function fetchGuestsInfo() {
      fetch(`${baseUrl}/`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setGuestLists(guestLists.concat(result));

            // troubleShooting
            console.log('checking results');
            console.log(result);
          },

          (err) => {
            setIsLoaded(true);
            // setErrorMessage(err);
            console.log(err);
          },
        );
    }
    fetchGuestsInfo();
  }, []);

  // This function makes post request to the server with new Guests information
  // collected from the form widgets on the front-end!
  async function postGuestsInfo() {
    const response = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
      }),
    });
    const createdGuest = await response.json();
    console.log(createdGuest);

    // using the spread operator to copy the existing guest information and then add it to the guests lists
    const newGuestInfo = [...guestLists];
    newGuestInfo.push(createdGuest);
    setGuestLists(newGuestInfo);
  }

  // this function handles the user input changes as the user interacts with the form.
  function handleUserInputChange(event) {
    setUserData({
      ...userData,
      [event.currentTarget.name]: event.currentTarget.value,
    });

    setDisableButton(false);
  }

  // Troubleshooting
  console.log('User Datas are as follows: ');
  console.log(userData);

  // Function that concat the user information to the user lists array
  function handleGuestUpdate() {
    setGuestLists(guestLists.concat(userData));

    setUserData({ firstName: '', lastName: '' });
    setDisableButton(true);
  }

  // Troubleshooting
  console.log('The guests lists are as folows');
  console.log(guestLists);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div css={props.cssStyling}>
        <UserInput
          firstName="firstName"
          firstNameValue={userData.firstName}
          lastName="lastName"
          lastNameValue={userData.lastName}
          handleUserInput={handleUserInputChange}
        />
        <SubmitButton
          buttonStyle={buttonStyle}
          buttonClassName={!disableButton ? 'submit' : 'idleButton'}
          displayStatus={disableButton}
          handleSubmits={() => {
            handleGuestUpdate();
            postGuestsInfo();
          }}
        >
          Submit Name
        </SubmitButton>

        <div className="guestDisplay">
          <h2>All Guests</h2>

          {guestLists.map((guest) => {
            return (
              <div key={guest.id} className="cssClassName">
                <p>
                  {`Name: ${guest.firstName}
                  ${guest.lastName} `}
                  <span>Edit</span>
                  <span>Delete</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
