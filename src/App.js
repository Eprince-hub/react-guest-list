import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GuestBookHomePage from './components/GuestBookHomePage';
import backgroundImage from './components/images/tile_background.png';

const appStyle = css`
  background-color: black;
  background-image: url(${backgroundImage});
  backdrop-filter: invert(70%);
  width: 100vw;
  min-height: 100vh;
  text-align: center;
`;

function App() {
  return (
    <div css={appStyle}>
      <h1>Guest List</h1>
      <GuestBookHomePage />
    </div>
  );
}

export default App;
