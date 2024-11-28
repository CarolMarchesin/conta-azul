"use client";

import contaAzulLogo from "@/public/assets/logos/conta-azul-logo.svg";
import Image from "next/image";
import { MenuHorizontal } from "../MenuHorizontal";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { SearchModal } from "../SearchModal";
import { EnterButton } from "./EnterButton";
import { MenuButton } from "./MenuButton";

export const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<Boolean | null>(false);

  return (
    <header className="fixed h-[80px] shadow-md w-full bg-white z-50">
      <div className="container mx-auto px-[15px] sm:px-[30px] lg:px-[32px] h-full">
        <div className="flex content-center h-full">
          <div className="h-full w-full items-center flex gap-7">
            <Image
              src={contaAzulLogo}
              alt="Logo Conta Azul"
              width={150}
              priority
              style={{ width: "150px", height: "auto" }}
            />
            <MenuHorizontal />
          </div>
          <div className="h-full w-full justify-end items-center flex gap-7">
            <button
              className={`text-gray-400 hover:text-gray-500 hidden lg:block`}
              onClick={() => setIsOpenSearch(!isOpenSearch)}
            >
              <MagnifyingGlassIcon className={"h-6"} />

              {isOpenSearch && (
                <SearchModal onClose={() => setIsOpenSearch(false)} />
              )}
            </button>

            <div>
              <span className="text-gray-500 text-sm font-medium">
                Fale Conosco
              </span>
              <br />
              <a
                className="text-blue-400 text-sm font-medium"
                href="https://api.whatsapp.com/send/?phone=554730640460&text=Ol%C3%A1%21%20Estou%20interessado%20em%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20sistema."
                target="_blank"
              >
                WhatsApp
              </a>
            </div>

            <EnterButton />
            <MenuButton />
          </div>
        </div>
      </div>
    </header>
  );
}
