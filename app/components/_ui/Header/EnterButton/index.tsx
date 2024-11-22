import Image from "next/image";
import ProSimbolo from "@/public/pro-simbolo.svg";
import MaisSimbolo from "@/public/mais-simbolo.svg";
import { Popover } from "../../Popover";
import { useState } from "react";

interface ListContentButtonToEnter {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const EnterButton = () => {
  const [activeItem, setActiveItem] = useState<String | null>();

  const handleMouseEnter = () => {
    setActiveItem("Entrar");
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const listContentButtonToEnter: ListContentButtonToEnter[] = [
    {
      title: "ERP Conta Azul Pro",
      description: "O ERP em nuvem que simplifica sua gestão financeira",
      icon: ProSimbolo,
      link: "https://login.contaazul.com/?_gl=1*1qqo7t0*_gcl_au*NTQ5MzkyODM4LjE3MzE2MDc0NDg.*_ga*MTQzOTI2NjIyMy4xNzMxNjA3NDQy*_ga_0ZF31QJEMG*MTczMjMxMTY5OC4xNy4xLjE3MzIzMTIxNjcuNjAuMC4w#/",
    },
    {
      title: "Conta Azul Mais",
      description: "O que sua contabilidade precisa em um só lugar",
      icon: MaisSimbolo,
      link: "https://mais.contaazul.com/?_gl=1*98uwvz*_gcl_au*NTQ5MzkyODM4LjE3MzE2MDc0NDg.*_ga*MTQzOTI2NjIyMy4xNzMxNjA3NDQy*_ga_0ZF31QJEMG*MTczMjMxMTY5OC4xNy4xLjE3MzIzMTIxODEuNDYuMC4w#/login",
    },
  ];

  return (
    <>
      <Popover
        buttonPopover={
          <button
            className={`text-white inline-flex items-center text-sm/10 bg-blue-500 h-[40px] px-7 rounded font-medium`}
          >
            Entrar
          </button>
        }
        isOpenPopoverPanel={activeItem === "Entrar"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {listContentButtonToEnter.map((item, index) => (
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

            {index < listContentButtonToEnter.length - 1 && (
              <hr className="my-4" />
            )}
          </a>
        ))}
      </Popover>
    </>
  );
};
