import React, { useState } from "react";

const LinkShortener = () => {
  const [linkValue, setLinkValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (linkValue === "") {
      setError("please add a link");
    } else if (!/^[a-zA-Z]+\.[a-zA-Z]+$/.test(linkValue)) {
      setError("please add a valid link");
      return;
    }
  };

  return (
    <form
      name="form"
      className="grid w-full grid-cols-1 justify-between rounded-lg bg-darkBlue bg-shorten-mobile bg-contain bg-right bg-no-repeat p-4 md:grid-cols-[3fr_minmax(200px,_1fr)] md:bg-shorten-desktop md:p-8"
    >
      {error !== "" && <p data-testid="error">{error}</p>}
      <input
        className="mb-2 rounded-lg py-2 pl-4"
        type="text"
        onChange={(e) => setLinkValue(e.target.value)}
        placeholder="Shorten a link here..."
        id="link-shortener"
        name="shorten"
      />
      <button
        className="mb-2 rounded-lg bg-btnBg py-2 text-white md:ml-16"
        onClick={(e) => handleSubmit(e)}
      >
        Shorten it!
      </button>
    </form>
  );
};

export default LinkShortener;
