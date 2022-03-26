import React from "react";

const Input = ({ textToDisplay }) => {
  return (
    <>
      <div className="result" id="result">
        {textToDisplay || "0.00"}
      </div>
    </>
  );
};

export default Input;
