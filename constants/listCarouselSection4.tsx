
import PubliMarket from "@/public/assets/images/carouselSection4/publi-market.webp";
import Consultoria from "@/public/assets/images/carouselSection4/consultoria.webp";
import Saude from "@/public/assets/images/carouselSection4/saude.webp";
import Cursos from "@/public/assets/images/carouselSection4/cursos.webp";
import Construcao from "@/public/assets/images/carouselSection4/construcao.webp";
import Maintenance from "@/public/assets/images/carouselSection4/maintenance.webp";
import TI from "@/public/assets/images/carouselSection4/ti.webp";
import Software from "@/public/assets/images/carouselSection4/software.webp";
import Varejista from "@/public/assets/images/carouselSection4/varejista.webp";
import Atacadista from "@/public/assets/images/carouselSection4/atacadista.webp";
import { StaticImageData } from "next/image";

interface CarouselItemData {
    src: StaticImageData;
    alt: string;
    label: string;
  }
  
export const carouselItems: CarouselItemData[] = [
    {
      src: PubliMarket,
      alt: "Publicidade e Marketing",
      label: "Publicidade e Marketing",
    },
    { src: Consultoria, alt: "Consultoria", label: "Consultoria" },
    { src: Saude, alt: "Saúde", label: "Saúde" },
    { src: Cursos, alt: "Cursos e Treinamentos", label: "Cursos e Treinamentos" },
    {
      src: Construcao,
      alt: "Construção, Engenharia e Arquitetura",
      label: "Construção, Engenharia e Arquitetura",
    },
    {
      src: Maintenance,
      alt: "Instalação e Manutenção",
      label: "Instalação e Manutenção",
    },
    {
      src: TI,
      alt: "Tecnologia da Informação",
      label: "Tecnologia da Informação",
    },
    { src: Software, alt: "Software", label: "Software" },
    { src: Varejista, alt: "Comércio Varejista", label: "Comércio Varejista" },
    {
      src: Atacadista,
      alt: "Distribuidor Atacadista",
      label: "Distribuidor Atacadista",
    },
  ];
  