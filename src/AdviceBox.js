import React from "react";

function AdviceBox({ advice, getAdvice }) {
  return (
    <div className="advice-box">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>
        <span>GIVE ME ADVICE!</span>
      </button>
    </div>
  );
}

export default AdviceBox;
