import React, { useState } from "react";

import InputAddCarrier from "./InputAddCarrier";
import CarrierOverviewCarrier from "./CarrierOverviewCarrier";
const AddCarrier = ({ visibilityAddCarrier }) => {
  const equipment = [
    {
      key_id: 1,
      equipment: "Eq1",
    },
    {
      key_id: 2,
      equipment: "Eq2",
    },
  ];

  const carriers = [
    {
      key_id: 1,
      carrier: "TMP",
    },
    {
      key_id: 2,
      carrier: "LOP",
    },
    {
      key_id: 4,
      carrier: "FIN",
    },
    {
      key_id: 5,
      carrier: "UPP",
    },
  ];

  const [getCarrieData, setGetCarrieData] = useState("");

  const [carrierInfo, setCarrierInfo] = useState(carriers);

  const addCarrierTypeHandler = () => {
    setCarrierInfo([
      { key_id: Math.random(), carrier: getCarrieData },
      ...carrierInfo,
    ]);
  };

  return (
    <>
      <div className=" h-screen bg-red-100 flex  flex-row-reverse justify-center align-center w-4/6 h-4/6	 relative">
        <CarrierOverviewCarrier
          visibilityAddCarrier={visibilityAddCarrier}
          carriers={carrierInfo}
        />
        <div className="h-full w-1 bg-black	z-10 absolute left-2/4"></div>
        <InputAddCarrier
          visibilityAddCarrier={visibilityAddCarrier}
          equipment={equipment}
          setGetCarrieData={setGetCarrieData}
          addCarrierTypeHandler={addCarrierTypeHandler}
        />
      </div>
    </>
  );
};

export default AddCarrier;
