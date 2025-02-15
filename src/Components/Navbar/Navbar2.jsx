import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar2() {
  const navigate = useNavigate();
  return (
    <div className="h-[10vh] m-1.5 flex justify-between">
      <div
        className="w-2xl font-bold text-5xl flex items-center p-4"
        onClick={() => {
          navigate("/");
        }}
      >
        H A P P Y
      </div>
      <div className="w-2xl flex justify-end items-center underline text-2xl gap-x-10">
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 "
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          dashboard
        </div>
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={() => {
            navigate("/report");
          }}
        >
          report
        </div>
      </div>
      <div className=" w-24 flex items-center justify-center transform-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
        <img
          src="https://img.icons8.com/ios-glyphs/60/user--v1.png"
          alt="User Icon"
        />
      </div>
    </div>
  );
}

export default Navbar2;
