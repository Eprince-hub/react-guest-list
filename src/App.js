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
      <h1>Guest List</h1>
      <h3>Register As A Guest</h3>
      <GuestBookHomePage />
    </div>
  );
}

export default App;
