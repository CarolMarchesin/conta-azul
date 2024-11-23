import Image from "next/image";
import { Popover } from "../../Popover";
import { useState } from "react";
import { listContentButtonEnter } from "@/constants/listContentEnterButton";

export const EnterButton = () => {
  const [activeItem, setActiveItem] = useState<String | null>();

  const handleMouseEnter = () => {
    setActiveItem("Entrar");
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <>
      <Popover
        buttonPopover={
          <button
            className={`text-white items-center text-sm/10 bg-blue-500 h-[40px] px-7 rounded font-medium hidden lg:inline-flex`}
          >
            Entrar
          </button>
        }
        direction="right"
        isOpenPopoverPanel={activeItem === "Entrar"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {listContentButtonEnter.map((item, index) => (
          <a key={index} href={item.link} target="_blank">
            <div className="grid grid-cols-[auto,1fr] items-center gap-4 w-[190px] leading-3">
              <Image src={item.icon} alt="Pro" width={20} height={20} />
              <div>
                <div className="text-gray-400 font-medium hover:text-gray-600">
                  <div className=" text-[14px] pb-1">{item.title}</div>
                  <div className="text-[9px]">{item.description}</div>
                </div>
              </div>
            </div>

            {index < listContentButtonEnter.length - 1 && (
              <hr className="my-4" />
            )}
          </a>
        ))}
      </Popover>
    </>
  );
};
