import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingHome/LandingHome";
import VideoChat from "../Components/VideoChat/VideoChat";
import AudioChat from "../Components/AudioChat/AudioChat";
import Pagenotfound from "./PageNotFound/pagenotfound";
import Explore from "../Components/Explore/Explore";
import ContactUS from "../Components/HelpSection/Help";
import Signin from "../Components/Authentication/Signin/Signin";
import SignUp from "../Components/Authentication/Signup/signup";
function Approuting() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/videochat" element={<VideoChat />} />
      <Route path="/audiochat" element={<AudioChat />} />
      <Route path="/dashboard" />
      <Route path="/contact-us" element={<ContactUS />} />
      <Route path="/report" />
      <Route path="/about" />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default Approuting;
