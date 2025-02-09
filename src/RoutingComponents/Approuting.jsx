import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingHome/LandingHome";
import VideoChat from "../Components/VideoChat/VideoChat";
import AudioChat from "../Components/AudioChat/AudioChat";
function Approuting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videochat" element={<VideoChat />} />
        <Route path="/audiochat" element={<AudioChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuting;
