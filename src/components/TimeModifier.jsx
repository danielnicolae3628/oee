import React from "react";
import Button from "./Button";

const TimeModifier = () => {
  return (
    <>
      <div className=" flex flex-row justify-center items-center w-44 m-4 bg-slate-100">
        <Button>1h</Button>
        <Button>1D</Button>
        <Button>1W</Button>
        <Button>1M</Button>
      </div>
    </>
  );
};

export default TimeModifier;
