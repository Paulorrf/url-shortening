import React from "react";
import BoostLink from "./components/BoostLink/BoostLink";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LinkShortener from "./components/LinkShortener/LinkShortener";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="mx-8">
        <Header />
        <LinkShortener />
        <Content />
      </div>
      <BoostLink />
      <Footer />
    </div>
  );
}

export default App;
