import React from "react";
import OeeChart from "./Oee";
import CycleCountContainer from "./CycleCountContainer";
// import CarrierModifier from "./CarrierModifier";

const ContainerOee = () => {
  return (
    <>
      <div className=" flex flex-row justify-between items-center ">
        <div className="w-5/12 h-5/12">
          <OeeChart />
          <div className="bg-black w-full	 h-px	"></div>
          <CycleCountContainer />
        </div>
        {/* <div className="w-5/12 h-5/12">
          <CycleCount />
        </div> */}
      </div>
    </>
  );
};

export default ContainerOee;
