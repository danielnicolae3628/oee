import React, { useState } from "react";

const CarrierModifier = () => {
  const [carrierVisibility, setCarrierVisibility] = useState(true);

  let visible = "visible flex flex-col";
  let invisible = "invisible";

  //   const carrierShowHandler = () => {
  //     setCarrierVisibility(!carrierShowHandler);
  //   };

  return (
    <>
      <div className="flex flex-col bg-red-700 w-5/12  shrink		">
        <button
          className="hover:bg-slate-500 p-1"
          onClick={() => {
            setCarrierVisibility(!carrierVisibility);
          }}
        >
          Select Carrier Type
        </button>
        <div className={carrierVisibility ? invisible : visible}>
          <button className="hover:bg-slate-500 p-1">Carr1</button>
          <button className="hover:bg-slate-500 p-1">Carr2</button>
          <button className="hover:bg-slate-500 p-1">Carr3</button>
        </div>
      </div>
    </>
  );
};

export default CarrierModifier;
