import React from "react";
import CarriersCheckComp from "./CarriersCheckComp";

const InputAddCarrier = ({
  visibilityAddCarrier,
  equipment,
  setGetCarrieData,
  addCarrierTypeHandler,
}) => {
  const getDataHandlare = (e) => {
    console.log(e.target.value);
    setGetCarrieData(e.target.value);
  };

  return (
    <>
      <div className="flex  flex-col w-3/6 h-full justify-center items-center absolute	left-5 top-5">
        <input
          type="text"
          placeholder="add carrier"
          className="w-72 h-12 text-xl m-4  border-solid border-2 border-sky-500 focus:outline-none placeholder:text-gray-500 pl-[5px] uppercase"
          onChange={(e) => {
            getDataHandlare(e);
          }}
        />

        <div className="flex">
          {/* <CarriersCheckComp>Eq1</CarriersCheckComp>
          <CarriersCheckComp>Eq2</CarriersCheckComp> */}
          {equipment.map((data) => (
            <CarriersCheckComp key={data.key_id}>
              {data.equipment}
            </CarriersCheckComp>
          ))}
        </div>

        <button
          onClick={addCarrierTypeHandler}
          className="border border-sky-500 w-48 m-2 "
        >
          Add carrier
        </button>
      </div>
    </>
  );
};

export default InputAddCarrier;
