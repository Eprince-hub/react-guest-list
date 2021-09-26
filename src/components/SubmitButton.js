/** @jsxImportSource @emotion/react */

export default function SubmitButton(props) {
  return (
    <div css={props.buttonStyle}>
      {/* The Button that submits the form */}
      <button
        onClick={props.handleSubmits}
        disabled={props.displayStatus}
        className={props.buttonClassName}
      >
        {props.children}
      </button>
    </div>
  );
}
