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

// git init
// delte the old git file/folder
// and then do   git init
// no need to push anything to repo
// just do the deployment
