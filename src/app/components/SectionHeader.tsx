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
    <div className="flex flex-col md:flex-row justify-between items-start mb-14 w-full">
      <h2 className={`text-3xl font-bold ${headerTextColor} shrink-0`}>
        <span className="relative">
          {title}
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-[#01A7E1] to-[#0152A1]"></span>
        </span>
      </h2>
      <div
        className={`${headerTextColor} flex flex-col space-y-3 mt-6 md:mt-0 max-w-md ml-auto`}
      >
        <p className="text-lg">{description}</p>
        {contactText && (
          <p>
            {contactText}{" "}
            <span
              onClick={onContactClick}
              className="text-[#01A7E1] hover:text-[#0152A1] cursor-pointer transition-colors duration-300 font-medium underline underline-offset-2"
            >
              Contact us
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
