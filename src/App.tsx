import React from "react";
import Header from "./components/Header/Header";
import LinkShortener from "./components/LinkShortener/LinkShortener";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="mx-8">
        <Header />
        <LinkShortener />
      </div>
    </div>
  );
}

export default App;
