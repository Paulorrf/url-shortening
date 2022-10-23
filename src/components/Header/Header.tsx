import React from "react";
import { useLocation } from "react-router-dom";
import Illustration from "../../assets/illustration-working.svg";

import Btn from "../Btn/Btn";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div className="hidden" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const Header = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center text-center md:grid-cols-2 md:flex-row-reverse md:gap-x-8">
      <div className="mb-4 -mr-12">
        <img
          className="w-96 md:w-[30rem]"
          src={Illustration}
          alt="working illustration"
        />
      </div>
      <div className="child:mb-4 md:w-[40rem]">
        <h1 className="text-2xl font-bold">MORE THAN JUST SHORTER LINKS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio illo
          quasi tenetur, perferendis voluptatem autem cupiditate dolores aliquid
          aut officiis?
        </p>
        <Btn goTo="getstarted">Get Started</Btn>
      </div>
      <LocationDisplay />
    </div>
  );
};

export default Header;
