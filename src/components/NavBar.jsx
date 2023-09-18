import React, { useState } from "react";
import LoginLink from "./LoginLink";
import Menu from "./Menu";
import AddComponents from "./AddComponents";

const NavBar = () => {
  const [visibilityBar, setVisibilityBar] = useState(false);

  const visibilityBarHandler = () => {
    setVisibilityBar(!visibilityBar);
  };

  return (
    <>
      {visibilityBar ? (
        <div>
          <div className="absolute inset-y-0 right-0 w-80 h-full bg-red-700">
            <div className=" relative ">
              <div className="flex justify-around">
                <LoginLink />
                <Menu setVisibilityBar={visibilityBarHandler} />
              </div>
              <div className="absolute top-20	left-8	">
                <AddComponents>Add New Equipment</AddComponents>
                <AddComponents>Add new Carrier</AddComponents>
                <AddComponents>Add New TF OEE</AddComponents>
                <AddComponents>Add New TF CC</AddComponents>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-y-0 right-0">
          <div className="relative">
            <div className="absolute inset-y-0 right-0 ">
              <Menu setVisibilityBar={visibilityBarHandler} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
