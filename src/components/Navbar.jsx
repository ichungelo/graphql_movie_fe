import React from "react";
import image from "../assets/images/ticket.png";
import Button from "./Button";

const Navbar = (props) => {
  return (
    <div className="p-5 bg-teal-700 flex flex-row fixed w-screen z-30">
      <div className="basis-1/2 flex flex-row w-80">
        <img className="h-12 w-12 mx-2" src={image} />
        <p className="text-white font-bold font-dm text-3xl pt-2 basis-11/12">
          Movie App
        </p>
      </div>
      <Button name={props.button} />
    </div>
  );
};

export default Navbar;
