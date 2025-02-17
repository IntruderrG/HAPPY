import React from "react";
import { useNavigate } from "react-router-dom";
import muteicon from "../../../Images/Icons/muteblack.png";
import time from "../../../Images/Icons/timeicon.png";
import shuffle from "../../../Images/Icons/shuffle.png";
import shufflewhite from "../../../Images/Icons/shufflewhite.png";
import expand from "../../../Images/Icons/expand.png";
import end from "../../../Images/Icons/callend.png";
import audiochar from "../../../Images/3-D Characters/audio model.png";
import mic from "../../../Images/3-D Characters/mic.png";

function AudioChat() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[100vh] w-full flex items-center justify-center fixed z-[-10] pt-20 pl-5">
        <div className="sm:w-60 sm:h-60 md:w-90 md:h-90 lg:w-110 lg:h-110 bg-gray-900 rounded-full flex items-center justify-center">
          <div className="sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-gray-950 rounded-full"></div>
        </div>
      </div>
      <div className="h-[100vh] w-full bg-transparent flex">
        <div className="h-[100vh] w-[25%]  p-1 flex flex-col">
          <div className="h-[13%] w-full  p-1 flex items-center justify-center">
            <div
              className="h-[70%] w-full  flex items-center pl-1 font-bold text-5xl cursor-pointer"
              onClick={() => navigate("/")}
            >
              H A P P Y
            </div>
          </div>
          <div className="h-[87%] w-full flex items-center justify-center pb-20">
            <div className="h-[55%] w-[60%] bg-[#f4dfff] rounded-lg flex items-center justify-center p-4  shadow-[-5px_8px_5px_rgba(0,0,0,0.3),-8px_12px_10px_rgba(0,0,0,0.3)]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              voluptatem vel nesciunt saepe. Ex, laudantium ullam? Distinctio,
              obcaecati fugit. Necessitatibus, corporis? Numquam sapiente minus
              nemo beatae rerum provident, amet dolores.
            </div>
          </div>
        </div>
        <div className="h-[100vh] w-[50%]  p-1 flex flex-col justify-between relative">
          <div className="h-[85%] w-full flex items-center justify-center overflow-hidden">
            <img src={audiochar} alt="" />
          </div>
          <div className="h-[14.5%] w-full flex pt-4 justify-around  pr-4 pl-4">
            <div className="bg-[#872F87] h-[55%] w-[8%] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ">
              <img src={expand} alt="" className="scale-80" />
            </div>
            <div className="bg-[#872F87] h-[55%] w-[70%] rounded-lg flex items-center justify-center text-white text-2xl  ">
              AI Tutor is more effective than Human Tutor
            </div>
            <div className="bg-[#872F87] h-[55%] w-[8%] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
              <img src={shufflewhite} alt="" className="scale-80" />
            </div>
          </div>
          <div className="absolute h-[50%] w-[40%]  top-0 overflow-hidden">
            <img
              src={mic}
              alt=""
              className="scale-150 -translate-x-12  -translate-y-2"
            />
          </div>
        </div>
        <div className="h-[100vh] w-[25%]  p-1">
          <div className="h-[13%] w-full flex items-center justify-center p-1">
            <div className="h-[70%] w-full p-1 flex justify-between">
              <div className="w-[79%] h-full flex justify-end text-2xl space-x-5 items-center p-2">
                <a
                  href="/dashboard"
                  className="underline cursor-pointer  transition-all duration-300 hover:scale-105"
                >
                  dashboard
                </a>
                <a
                  href="/report"
                  className="underline cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  report
                </a>
              </div>
              <div className="w-[19%] h-full flex items-center justify-center">
                <img
                  src="https://img.icons8.com/ios-glyphs/60/user--v1.png"
                  alt="User Icon"
                  className=" cursor-pointer transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="h-[87%] w-full flex items-center justify-end pr-5 pb-15">
            <div className=" h-[70%] w-[25%] flex flex-col justify-around items-center">
              <div className="h-[16%] w-[76%] bg-[#f4dfff]   rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95  flex items-center justify-center">
                <img src={muteicon} alt="" className="scale-80" />
              </div>
              <div className="h-[16%] w-[76%] bg-[#f4dfff]  rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center">
                <img src={time} alt="" className="scale-80" />
              </div>
              <div className="h-[16%] w-[76%] bg-[#f4dfff]  rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center ">
                <img src={shuffle} alt="" className="scale-60" />
              </div>
              <div className="h-[16%] w-[76%] bg-red-600  rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center">
                <img src={end} alt="" className="rotate-45 scale-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AudioChat;
