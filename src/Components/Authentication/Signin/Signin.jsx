import React from "react";
import sigincartoon from "../../../../Images/3-D Characters/cat2 (3).png";

function Signin() {
  return (
    <div className="h-[100vh] w-full  flex justify-center items-center bg-white ">
      <div className=" h-full w-[38%] relative bg-transparent">
        <div className="h-full w-full">
          <img
            src={sigincartoon}
            alt=""
            className="h-full w-full object-cover translate-y-10 z-1"
          />
        </div>
        <div
          className="absolute top-[45%] left-5 w-[90%] p-5 
  bg-gradient-to-br from-[#fdfcfb] via-[#f1c27d] to-[#f9a826] 
  shadow-[0_4px_10px_rgba(0,0,0,0.5)] rounded-xl rotate-7 flex items-center"
        >
          <form className="flex w-full justify-between items-center">
            {/* Left Section - Input Fields */}
            <div className="w-1/2 pr-4">
              <label className="block text-[#5a3d2b] font-semibold mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-lg border cursor-text border-[#c87f42] 
          focus:outline-none focus:ring-2 focus:ring-[#ff9b42] bg-[#fff8f0] text-[#5a3d2b]"
              />

              <label className="block text-[#5a3d2b] font-semibold mt-3 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 rounded-lg border cursor-text border-[#c87f42] 
          focus:outline-none focus:ring-2 focus:ring-[#ff9b42] bg-[#fff8f0] text-[#5a3d2b]"
              />

              <button
                type="submit"
                className="mt-4 w-full bg-[#d87a3b] text-white py-2 rounded-lg 
          hover:bg-[#c56a30] transition cursor-pointer font-semibold shadow-md"
              >
                Sign In
              </button>
            </div>

            {/* Divider */}
            <div className="w-[2px] bg-[#ad6938] h-24 mx-3"></div>

            {/* Right Section - Login Options */}
            <div className="w-1/2 text-center">
              <button
                type="button"
                className="w-full bg-[#f1c27d] text-[#5a3d2b] py-2 rounded-lg mb-2 
          hover:bg-[#e0a668] transition cursor-pointer font-bold shadow-md"
              >
                Login
              </button>
              <button
                type="button"
                className="w-full bg-[#5a3d2b] text-white py-2 rounded-lg 
          hover:bg-[#3d271c] transition cursor-pointer font-bold shadow-md"
              >
                Google Sign-in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
// bg-[url('/Images/Background-2.jpg')] bg-no-repeat bg-cover
