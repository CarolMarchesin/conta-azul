"use client";

import React, { useState } from "react";
import { menuData } from "@/constants/menuItems";
import MenuItem from "./MenuItem";

export const MenuHorizontal = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

  return (
    <>
      {menuData.map((item) => (
        <React.Fragment key={item.label}>
          {item.fields ? (
            <MenuItem
              item={item}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              activeSubItem={activeSubItem}
              setActiveSubItem={setActiveSubItem}
            />
          ) : (
            <button
              key={item.label}
              className={
                "text-darksilver inline-flex text-sm/10 font-medium items-center outline-none"
              }
            >
              {item.label}
            </button>
          )}
        </React.Fragment>
      ))}
    </>
  );
};