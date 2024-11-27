import React, { useState, useMemo } from "react";

const Usememo = () => {
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  const checkNum = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return first % 2;
  }, [first]);
  // const checkNum = () => {
  //   for (let i = 0; i < 1000000000; i++) {}
  //   return first % 2;
  // };
  return (
    <div>
      <button onClick={() => setfirst(first + 1)}> + </button>{" "}

      {!checkNum ? "even" : "odd"} {first}
      <button onClick={() => setsecond(second + 1)}> + </button>{" "}
      {second}
    </div>
  );
};

export default Usememo;