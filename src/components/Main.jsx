import React from "react";
import { Banner } from "./Banner";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { Projects } from "./Projects";

export default function Main() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}
