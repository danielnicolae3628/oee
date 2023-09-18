import React from "react";

const AddComponents = ({ children }) => {
  return (
    <>
      <div className="p-2  my-4 ">
        <button className="text-lg	hover:bg-sky-700 pointer p-2 rounded-xl hover:text-2xl hover:transition-all	 ">
          {children}
        </button>
      </div>
    </>
  );
};

export default AddComponents;
