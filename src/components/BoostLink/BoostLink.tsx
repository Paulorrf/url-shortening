import React from "react";
import Btn from "../Btn/Btn";

const BoostLink = () => {
  return (
    <div className="flex h-52 flex-col items-center justify-center bg-darkBlue bg-boost-mobile bg-cover bg-center bg-no-repeat md:bg-boost-desktop">
      <h2 className="font-bold text-white">Boost your links today</h2>
      <div className="-mb-12 mt-4">
        <Btn goTo="getstarted">Get Started</Btn>
      </div>
    </div>
  );
};

export default BoostLink;
