import ProSimbolo from "@/public/pro-simbolo.svg";
import MaisSimbolo from "@/public/mais-simbolo.svg";

interface ListContentEnterButton {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const listContentButtonEnter: ListContentEnterButton[] = [
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
