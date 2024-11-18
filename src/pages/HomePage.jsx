import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "../components/HomePage/Hero";
import Footer from "../components/Footer";
import MatchSteps from "../components/HomePage/FindMatchForYou";

export function HomePage() {
  return (
    <div className="">
      <Router>
        {" "}
        <Navbar />
        <HeroSection />
        <MatchSteps />
        <Footer />
      </Router>
    </div>
  );
}
