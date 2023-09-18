import React from "react";
import ContainerOee from "./ContainerOee";
import NavBar from "./NavBar";

const Container = () => {
  // const [visibilityBar, setVisibilityBar] = useState(false);

  // const visibilityBarHandler = () => {
  //   setVisibilityBar(!visibilityBar);
  // };
  //absolute inset-y-0 right-0
  return (
    <>
      <div className="relative">
        <div>
          <ContainerOee />
        </div>
        <NavBar />

        {/* {visibilityBar ? (
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
        )} */}
      </div>
    </>
  );
};

export default Container;

/*
{true ? first image : just bars}
*/
