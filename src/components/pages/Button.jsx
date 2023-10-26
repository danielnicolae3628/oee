import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button className="m-2  hover:bg-slate-500">{children}</button>
    </>
  );
};

export default Button;
