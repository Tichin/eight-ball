import React, { useState } from 'react';

function EightBall({ answers }) {

  const [answer, setAnswer] = useState({ msg: "Think of a Question", color: "black" });

  function random(arr) {

    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  function handleClick(evt) {
    setAnswer(random(answers));
  }

  return (
    <div className='EightBall'
      style={{ backgroundColor: answer.color }}
      onClick={handleClick}
    >
      {answer.msg}
    </div >
  );
}

export default EightBall;