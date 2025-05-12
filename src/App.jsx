
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { WhyChooseUs } from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs/>
      <Testimonials />
      <ContactUs/>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
