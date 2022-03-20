import React from "react";

const btns = [
  {
    label: "AC",
    clsName: "clear",
  },

  {
    label: "C",
    clsName: "clean",
  },
  {
    label: "/",
    clsName: "divide",
  },

  {
    label: "*",
    clsName: "multi",
  },

  {
    label: "+",
    clsName: "plus",
  },

  {
    label: "-",
    clsName: "minus",
  },

  {
    label: "9",
    clsName: "no-9",
  },

  {
    label: "8",
    clsName: "no-8",
  },

  {
    label: "7",
    clsName: "no-7",
  },

  {
    label: "6",
    clsName: "no-6",
  },

  {
    label: "5",
    clsName: "no-5",
  },

  {
    label: "4",
    clsName: "no-4",
  },

  {
    label: "3",
    clsName: "no-3",
  },

  {
    label: "2",
    clsName: "no-2",
  },

  {
    label: "1",
    clsName: "no-1",
  },

  {
    label: "0",
    clsName: "no-0",
  },

  {
    label: ".",
    clsName: "no-dot",
  },

  {
    label: "=",
    clsName: "ans",
  },
];

const Button = () => {
  return (
    <div>
      <div className="items">
        {btns.map((btn, i) => {
          return (
            <button key={i} className={btn.clsName}>
              {btn.label}
            </button>
          );
        })}
        ;
        {/* <button class="clear">AC</button>
        <button class="clean">C</button>
        <button class="divide">/</button>
        <button class="multi">*</button>
        <button class="plus">+</button>
        <button class="minus">-</button>

        <button class="no-9">9</button>
        <button class="no-8">8</button>
        <button class="no-7">7</button>
        <button class="no-6">6</button>
        <button class="no-5">5</button>
        <button class="no-4">4</button>
        <button class="no-3">3</button>
        <button class="no-2">2</button>
        <button class="no-1">1</button>
        <button class="no-0">0</button>
        <button class="no-dot">.</button>
        <button class="ans">=</button> */}
      </div>
    </div>
  );
};

export default Button;
