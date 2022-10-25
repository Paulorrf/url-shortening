import React from "react";
import BrandIcon from "../../assets/icon-brand-recognition.svg";
import DetailedIcon from "../../assets/icon-detailed-records.svg";
import CustomizableIcon from "../../assets/icon-fully-customizable.svg";
import ContentCard from "./ContentCard";

function HorizontalLine() {
  return <div className="mx-auto h-20 w-2 bg-btnBg"></div>;
}

const Content = () => {
  return (
    <div className="mt-8 mb-8">
      <div className="mb-16 text-center">
        <h2 className="mb-2 font-bold">Advanced statistics</h2>
        <p className="text-grayViolet">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          voluptatum similique sunt adipisci asperiores! Suscipit!
        </p>
      </div>

      <ContentCard
        Icon={BrandIcon}
        title="Brand Recognition"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          facere, ipsum quod consequatur reiciendis vel?"
      />

      <HorizontalLine />

      <ContentCard
        Icon={DetailedIcon}
        title="Detailed Records"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          facere, ipsum quod consequatur reiciendis vel?"
      />

      <HorizontalLine />

      <ContentCard
        Icon={CustomizableIcon}
        title="Fully Customizable"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          facere, ipsum quod consequatur reiciendis vel?"
      />
    </div>
  );
};

export default Content;
