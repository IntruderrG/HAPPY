import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingHome/LandingHome";
import VideoChat from "../Components/VideoChat/VideoChat";
import AudioChat from "../Components/AudioChat/AudioChat";
import Pagenotfound from "./PageNotFound/pagenotfound";
function Approuting() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/videochat" element={<VideoChat />} />
      <Route path="/audiochat" element={<AudioChat />} />
      <Route path="/dashboard" />
      <Route path="/contact-us" />
      <Route path="/report" />
      <Route path="/about" />
      <Route path="/explore" />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default Approuting;
