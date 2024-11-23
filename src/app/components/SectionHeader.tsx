// components/SectionHeader.tsx
import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  contactText?: string; // Optional contact text
  onContactClick: () => void;
  headerTextColor?: string; // Optional custom color for header text
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  contactText,
  onContactClick,
  headerTextColor = "text-white",
}) => {
  return (
    <div className="flex flex-row justify-between mb-10">
      <h3 className={`text-3xl ${headerTextColor}`}>{title}</h3>
      <span
        className={"text-right flex flex-col lg:block" + ` ${headerTextColor}`}
      >
        {description} <br />
        <p>
          {contactText}{" "}
          <span
            onClick={onContactClick}
            className="text-[#01A7E1] underline cursor-pointer"
          >
            Contact us
          </span>
        </p>
      </span>
    </div>
  );
};

export default SectionHeader;
