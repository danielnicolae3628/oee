import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginLink = () => {
  return (
    <div>
      <Link to={"login"}>
        <div className=" text-3xl	cursor-pointer p-4 hover:transition-all	hover:text-4xl	">
          
          <FaUserAlt/>
        </div>
      </Link>
    </div>
  );
};

export default LoginLink;
