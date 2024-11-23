import { ChevronDownIcon } from "@heroicons/react/16/solid";
import React, { ReactElement } from "react";

interface PopoverProps {
  buttonPopover: ReactElement;
  children?: any;
  isOpenPopoverPanel: boolean;
  isSubItem?: boolean;
  direction?: "left" | "right";
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const Popover: React.FC<PopoverProps> = ({
  buttonPopover,
  children,
  isOpenPopoverPanel,
  isSubItem,
  direction = "left",
  onMouseEnter,
  onMouseLeave,
}) => {
  const buttonElement = buttonPopover
    ? React.cloneElement(
        buttonPopover,
        { onMouseEnter: onMouseEnter },
        <>
          {buttonPopover.props.children}
          <ChevronDownIcon
            className={`ml-1 transition-transform duration-500 w-5 ${
              isOpenPopoverPanel && !isSubItem
                ? "-rotate-180"
                : isSubItem
                ? "-rotate-90"
                : ""
            }`}
          />
        </>
      )
    : null;

  const getPopoverPositionClasses = () => {
    switch (direction) {
      case "left":
        return "left-1/2 -translate-x-1/4 mt-10";
      case "right":
        return "right-1/4 translate-x-[15%] mt-3";
      default:
        return "";
    }
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        {buttonElement}

        {isOpenPopoverPanel && (
          <div
            className={`painel ${
              isSubItem ? "fixed left-full -mt-6 ml-10" : "absolute"
            } 
            ${getPopoverPositionClasses()} z-10 flex w-screen max-w-max -translate-x-1/4 px-4 transition cursor-pointer`}
            onMouseLeave={onMouseLeave}
          >
            <div className="w-screen max-w-max flex-auto overflow-hidden bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5 p-5">
              <div className="p-4">{children}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
