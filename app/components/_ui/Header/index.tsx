"use client";

import contaAzulLogo from "@/public/conta-azul-logo.svg";
import Image from "next/image";
import { MenuHorizontal } from "../MenuHorizontal";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { SearchModal } from "../SearchModal";
import { EnterButton } from "./EnterButton";

export default function Header() {
  const [isOpenSearch, setIsOpenSearch] = useState<Boolean | null>(false);

  return (
    <header className="relative h-[80px] shadow-md">
      <div className="container mx-auto sm:px-[30px] h-full">
        <div className="grid grid-cols-2 content-center h-full">
          <div className="h-full items-center flex gap-5">
            <Image
              src={contaAzulLogo}
              alt="Logo Conta Azul"
              width={150}
              height={80}
              priority
            />
            <MenuHorizontal />
          </div>

          <div className="h-full justify-end items-center flex gap-7">
            <button
              className={`text-gray-400 hover:text-gray-500`}
              onClick={() => setIsOpenSearch(!isOpenSearch)}
            >
              <MagnifyingGlassIcon className={"h-6"} />

              {isOpenSearch && (
                <SearchModal onClose={() => setIsOpenSearch(false)} />
              )}
            </button>

            <div>
              <span className="hidden sm:inline-block text-gray-500 text-sm font-medium">
                Fale Conosco
              </span>
              <br />
              <a
                className="hidden sm:inline-block text-blue-400 text-sm font-medium"
                href="https://api.whatsapp.com/send/?phone=554730640460&text=Ol%C3%A1%21%20Estou%20interessado%20em%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20sistema."
                target="_blank"
              >
                WhatsApp
              </a>
            </div>

            <EnterButton />
          </div>
        </div>
      </div>
    </header>
  );
}
