import React from "react";

const LinkShortener = () => {
  return (
    <div className="">
      <input
        className="border border-darkViolet"
        type="text"
        placeholder="Shorten a link here..."
        id="link-shortener"
      />
      <button className="border border-darkViolet">Shorten it!</button>
    </div>
  );
};

export default LinkShortener;
