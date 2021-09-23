import { useEffect, useState } from 'react';

/*
export default function FetchGuests() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const baseUrl = 'http://localhost:5000';

  useEffect(() => {
    fetch(`${baseUrl}/`, { mode: 'no-cors' })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);

          console.log('checking results');
          console.log(result);
        },

        (err) => {
          setIsLoaded(true);
          setErrorMessage(err);
        },
      );
  }, []);

  if (errorMessage) {
    return <div>ErrorMessage: {errorMessage.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items);
    return <div>{JSON.stringify(items)}</div>;
  }
}

/*
export default function FetchGuests() {
  // setting the state variables

  const [guests, setGuests] = useState();

  console.log('This an insider from the fetch component');

  async function makingUsers() {
    const baseUrl = 'http://localhost:5000';
    const response = await fetch(`${baseUrl}/`);
    const myGuests = await response.json();

    // console.log(myGuests);

    console.log(myGuests);

    setGuests(myGuests);
  }

  useEffect(() => {
    makingUsers();
  }, []);

  console.log('Guests comes under here');

  console.log(guests);

  if (!guests) {
    return <h1>Loading......</h1>;
  } else {
    return (
      <div>
        <h1>hello world.</h1>
        Another one
      </div>
    );
  }
}
*/
/*
const [errorMessageMessage, setErrorMessage] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [fectchedUser, setFecthedUser] = useState();

  const baseUrl = 'http://localhost:5000';

  async function fetchData() {
    const rawData = await fetch(`${baseUrl}/`);
    const data = await rawData.json();
    /* setGuestList(data);

    console.log('The data would come down here');
    console.log(data);
    setFecthedUser(data);
  }

  fetchData();

  console.log(fectchedUser);


*/

/*
  useEffect(() => {
    fetch(
      'https://github.com/upleveled/express-guest-list-api-memory-data-store',
      { mode: 'no-cors' },
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setFecthedUser(result);
          console.log('The results are below:');
          console.log(result);
        },

        (error) => {
          setLoaded(true);
          setErrorMessage(error);
        },
      );
  }, []);
 */
