import React from "react";

const CarriersCheckComp = ({ children }) => {
  return (
    <>
      <div className="flex items-center m-3 text-xl pointer ">
        <input type="checkbox" className="m-1 cursor-pointer " />
        <label>{children}</label>
      </div>
    </>
  );
};

export default CarriersCheckComp;
