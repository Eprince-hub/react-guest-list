import { useEffect, useState } from 'react';

export default function PostingGuests(props) {
  const [guestLists, setGuestLists] = useState([]);

  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const baseUrl = 'http://localhost:5000';

  // This function makes post request to the server
  async function postGuests() {
    const response = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: 'Victor', lastName: 'Ejike' }),
    });
    const createdGuest = await response.json();
    console.log('Created Guests are');
    console.log(createdGuest);
  }

  // This function fetches the users from the server
  function fetchGuests() {
    fetch(`${baseUrl}/`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setGuestLists(result);

          console.log('checking results');
          console.log(result);
        },

        (err) => {
          setIsLoaded(true);
          setErrorMessage(err);
        },
      );
  }

  // Calling both posting and fetching functions in a useEffect function
  // so that they are called only when needed and / or after the component have loaded

  useEffect(() => {
    // postGuests();
    // fetchGuests();
  }, []);

  return (
    <div>
      <button onClick={props.handleSubmit}>{props.message}</button>
    </div>
  );
}
