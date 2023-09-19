import React,{useState} from "react";
import ContainerOee from "./ContainerOee";
import NavBar from "./NavBar";
import AddCarrier from "./popups/AddCarrier";

const Container = () => {
  const [visibilityCarrier, setVisibilityCarrier] = useState(true);

  const visibilityAddCarrier = ()=>{
    setVisibilityCarrier(!visibilityCarrier);
  };


  return (
    <>
     { visibilityCarrier ? <div className="relative">
        <div>
          <ContainerOee />
        </div>
        <NavBar visibilityAddCarrier={visibilityAddCarrier}/>

      </div> : <AddCarrier  visibilityAddCarrier={visibilityAddCarrier}/> }
    </>
  );
};

export default Container;

/*
{true ? first image : just bars}
*/
