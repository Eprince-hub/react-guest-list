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

const loadingDivStyle = css`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 15rem;
  left: 50%;
  font-size: 1.2rem;
  font-weight: bolder;
`;

export default function PostingGuests(props) {
  // const [errorMessage, setErrorMessage] = useState(null); // controls for the error message in case there is one
  const [isLoaded, setIsLoaded] = useState(false); // Takes care of the Loading that would show on any delay
  const [disableButton, setDisableButton] = useState(true); // controls the life of the submit button
  const [userData, setUserData] = useState({ firstName: '', lastName: '' }); // User Data collection as an object
  const [guestLists, setGuestLists] = useState([]); // the lists of all the guests including the newly added ones
  const [guestsAttendance, setGuestsAttendance] = useState(0); // counter for the attending guests

  // const baseUrl = 'http://localhost:5000';

  const baseUrl = 'https://react-guestbook-api.herokuapp.com';

  // This function fetches the Guests information from the server
  // problem!!!, anytime i add a dependency then it goes into an infinite loop: Needs a FIX!
  useEffect(() => {
    function fetchGuestsInfo() {
      fetch(`${baseUrl}/`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            // setGuestLists(guestLists.concat(result));
            setGuestLists(result);

            // troubleShooting
            // console.log('checking results');
            // console.log(result);
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

  // this function will send an update to the server implying if the guest would  be attending.
  // takes the updated guest list and make a patch request.

  async function updateGuestAttendingStatus(guestList) {
    const response = await fetch(`${baseUrl}/${guestList.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: guestList.attending }),
    });
    const updatedGuest = await response.json();
    console.log(updatedGuest);
  }

  async function deleteGuestFromList(guestList) {
    const response = await fetch(`${baseUrl}/${guestList.id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
    console.log(deletedGuest);
    // filter the deleted guest from the array of guests
    const guestToDelete = guestLists.filter(
      (guest) => guest.id !== deletedGuest.id,
    );
    setGuestLists(guestToDelete);
  }

  // Handlers Starts Here!!!

  // this function would handle the attending status of the guests
  // Will take two parameters, the id and the attending status
  function handleAttendance(id, attendance) {
    const newGuestsLists = [...guestLists];
    const attendingGuest = newGuestsLists.find((guest) => guest.id === id);
    attendingGuest.attending = attendance;

    // updating the Guest Lists with the new attendance value
    // setGuestLists(attendingGuest);
    setGuestLists(newGuestsLists);
    // call the patching function that will trigger the server update here!
    // and pass the needed argument

    updateGuestAttendingStatus(attendingGuest);
  }

  // this function handles the user input changes as the user interacts with the form.
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

    setUserData({ firstName: '', lastName: '' });
    setDisableButton(true);
  }

  if (!isLoaded) {
    return <div css={loadingDivStyle}>Loading...</div>;
  } else {
    return (
      <div css={props.cssStyling}>
        <div className="guestInputDisplay">
          <UserInput
            firstName="firstName"
            firstNameValue={userData.firstName}
            lastName="lastName"
            lastNameValue={userData.lastName}
            handleUserInput={handleUserInputChange}
            description="Register As Guest"
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
          <p>{guestsAttendance} guests are attending this party</p>
        </div>

        <div className="guestDisplay">
          <h2>All Guests</h2>

          {guestLists.map((guest) => {
            return (
              <div key={guest.id} /* className="cssClassName" */>
                <p>
                  <label>
                    <input
                      /* id="attending" */
                      checked={guest.attending}
                      type="checkbox"
                      className="checkBox"
                      onChange={(event) => {
                        handleAttendance(guest.id, event.currentTarget.checked);
                        guest.attending
                          ? setGuestsAttendance(guestsAttendance + 1)
                          : setGuestsAttendance(guestsAttendance - 1);
                      }}
                    />
                  </label>
                  {`Name: ${guest.firstName}
                   ${guest.lastName} `}
                  <button
                    disabled={guest.attending ? true : false}
                    style={{
                      textDecoration: guest.attending
                        ? 'line-through #34495E 5px'
                        : 'initial',
                    }}
                    onClick={() => {
                      alert('Are You Sure You Want To Delete This Guest?');
                      deleteGuestFromList(guest);
                    }}
                  >
                    Delete
                  </button>
                  <button>Edit</button>
                </p>
                <p
                  className="guestAttendingPara"
                  style={{ display: guest.attending ? 'block' : 'none' }}
                >
                  Attending
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
