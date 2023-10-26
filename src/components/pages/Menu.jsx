import React from "react";
import { FaBars } from "react-icons/fa";

const Menu = ({ setVisibilityBar }) => {
  return (
    <>
      <div className="">
        <div
          className=" text-3xl	cursor-pointer p-4 hover:transition-all	hover:text-4xl	"
          onClick={setVisibilityBar}
        >
          <FaBars />
        </div>
      </div>
    </>
  );
};

export default Menu;
