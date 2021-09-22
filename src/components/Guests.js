import { useState } from 'react';

export default function Guests(props) {
  // setting state variables

  return (
    <ul>
      <li>First Name: {props.user.firstName}</li>
      <li>last Name: {props.user.lastName}</li>
    </ul>
  );
}
