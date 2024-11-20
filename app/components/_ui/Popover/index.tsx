import Image from "next/image";
import ChevronDown from "@/public/icons/chevron-down.svg";

interface PainelProps {
  text: any;
  children: any;
  isOpen: boolean;
  isSubItem?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const Popover: React.FC<PainelProps> = ({
  text,
  children,
  isOpen,
  isSubItem,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <button
          className={`${
            isSubItem ? "text-black h-2" : "text-darksilver"
          } inline-flex text-sm/10 font-medium items-center outline-none`}
          onMouseEnter={onMouseEnter}
        >
          <span>{text}</span>
          <Image
            src={ChevronDown}
            alt="Down"
            width={15}
            className={`ml-1 transition-transform duration-500 ${
              isOpen && !isSubItem
                ? "-rotate-180"
                : isSubItem
                ? "-rotate-90"
                : ""
            }`}
          />
        </button>

        {isOpen && (
          <div
            className={`painel ${
              isSubItem
                ? "fixed left-full -mt-8 ml-10"
                : "absolute left-1/2 z-10 mt-11"
            } z-10 flex w-screen max-w-max -translate-x-1/4 px-4 transition cursor-pointer`}
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
