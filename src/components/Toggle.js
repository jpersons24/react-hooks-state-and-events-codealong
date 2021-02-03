import React from "react";
import { useState } from "react";

function Toggle() {
  const [isOn , setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  // using isOn state variable, and conditional rendering -> we can determine the background color
  const color = isOn ? "red" : "white";

  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
