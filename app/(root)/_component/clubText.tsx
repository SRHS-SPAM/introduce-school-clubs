import React from "react";
import "./ClubText.css";

interface ClubTextProps {
  title: string;
  description: string;
}

const ClubText = ({ title, description }: ClubTextProps) => {
  const truncatedTitle =
    title.length > 30 ? `${title.substring(0, 30)}...` : title;
  const truncatedCaption =
    description.length > 20
      ? `${description.substring(0, 20)}...`
      : description;

  return (
    <div className="mx-9 flex text-white text-[13px]">
      <div className="w-[50px] text-[13px] mr-5 font-normal text-nowrap font-sans">
        {truncatedTitle}
      </div>
      <p className="flex-1 text-[13px] font-normal font-sans caption">
        {truncatedCaption}
      </p>
    </div>
  );
};

export default ClubText;
