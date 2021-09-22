import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GuestBookHomePage from './components/GuestBookHomePage';

const appStyle = css`
  background-color: lightgray;
  width: 100vw;
  min-height: 100vh;
  text-align: center;
`;

function App() {
  return (
    <div css={appStyle}>
      <h1>React Guest List</h1>
      <h2>Register As a Guest</h2>
      <GuestBookHomePage />
    </div>
  );
}

export default App;
