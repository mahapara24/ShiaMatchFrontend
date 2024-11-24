import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "../components/HomePage/Hero";
import Footer from "../components/Footer";
import MatchSteps from "../components/HomePage/FindMatchForYou";
import CommunitySection from "../components/HomePage/CommunitySection";
import FeaturesSection from "../components/HomePage/FeaturesSection";
import ImageSection from "../components/HomePage/ImageSection";
import LogoSection from "../components/HomePage/LogoSection";
import AboutShiaMatch from "../components/HomePage/AboutShiaMatch";

export function HomePage() {
  return (
    <div className="">
      <Router>
        {" "}
        <Navbar />
        <HeroSection />
        <AboutShiaMatch />
        <MatchSteps />
        <CommunitySection />
        <FeaturesSection />
        <ImageSection />
        <LogoSection />
        <Footer />
      </Router>
    </div>
  );
}
