import "./App.css";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const operators = ["+", "-", "/", "*"];

const App = () => {
  const [textToDisplay, setTextToDisplay] = useState("");
  const [lastOperator, setLastOperator] = useState();
  const handleOnClick = (val) => {
    // if (operators.includes(val)) {
    //   setLastOperator(val);

    // }

    if (operators.includes(val) || val === "=") {
      const lastOperatorIndex = lastOperator
        ? textToDisplay.lastIndexOf(lastOperator) + 1
        : 0;

      const firstNumberSet = textToDisplay.substring(0, lastOperatorIndex);
      const lastNumberSet = textToDisplay.slice(lastOperatorIndex);

      const str = firstNumberSet + parseFloat(lastNumberSet);

      if (val === "=") {
        return onTotal(str);
      }

      setTextToDisplay(str + val);
      setLastOperator(val);
      return;
    }

    if (val === ".") {
      const lastOperatorIndex = lastOperator
        ? textToDisplay.lastIndexOf(lastOperator) + 1
        : 0;

      const lastNumberSet = textToDisplay.slice(lastOperatorIndex);

      if (lastNumberSet.includes(".")) {
        return;
      }
    }

    // step 1 .index of last operator or 0

    // if (val === ".") {
    //   if (lastOperator) {
    //     const lastOperatorIndex = textToDisplay.lastIndexOf(lastOperator);
    //     const lastNumberSet = textToDisplay.slice(lastOperatorIndex + 1);

    //     if (lastNumberSet.includes(".")) {
    //       return;
    //     }
    //   } else {
    //     if (textToDisplay.includes(".")) {
    //       return;
    //     }
    //   }
    // }

    if (val === "=") {
      return onTotal();
    }

    if (val === "AC") {
      return setTextToDisplay("");
    }

    if (val === "C") {
      const str = textToDisplay.slice(0, -1);
      return setTextToDisplay(str);
    }

    if (operators.includes(val)) {
      const lastChar = textToDisplay.slice(-1);

      if (operators.includes(lastChar)) {
        const str = textToDisplay.slice(0, -1) + val;
        return setTextToDisplay(str);
      }
    }

    setTextToDisplay(textToDisplay + val);
  };

  const onTotal = (str) => {
    // let str = textToDisplay;

    const lastChar = str.slice(-1);

    if (operators.includes(lastChar)) {
      str = str.slice(0, -1);
    }

    const ttl = eval(str);
    setTextToDisplay(ttl.toString());
  };

  return (
    <>
      <div className="wrapper">
        <Title />

        <div className="mainParent">
          <Input textToDisplay={textToDisplay} />
          <Button handleOnClick={handleOnClick} />
        </div>
      </div>
    </>
  );
};

export default App;
