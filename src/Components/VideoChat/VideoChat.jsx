import React from "react";
import videoicon from "../../../Images/Icons/videoblack.png";
import muteicon from "../../../Images/Icons/muteblack.png";
import time from "../../../Images/Icons/timeicon.png";
import shuffle from "../../../Images/Icons/shuffle.png";
import end from "../../../Images/Icons/callend.png";
import dummymale from "../../../Images/DummyPictures/MaleDummypic.png";
import dummyfemale from "../../../Images/DummyPictures/FemaleDummypic.png";

import Narbar2 from "../Navbar/Navbar2";
import Navbar3 from "../Navbar/Navbar3";

function VideoChat() {
  return (
    <div className="h-[90vh] flex pt-3 pr-7 pl-7 pb-12  justify-between items-center  ">
      <div className=" h-full w-[84%] rounded-lg flex flex-col justify-between">
        <div className=" h-[88%] w-full rounded-lg flex justify-between">
          {/* <div className=" bg-gradient-to-b from-white via-[#333333] h-full w-[49%] rounded-lg"></div>
          <div className=" bg-gradient-to-b from-white via-[#333333] h-full w-[49%] rounded-lg"></div> */}
          <div className="bg-[radial-gradient(circle,_white,_black)] h-full w-[49%] rounded-lg p-8 relative ">
            <div className="h-full w-full  rounded-lg">
              <img
                src={dummymale}
                alt=""
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="  rounded-lg pr-2 absolute top-1 left-3 text-white">
              DummyUser01
            </div>
          </div>
          <div className="bg-[radial-gradient(circle,_white,_black)] h-full w-[49%] rounded-lg p-8 relative">
            <div className="h-full w-full  rounded-lg">
              <img
                src={dummyfemale}
                alt=""
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="  rounded-lg pr-2 absolute top-1 left-3 text-white">
              DummyUser02
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-l from-black via-[#333333] via-[#B868F1] via-[#333333] to-black h-[10%] w-full rounded-lg flex justify-centeritems-center  pr-2 pt-2 pb-2">
          <div className="h-full w-[20%] rounded-lg flex justify-around items-center ">
            <div className=" h-full w-[25%] bg-[#ffffffc2] rounded-lg flex justify-center items-center cursor-pointer transform-all duration-100 hover:scale-105  hover:bg-[#ffffff] active:scale-95 ">
              <img src={videoicon} alt="" className="h-9" />
            </div>
            <div className=" h-full w-[25%] bg-[#ffffffc2] rounded-lg flex justify-center items-center cursor-pointer transform-all duration-100 hover:scale-105 hover:bg-[#ffffff]   active:scale-95 ">
              <img src={muteicon} alt="" className="h-9" />
            </div>
          </div>
          <div className=" h-full full w-[50%] rounded-lg flex items-center p-3 bg-[#ffffff91] text-2xl transform-all duration-100 hover:bg-white cursor-pointer">
            Essential Data
          </div>
          <div className="h-full w-[30%] rounded-lg flex justify-around">
            <div className=" h-full w-[20%] bg-[#ffffffc2]  rounded-lg flex justify-center items-center cursor-pointer transform-all duration-100 hover:scale-105 hover:bg-[#ffffff] active:scale-95">
              <img src={time} alt="" className="h-9" />
            </div>
            <div className=" h-full w-[20%] bg-[#ffffffc2] rounded-lg flex justify-center items-center cursor-pointer transform-all duration-100 hover:scale-105 hover:bg-[#ffffff] active:scale-95">
              <img src={shuffle} alt="" className="h-7" />
            </div>
            <div className=" h-full w-[35%] bg-[#FF0707] rounded-lg flex justify-center items-center border-2 border-white  cursor-pointer transform-all duration-100 hover:scale-105  active:scale-95 ">
              <img src={end} alt="" className="h-12 rotate-45" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#B868F1] bg-[radial-gradient(circle,_black,_#B868F1,_black)] h-full w-[15%] rounded-lg flex flex-col p-2 justify-between">
        <div className="w-full bg-gradient-to-t from-white to bg-transparent h-[9%] rounded-lg flex justify-center items-center font-bold text-3xl">
          Heading
        </div>
        <div className="w-full bg-gradient-to-t from-white via-[#B868F1] to-white  h-[78%] rounded-lg flex justify-center items-center overflow-x-hidden overflow-y-scroll p-3 text-gray-900 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
          perspiciatis sint, quibusdam cupiditate molestias eligendi eum.
          Corrupti ad accusamus eius, tempore nihil beatae, aliquam, laboriosam
          cumque esse voluptatem veniam? Quibusdam. Lorem ipsum dolor sit amet
          Corrupti ad accusamus eius, tempore nihil beatae, aliquam, laboriosam
          djakdjs dfjsdjfn fsiowopeok
        </div>
        <div className="w-full bg-[#CDBDBD] h-[9%] rounded-lg text-white text-2xl font-bold flex justify-center items-center ">
          <button className="h-full w-full cursor-pointer transition-all delay-300 hover:scale-103 bg-[#6915A5] rounded-lg border-2">
            New Topic
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoChat;
