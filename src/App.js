import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FetchGuests from './components/FetchGuests';
import GuestBookHomePage from './components/GuestBookHomePage';
import PostingGuests from './components/PostingGuests';

const appStyle = css`
  background-color: lightgray;
  width: 100vw;
  min-height: 100vh;
  text-align: center;
`;

function App() {
  return (
    <div css={appStyle}>
      <h1>Guest List</h1>
      <h3>Register As A Guest</h3>
      <GuestBookHomePage />

      <h1>Checking the fectched guest component</h1>

      <FetchGuests />
      <PostingGuests message="Submit Guests" />
    </div>
  );
}

export default App;
