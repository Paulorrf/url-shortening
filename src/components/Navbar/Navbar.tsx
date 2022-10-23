import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/logo.svg";

import Btn from "../Btn/Btn";

const Navbar = () => {
  const [showHamb, setShowHamb] = useState(false);

  const handleHamb = () => {
    setShowHamb((prev) => !prev);
  };

  return (
    <div className="relative flex w-full items-center justify-between  px-4 pt-4">
      <div>
        <img src={Logo} alt="logo" />
      </div>

      <div className="z-20 md:hidden">
        <button data-testid="hamb-btn" onClick={handleHamb}>
          {showHamb ? (
            <AiOutlineClose data-testid="close-menu" size="40" color="#fff" />
          ) : (
            <GiHamburgerMenu data-testid="open-menu" size="40" color="#000" />
          )}
        </button>
      </div>

      <div
        data-testid="hamb-list"
        className={`md:text-black absolute top-0 right-0 z-10 h-96 w-36 justify-center rounded-bl-lg bg-darkBlue text-gray transition-[margin] duration-300 ease-in-out md:static md:mr-0 md:flex md:h-full md:w-full md:animate-none md:items-center md:bg-transparent md:px-12 ${
          showHamb ? "mr-0" : "-mr-60"
        } ${showHamb ? "flex" : "hidden"} `}
      >
        <div className="pt-16 md:flex  md:w-full md:items-center md:justify-around md:pt-0">
          <ul className="flex w-full flex-col text-center child:mb-2 md:flex-row md:justify-around md:child:mb-0">
            <li>dsadsads</li>
            <li>dsadsads</li>
            <li>dsadsads</li>
            <li>dsadsads</li>
          </ul>

          <div className="mt-8 text-center child:mb-2 md:ml-8 md:mt-0 md:flex md:w-1/4 md:items-center md:justify-around md:child:mb-0">
            <p>login</p>
            <Btn goTo="signup">sign up</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
