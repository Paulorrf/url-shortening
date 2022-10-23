import React, { useState } from "react";

const LinkShortener = () => {
  const [linkValue, setLinkValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!/^[a-zA-Z]\.[a-zA-Z]$/.test(linkValue)) {
      setError("please add a valid link");
      return;
    }
  };

  return (
    <div className="">
      {error !== "" && <p data-testid="error">{error}</p>}
      <input
        className="border border-darkViolet"
        type="text"
        onChange={(e) => setLinkValue(e.target.value)}
        placeholder="Shorten a link here..."
        id="link-shortener"
      />
      <button
        className="border border-darkViolet"
        onClick={(e) => handleSubmit(e)}
      >
        Shorten it!
      </button>
    </div>
  );
};

export default LinkShortener;
