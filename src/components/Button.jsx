import React from "react";
import { useHistory } from "react-router-dom";

const Button = (props) => {
  const history = useHistory();
  return (
    <div className="basis-1/2 flex justify-end">
      <button
        className="p-2 hover:bg-teal-900 w-28 mx-3 rounded-full font-dm text-white text-lg hover:text-xl transition duration-500 ease-in-out"
        onClick={() => {
          switch (props.name) {
            case "Login":
              history.push("/login");
              break;
            case "Logout":
              localStorage.clear()
              history.push("/");
            case "Register":
              history.push("/");
            default:
              history.push("/");
              break;
          }
        }}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
