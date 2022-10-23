import React from "react";
import { Link } from "react-router-dom";

const Btn = ({ children, goTo }: { children: String; goTo: String }) => {
  return (
    <button className="rounded-full bg-btnBg px-4 py-2 text-white hover:opacity-60">
      <Link to={`/${goTo}`}>{children}</Link>
    </button>
  );
};

export default Btn;
