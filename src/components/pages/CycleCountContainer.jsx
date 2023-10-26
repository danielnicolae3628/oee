import React from "react";
import CycleCountEq1 from "./CycleCountEq1";
import CycleCountEq2 from "./CycleCountEq2";
import TimeModifier from "./TimeModifier";

const CycleCountContainer = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="m-4  font-bold	">Cycle Count</h1>
        </div>
        <div className=" flex justify-center align-center">
          <TimeModifier />
        </div>
        <div>
          <CycleCountEq1 />
          <CycleCountEq2 />
        </div>
      </div>
    </>
  );
};

export default CycleCountContainer;
