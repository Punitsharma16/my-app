import React, { useEffect, useState } from "react";

export const SideEffectExOne = () => {
  const [counter1, setCounter1] = useState(0);
  // run each time when commponent rendered
  useEffect(() => {
    console.log('running effect each time');
  })

  // run only first time 
  useEffect(() => {
    console.log('running only once');
  }, [])
//  run on every updation of counter1
  useEffect(() => {
    console.log('running on counter 1 update');
  }, [counter1])

  

  return (
    <>
      <div>counter 1: {counter1}</div>
      <button onClick={() => setCounter1(counter1 + 1)}>+counter1</button>
    </>
  );
};