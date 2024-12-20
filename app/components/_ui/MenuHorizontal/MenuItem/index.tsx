import React from "react";
import { Popover } from "../../Popover";

interface MenuItemProps {
  item: {
    label: string;
    fields?: Array<{ label: string; fields?: Array<any> }>;
  };
  activeItem: string | null | void;
  setActiveItem: (label: string | null) => void;
  activeSubItem?: string | null | void;
  setActiveSubItem?: (label: string | null) => void;
  isSubItem?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  activeItem,
  setActiveItem,
  activeSubItem,
  setActiveSubItem,
  isSubItem = false,
}) => {
  const handleMouseEnter = () => {
    setActiveItem(item.label);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);

    if (setActiveSubItem) {
      setActiveSubItem(null);
    }
  };

  return (
    <Popover
      buttonPopover={
        <button
          className={`${
            isSubItem ? "text-black h-2" : "text-darksilver"
          } font-medium inline-flex items-center outline-none text-sm/10`}
        >
          {item.label}
        </button>
      }
      isOpenPopoverPanel={activeItem === item.label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isSubItem={isSubItem}
    >
      <div
        className={`grid ${
          item?.fields && item?.fields.length <= 5
            ? "grid-cols-1 gap-y-4"
            : "grid-cols-3 gap-y-5 gap-x-10"
        }`}
      >
        {item?.fields?.map((subItem: any) => (
          <div className="flex" key={subItem.label}>
            {!subItem.fields ? (
              <span className="font-medium">{subItem.label}</span>
            ) : (
              <MenuItem
                item={subItem}
                activeItem={activeSubItem}
                setActiveItem={setActiveSubItem!}
                isSubItem={true}
              />
            )}
          </div>
        ))}
      </div>
    </Popover>
  );
};
