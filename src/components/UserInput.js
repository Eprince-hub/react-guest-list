/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function UserInput(props) {
  return (
    <div>
      <h2>{props.description}</h2>
      {/* Form that collects user input */}
      <div>
        {/* Input that collects the first name */}
        <label>
          First Name:
          <input
            name={props.firstName}
            required
            value={props.firstNameValue}
            onChange={props.handleUserInput}
          />
        </label>

        {/* Input that collects the last name */}
        <label>
          Last Name:
          <input
            name={props.lastName}
            required
            value={props.lastNameValue}
            onChange={props.handleUserInput}
          />
        </label>
      </div>
    </div>
  );
}
