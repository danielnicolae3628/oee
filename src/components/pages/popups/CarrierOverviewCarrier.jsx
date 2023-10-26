import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import CarriersCheckComp from "./CarriersCheckComp";

const CarrierOverviewCarrier = ({ visibilityAddCarrier, carriers }) => {
  return (
    <>
      <div className="w-full h-96 relative uppercase">
        {/* <div className="h-full  w-1 bg-red-500"></div> */}
        <div className="flex flex-row-reverse  m-8 w-full  absolute top-50 right-2">
          <button onClick={visibilityAddCarrier} className="text-2xl">
            <FaRegWindowClose />
          </button>
        </div>
        <div className="flex flex-col absolute h-96 w-96 bg-red-300 top-48 left-2/4  m-14">
          {carriers.map((carrier_type) => (
            <CarriersCheckComp key={carrier_type.key_id}>
              {carrier_type.carrier}
            </CarriersCheckComp>
          ))}

          <button className="text-2xl h-12 w-32 border absolute left-1/3 top-2/3">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CarrierOverviewCarrier;
