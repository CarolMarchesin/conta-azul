"use client";

import contaAzulLogo from "@/public/conta-azul-logo.svg";
import Image from "next/image";
import { MenuHorizontal } from "../MenuHorizontal";

export default function Header() {
  return (
    <header className="relative h-[80px] shadow-md">
      <div className="container mx-auto sm:px-[30px] h-full">
        <div className="flex content-center h-full gap-8">
          <Image
            src={contaAzulLogo}
            alt="Logo Conta Azul"
            width={150}
            height={80}
            priority
          />
          <MenuHorizontal />
        </div>
      </div>
    </header>
  );
}
