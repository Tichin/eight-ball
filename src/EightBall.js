import React, { useState } from 'react';
import "./EightBall.css";
import random from "./random"


/** Displays random message with correlating background color
 *
 *  Props:
 *  -answers, an array of objects
 * TODO: give example for props like we did for state
 *
 *  State:
 *  -answer, { msg: "Think of a Question", color: "black" }
 *
 *  App -> EightBall
 *
 */
//TODO: random funciton name should be like : choice?
function EightBall({ answers }) {

  const [answer, setAnswer] = useState({ msg: "Think of a Question", color: "black" });

  function handleClick(evt) {
    setAnswer(random(answers));
  }

  return (
    <div className='EightBall'
      style={{ backgroundColor: answer.color }}
      onClick={handleClick}
    >
      <p className='EightBall-msg'> {answer.msg} </p>
    </div >
  );
}

export default EightBall;