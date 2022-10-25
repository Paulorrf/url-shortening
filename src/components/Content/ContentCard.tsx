import React from "react";

const ContentCard = ({
  Icon,
  text,
  title,
}: {
  Icon: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="text-center">
      <div className="flex flex-col px-4 shadow-sm shadow-darkBlue">
        <div className="mx-auto -mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-darkBlue">
          <img className="h-10 w-10" src={Icon} alt={`${title} icon`} />
        </div>
        <h2 className="pt-2">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContentCard;
