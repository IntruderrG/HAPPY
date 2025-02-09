import { useState } from "react";
import React from "react";
import "./App.css";
import Approuting from "./RoutingComponents/Approuting";
import Footer from "./Components/Footer/Footer";
import NavRouting from "./NavRouting";
import Navbar1 from "./Components/Navbar/Navbar1";

function App() {
  return (
    <div>
      <Navbar1 />
      <Approuting />
      <Footer />
    </div>
  );
}

export default App;
