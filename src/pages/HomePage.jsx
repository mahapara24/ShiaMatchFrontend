import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "../components/HomePage/Hero";

export function HomePage() {
  return (
    <div className="">
      <Router>
        {" "}
        <Navbar />
        <HeroSection />
      </Router>
      HomePage
    </div>
  );
}
