import { XMarkIcon } from "@heroicons/react/16/solid";
import React, { ReactNode, useEffect } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
    >
      <div
        className={`fixed inset-0 bg-bluedrawer bg-opacity-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 w-[300px] md:w-[350px] h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <XMarkIcon
          className="absolute top-3 right-3 h-9 cursor-pointer text-gray-400"
          onClick={onClose}
        />
        <div className="p-7 pt-14 h-full flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
