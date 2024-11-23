import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

interface DropdownButtonProps {
  label: string;
  index: number;
  isOpenDropdown: number | null;
  activeItem: number | null;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onClick: (index: number) => void;
  children: React.ReactNode;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  label,
  index,
  isOpenDropdown,
  activeItem,
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
}) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className={`text-black font-medium text-sm inline-flex items-center justify-center ${
            isOpenDropdown === index
              ? "bg-grayclean text-blue-500 h-10 w-full rounded-md"
              : ""
          }`}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={onMouseLeave}
          onClick={() => onClick(index)}
        >
          {label}
          <ChevronDownIcon
            className={`ml-1 transition-transform duration-500 w-5 ${
              activeItem === index ? "-rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpenDropdown === index && (
       <div className="flex mt-4">
        <div className="overflow-hidden">
         {children}
         </div>
         </div>
      )}
    </div>
  );
};