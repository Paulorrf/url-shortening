import React from "react";
import Illustration from "../../assets/illustration-working.svg";

import Btn from "../Btn/Btn";

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
    </div>
  );
};

export default Header;
