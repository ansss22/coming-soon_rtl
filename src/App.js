import React from "react";
import {
  Cta,
  Faq,
  Features,
  Footer,
  Header,
  Brand,
  Possibility,
} from "./container";
import "./App.css";

const App = () => (
  <div dir="rtl" className="App">
    <div className="gradient__bg">
      <Header />
    </div>
    <Brand />
    <Features />
    <Possibility />
    <Cta />
    <Faq />
    <Footer />
  </div>
);

export default App;
